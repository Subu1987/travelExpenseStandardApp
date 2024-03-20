/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/FragmentHelper"
], function (JSONModel, I18n, FragmentHelper) {
	"use strict";

	var sSubmitDisclaimerFragmentID = "SubmitDisclaimerDialogFragment"; //const

	function fnSubmitDisclaimerCancel(oEvent, oController) {
		if (oController.oSubmitDisclaimerFragment) {
			oController.oSubmitDisclaimerFragment.unbindElement();
			oController.oSubmitDisclaimerFragment.close();
		}
	}

	function fnSubmitDisclaimerConfirm(oEvent, oController) {
		var fnError = function () {
			fnSubmitDisclaimerCancel(oEvent, oController);
		};
		var fnSuccess = function () {
			fnSubmitDisclaimerCancel(oEvent, oController);
		};

		oController._eventHandler.handleSubmitAction(oEvent, fnSuccess, fnError);
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
		};
		var fnOpenFragment = function () {
			oController.oSubmitDisclaimerFragment.bindElement(oEvent.getSource().getBindingContext().getPath());
			oController.oSubmitDisclaimerFragment.setModel(new JSONModel({
				submitText: oEvent.getSource().getBindingContext().getObject().SubmitText.length > 0 ? oEvent.getSource().getBindingContext().getObject()
					.SubmitText : I18n.get().getText(oController, "EXPENSE_SUBMIT_DISCLAIMER")
			}), "submitDisclaimerModel");
			oController.oSubmitDisclaimerFragment.open();
		};

		if (FragmentHelper.get().loadFragment && typeof FragmentHelper.get().loadFragment === "function") {
			FragmentHelper.get().loadFragment({
				id: sSubmitDisclaimerFragmentID,
				name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialog",
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
					name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialog",
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