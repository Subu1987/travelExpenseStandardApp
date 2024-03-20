/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/FragmentHelper",
	"sap/fin/travel/lib/reuse/util/Utils",
	"sap/m/MessageToast",
	"sap/ui/core/ValueState",
	"sap/ui/core/MessageType",
	"sap/m/MessageStrip"
], function (JSONModel, I18n, FragmentHelper, Utils, MessageToast, ValueState, MessageType, MessageStrip) {
	"use strict";

	var sSubmitDisclaimerFragmentID = "SubmitDisclaimerDialogFragment"; //const

	function _fnPrepareReasonField(oModel, oContext) {
		var oMetaModel = oModel.getMetaModel();
		var oTravelExpenseEntityType = oMetaModel.getODataEntityType("TRV_MTE_SRV.TravelExpense");
		var oReason = oMetaModel.getODataProperty(oTravelExpenseEntityType, "Reason");
		var oReasonAnnotation = oMetaModel.getObject("com.sap.vocabularies.Common.v1.Label/String", oReason);
		var sReasonLabel = oReasonAnnotation || oReason["sap:label"];

		var oFacadeModel = new JSONModel({
			Reason: oContext.getProperty("Reason"),
			ReasonProperty: oReason
		});

		return {
			facadeModel: oFacadeModel,
			label: sReasonLabel
		};
	}

	function fnValidateReasonFields(oInput, oController) {
		var oBinding = oInput.getBinding("value");
		var bValidationError = false;

		try {
			if (oInput.getVisible()) {
				oBinding.getType().validateValue(oInput.getValue());
			}
		} catch (oException) {
			bValidationError = true;
			oInput.setValueState(ValueState.Error);
		}

		return bValidationError;
	}

	function fnSubmitDisclaimerCancel(oEvent, oController) {
		if (oController.oSubmitDisclaimerFragment) {
			// Uncheck disclaimer 
			sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SubmitCheckbox").setSelected(false);
			sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SubmitButton").setEnabled(false);
			oController.oSubmitDisclaimerFragment.unbindElement();
			oController.oSubmitDisclaimerFragment.close();
		}
	}

	function fnSubmitDisclaimerConfirm(oEvent, oController) {
		var fnSuccess = function () {
			fnSubmitDisclaimerCancel(oEvent, oController);
		};
		var fnFunctionalError = function () {
			fnSubmitDisclaimerCancel(oEvent, oController);
			MessageToast.show(I18n.get().getText(oController, "SUBMIT_ERROR_MSG"), {
				duration: 2000,
				onClose: oController._eventHandler.onShowMessages
			});
		};

		// Handle error handling on reason field when submit
		var oReasonInputField = sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SumbitInputReasonID");
		if (!fnValidateReasonFields(oReasonInputField, oController)) {
			// Handle Facade Model: TODO: To externalized into a dedicated service.
			if (!Utils.isEmptyObjectOrString(oReasonInputField.getValue())) {
				var oModel = oController.getView().getModel();
				var oFacadeModel = oController.oSubmitDisclaimerFragment.getModel("facadeModel");
				oModel.setProperty("Reason", oFacadeModel.getProperty("/Reason"), oController.getView().getBindingContext());
			}

			oController._eventHandler.handleSubmitAction(oEvent, fnSuccess, fnFunctionalError, fnFunctionalError);
		}
	}

	function fnSubmitDisclaimerSelect(oEvent, oController) {
		sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SubmitButton").setEnabled(oEvent.getParameter("selected"));
	}

	function fnViewSubmitDisclaimer(oEvent, oController) {
		var fnAfterFragmentCreation = function () {
			sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "CancelButton").attachPress(oController, fnSubmitDisclaimerCancel);
			sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SubmitButton").attachPress(oController, fnSubmitDisclaimerConfirm);
			sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SubmitCheckbox").attachSelect(oController, fnSubmitDisclaimerSelect);

			oController.oSubmitDisclaimerFragment.setModel(oController.getView().getModel());

			// Error handling
			// var oReasonInputField = sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SumbitInputReasonID");
			var oMetaModel = oController.getView().getModel().getMetaModel();
			var oTravelExpenseEntityType = oMetaModel.getODataEntityType("TRV_MTE_SRV.TravelExpense");
			var oReason = oMetaModel.getODataProperty(oTravelExpenseEntityType, "Reason");
			var oReasonInputField = new sap.m.Input({
				id: sSubmitDisclaimerFragmentID + "--SumbitInputReasonID",
				type: "Text",
				value: {
					path: "facadeModel>/Reason",
					type: "sap.ui.model.type.String",
					constraints: {
						minLength: 1,
						maxLength: oReason.maxLength
					}
				},
				visible: "{= ${ReasonFc} > 0 }"
			});
			var oReasonForm = sap.ui.core.Fragment.byId(sSubmitDisclaimerFragmentID, "SimpleFormReasonID");
			oReasonForm.addContent(oReasonInputField);
			sap.ui.getCore().getMessageManager().registerObject(oReasonInputField, true);
			oReasonInputField.attachLiveChange(function (oData) {
				if (!Utils.isEmptyObjectOrString(oData.getParameter("value"))) {
					oReasonInputField.setValueState(ValueState.None);
					oReasonInputField.setValueStateText("");
				}
			});
		};
		var fnOpenFragment = function () {
			// Handle Facade Model: TODO: To externalized into a dedicated service.
			var oReasonContext = _fnPrepareReasonField(oController.getView().getModel(), oController.getView().getBindingContext());
			oController.oSubmitDisclaimerFragment.setModel(oReasonContext.facadeModel, "facadeModel");

			// get error message
			var aMessages = oEvent.getErrors();

			oController.oSubmitDisclaimerFragment.bindElement(oEvent.getSource().getBindingContext().getPath());
			oController.oSubmitDisclaimerFragment.setModel(new JSONModel({
				stripMessage: aMessages && aMessages.length > 0 ? aMessages[0].message : "",
				stripType: aMessages && aMessages.length > 0 ? MessageType.Warning : MessageType.None,
				submitText: oEvent.getSource().getBindingContext().getObject().SubmitText.length > 0 ? oEvent.getSource().getBindingContext().getObject()
					.SubmitText : I18n.get().getText(oController, "EXPENSE_SUBMIT_DISCLAIMER"),
				reasonLabel: Utils.isEmptyObjectOrString(oReasonContext.label) ? I18n.get().getText(oController, "SUBMIT_REASON_LABEL") : oReasonContext
					.label
			}), "submitDisclaimerModel");

			oController.oSubmitDisclaimerFragment.open();
		};

		if (FragmentHelper.get().loadFragment && typeof FragmentHelper.get().loadFragment === "function") {
			FragmentHelper.get().loadFragment({
				id: sSubmitDisclaimerFragmentID,
				name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialogWithReason",
				controller: oController,
				models: {
					i18n: oController.getView().getModel("i18n")
				}
			}).then(function (submitDisclaimerFragment) {
				if (submitDisclaimerFragment) {
					if (!oController.oSubmitDisclaimerFragment) {
						oController.oSubmitDisclaimerFragment = submitDisclaimerFragment;
						fnAfterFragmentCreation();
					}
					fnOpenFragment();
				}
			});
		} else {
			if (!oController.oSubmitDisclaimerFragment) {
				oController.oSubmitDisclaimerFragment = FragmentHelper.get().getFragment({
					id: sSubmitDisclaimerFragmentID,
					name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialogWithReason",
					controller: oController,
					models: {
						i18n: oController.getView().getModel("i18n")
					}
				});
				fnAfterFragmentCreation();
			}
			fnOpenFragment();
		}
	}

	return {
		viewSubmitDisclaimer: fnViewSubmitDisclaimer
	};

});