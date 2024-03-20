/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/AppComponent",
	"sap/fin/travel/lib/reuse/util/PersistenceHelper",
	"sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/FragmentHelper",
	"sap/fin/travel/lib/reuse/util/ODataModelUtil",
	"sap/fin/travel/lib/reuse/util/Utils",
	"sap/fin/travel/lib/reuse/util/ControlUtil",
	"sap/fin/travel/lib/reuse/util/MessageUtil",
	"sap/fin/travel/lib/reuse/util/ActionUtil",
	"sap/fin/travel/lib/reuse/util/TravelUtil",
	"sap/fin/travel/lib/reuse/util/NavigationUtil",
	"sap/ui/core/MessageType",
	"sap/m/MessageToast",
	"sap/m/VBox",
	"sap/m/MessageStrip",
	"sap/fin/travel/lib/reuse/util/MessageParser"
], function (JSONModel, AppComponent, PersistenceHelper, I18n, FragmentHelper, ODataModelUtil, Utils, ControlUtil, MessageUtil,
	ActionUtil, TravelUtil, NavigationUtil, MessageType, MessageToast, VBox, MessageStrip, MessageParser) {
	"use strict";

	var sCreditCardFragmentID = "CreditCardReceiptDialogFragment"; //const
	var sCreditCardTableID = "CreditCardBufferSetId::ResponsiveTable"; //const
	var oCreditCardFragment, oCreditCardTable, oCreditCardFilterBar;
	var oCreditCardFragmentModel = new JSONModel();

	function fnHandleCreditCardCancel() {
		if (oCreditCardFragment) {
			oCreditCardFragment.unbindElement();
			oCreditCardFragment.close();
			oCreditCardFragment = undefined;
		}
		FragmentHelper.get().destroy(sCreditCardFragmentID);
	}

	function fnHandleCreditCardItemPress(oEvent, oController) {
		oController._eventHandler.onSelectionChange(oEvent);
		var oTable = sap.ui.core.Fragment.byId(sCreditCardFragmentID, sCreditCardTableID);
		var oWizardStep2Button = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardStep2Button");
		var oSubmitButton = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "submitButton");
		if (oWizardStep2Button) {
			if (oTable && oTable.getSelectedItems().length > 0) {
				var oWizard = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardWizard");
				if (oWizard.getSteps()[1].getContent().length > 0) // if step 2 has been activated
				{
					oSubmitButton.setEnabled(true);
				} else {
					oWizardStep2Button.setEnabled(true);
				}
			} else {
				oWizardStep2Button.setEnabled(false);
				oSubmitButton.setEnabled(false);
			}
		}
	}

	function fnHandleCreditCardConfirm(oEventSource, oController, oForm, fnAbord) {
		var aCreditCardBuffer = [],
			oModel = oController.getView().getModel();
		var oBindingSource = oEventSource.getBindingContext();
		var oTravelExpense = {
			Pernr: oBindingSource.getProperty("Pernr"),
			Tripno: oBindingSource.getProperty("Tripno")
		};
		var fnNavigate;
		if (oForm) {
			var oFormBindingSource = oForm.getBindingContext();
			oTravelExpense.TSchema = oFormBindingSource.getProperty("TSchema");
			oTravelExpense.Tripno = oFormBindingSource.getProperty("Tripno") || "";
			fnNavigate = function (oData, response) {
				var oNavigation = NavigationUtil.getNavigationPathFromReponse(oData, response);
				if (!Utils.isEmptyObjectOrString(oNavigation.subPath)) {
					NavigationUtil.navigate(oNavigation.subPath, oController.getView().getModel("view").getProperty(
						"/level"));
				}
			};
		}

		if (oCreditCardTable.getTable().getSelectedItems() && oCreditCardTable.getTable().getSelectedItems().length > 0) {
			oCreditCardTable.getTable().getSelectedItems().forEach(function (oItem) {
				var oBindingContext = oItem.getBindingContext();
				aCreditCardBuffer.push(oBindingContext.getModel().getProperty(oBindingContext.getPath()));
			});
			oTravelExpense.AssignCreditCards = aCreditCardBuffer;

			var fnError = function (oData, oResponse) {
				var error = "";
				if (oResponse != undefined) {
					error = MessageUtil.get().getErrorMessageResponse(oResponse);
				} else {
					error = MessageUtil.get().getErrorMessageResponse(oData);
				}
				oCreditCardFragment.getModel("creditCardModel").setProperty("/StripMessage", error.hasOwnProperty("message") ? error.message : error);
				var sErrorType = error.hasOwnProperty("type") ? MessageParser.ErrorType.toMessageType(error.type) : MessageType.Error;
				oCreditCardFragment.getModel("creditCardModel").setProperty("/StripType", sErrorType);
				if (oForm) {
					var oWizard = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardWizard");
					oWizard.goToStep(oWizard.getSteps()[0]);
				}
			};
			var fnSuccess = function (oData, response) {
				var oResponse = response || oData;
				if (MessageUtil.get().hasError(MessageUtil.get().getErrorMessagesResponse(oResponse), [MessageType.Error])) {
					fnError(oData, response);
				} else {
					var oSmartTable = oCreditCardFragment.data("oSmartTable");
					if (oSmartTable) {
						oSmartTable.rebindTable();
					}
					fnHandleCreditCardCancel();
					if (typeof fnNavigate === "function") {
						if (fnAbord && typeof fnAbord === "function") {
							fnAbord(oController);
						}
						fnNavigate(oData, response);
					}
				}
			};

			PersistenceHelper.createDeepEntry(oModel, "/TravelExpenses", oTravelExpense, {
				success: fnSuccess,
				error: fnError,
				functionalError: fnSuccess
			});
		} else {
			fnHandleCreditCardCancel();
		}
	}

	function fnHandleCreditCardDelete(oEventSource, oController) {
		var oModel = oController.getView().getModel(),
			oTable = ControlUtil.getOwnerControl(oEventSource);
		var fnFunctionalError = function (oData, oResponse) {
			if (oResponse === undefined) {
				return;
			}
			var error = MessageUtil.get().getErrorMessageResponse(oResponse);
			oCreditCardFragment.getModel("creditCardModel").setProperty("/StripMessage", error.hasOwnProperty("message") ? error.message : error);
			var sErrorType = error.hasOwnProperty("type") ? MessageParser.ErrorType.toMessageType(error.type) : MessageType.Error;
			oCreditCardFragment.getModel("creditCardModel").setProperty("/StripType", sErrorType);
		};

		var fnSuccess = function () {
			oCreditCardFragment.getModel("creditCardModel").setProperty("/StripMessage", "");
		};

		oTable.getTable().getSelectedItems().forEach(function (oSelectedItem) {
			PersistenceHelper.remove(oModel, oSelectedItem.getBindingContext().getPath(), {
				success: fnSuccess,
				functionalError: fnFunctionalError
			});
		});
	}

	function _adjustReceiptWizardStep2Button(bVisible) {
		var oButtonStep2 = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardStep2Button");
		if (!Utils.isEmptyObjectOrString(oButtonStep2)) {
			oButtonStep2.setEnabled(bVisible);
		}
	}

	function fnHandleCreditCardStep2(oEvent, oController) {
		var oEventSource = oEvent.getSource();
		var oActionHandler = ActionUtil.getActionContext(oEvent, oController);
		oActionHandler.context.contextCreated().then(function (actionContext) {
			// Build smart form
			var mParameterForm = ActionUtil.buildParametersForm(oActionHandler.actionParam, actionContext);

			//adjust wizard step
			var oWizard = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardWizard");
			var currentWizardSteps = oWizard.getSteps();
			var oBegindWizardStep = currentWizardSteps[0];
			var oEndWizardStep = currentWizardSteps[currentWizardSteps.length - 1];

			// attach new callback functions
			oController.actionContext = actionContext;
			sap.ui.core.Fragment.byId(sCreditCardFragmentID, "endButton").attachPress(oController, oActionHandler.close);
			var fnSubmit = function () {
				var oField, sText, i;
				oCreditCardFragment.getModel("creditCardModel").setProperty("/StripMessage", "");
				if (mParameterForm.getEmptyMandatoryFields().length == 0 && mParameterForm.getEmptyMandatoryValueHelpFields().length ==
					0 && mParameterForm.checkValuesValidityFields() == 0) {
					fnHandleCreditCardConfirm(oEventSource, oController, mParameterForm.form, oActionHandler.close);
				} else {
					var aFieldAlreadyHandled = [];
					var aMessage = [];
					var sRootMessage = I18n.get().getText("MANDATORY_FIELD_ERROR");
					var sValueListMessage = I18n.get().getText("MANDATORY_VALUE_LIST_FIELD_ERROR");

					for (i = 0; i < mParameterForm.getEmptyMandatoryFields().length; i++) {
						oField = mParameterForm.getEmptyMandatoryFields()[i];
						sText = jQuery.sap.formatMessage(sRootMessage, oField.getTextLabel());
						aMessage.push({
							text: sText,
							type: MessageType.Error,
							showCloseButton: true
						});
						aFieldAlreadyHandled.push(oField.getTextLabel());
					}

					for (i = 0; i < mParameterForm.getEmptyMandatoryValueHelpFields().length; i++) {
						oField = mParameterForm.getEmptyMandatoryValueHelpFields()[i];
						if (aFieldAlreadyHandled.indexOf(oField.getTextLabel()) === -1) {
							sText = jQuery.sap.formatMessage(sValueListMessage, oField.getTextLabel());
							aMessage.push({
								text: sText,
								type: MessageType.Error,
								showCloseButton: true
							});
							aFieldAlreadyHandled.push(oField.getTextLabel());
						}
					}

					for (i = 0; i < mParameterForm.checkValuesValidityFields().length; i++) {
						var sFieldId = mParameterForm.checkValuesValidityFields()[i];
						oField = sap.ui.getCore().byId(sFieldId);
						if (oField) {
							if (aFieldAlreadyHandled.indexOf(oField.getTextLabel()) === -1) {
								sText = jQuery.sap.formatMessage(sValueListMessage, oField.getTextLabel());
								aMessage.push({
									text: sText,
									type: MessageType.Error,
									showCloseButton: true
								});
								aFieldAlreadyHandled.push(oField.getTextLabel());
							}
						}
					}

					if (aMessage.length > 0) {
						oCreditCardFragment.getModel("creditCardModel").setProperty("/StripMessage", aMessage[0].text);
						oCreditCardFragment.getModel("creditCardModel").setProperty("/StripType", aMessage[0].type);
						oWizard.goToStep(oBegindWizardStep);
					}
				}
			};
			sap.ui.core.Fragment.byId(sCreditCardFragmentID, "submitButton").attachPress(oController, fnSubmit);

			_adjustReceiptWizardStep2Button(false);
			setTimeout(function () {
				try {
					if (oEndWizardStep.getContent().length < 1) {
						oEndWizardStep.insertContent(mParameterForm.form, 1);
						oWizard.setCurrentStep(oEndWizardStep);
					}
				} catch (e) {
					jQuery.sap.log.error(e);
				}
				oWizard.goToStep(oEndWizardStep);
			}, 100); //API fails to go to proper step if not detached from main thread....

			var oButtonApply = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "submitButton");
			oButtonApply.setEnabled(true);
		});
	}

	function fnViewCreditCard(oEvent, oController, bWizard, sDraftTripno) {
		var oEventSource = oEvent.getSource();
		var oBindingSource = oEvent.getSource().getBindingContext(),
			sPernr = oBindingSource ? oBindingSource.getProperty("Pernr") : ODataModelUtil.get().getCurrentTripContext().Pernr;
		var sStripMessage = "";
		var sStripType = MessageType.None;
		var sDialogToBeOpen = "fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";

		if (bWizard) {
			sDialogToBeOpen = typeof ActionUtil.getActionContext === "function" ?
				"fin.travel.mytravelexpensesv2.view.fragments.WizardCreditCardDialog" :
				"fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";

			sStripMessage = sDraftTripno ? (TravelUtil.TripNumber.Initial === sDraftTripno ? I18n.get().getText(
				"DRAFT_WARNING_UNKNOWN", sDraftTripno) : I18n.get().getText("DRAFT_WARNING", sDraftTripno)) : "";
			sStripType = sDraftTripno ? MessageType.Warning : MessageType.None;
		}

		var fnAfterFragmentCreation = function () {
			sap.ui.core.Fragment.byId(sCreditCardFragmentID, "endButton").attachPress(oController, fnHandleCreditCardCancel);
			if (bWizard !== true) {
				sap.ui.core.Fragment.byId(sCreditCardFragmentID, "submitButton").attachPress(oController, function (oEventSrc) {
					fnHandleCreditCardConfirm(oEventSrc.getSource(), oController);
				});
			}
			var oWizardStep2Button = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "creditCardStep2Button");
			if (oWizardStep2Button) {
				oWizardStep2Button.attachPress(oController, fnHandleCreditCardStep2);
			}
			sap.ui.core.Fragment.byId(sCreditCardFragmentID, "CreditCardBufferSetId::Button::deleteEntry").attachPress(oController,
				function (oEventSrc) {
					fnHandleCreditCardDelete(oEventSrc.getSource(), oController);
				});
			sap.ui.core.Fragment.byId(sCreditCardFragmentID, sCreditCardTableID).attachSelectionChange(oController,
				fnHandleCreditCardItemPress);
		};
		var fnOpenFragment = function () {
			oCreditCardFragmentModel = {
				Pernr: sPernr,
				Tripno: oBindingSource ? oBindingSource.getProperty("Tripno") : "9999999999",
				BeginDate: oBindingSource ? oBindingSource.getProperty("Datedep") : undefined,
				EndDate: oBindingSource ? oBindingSource.getProperty("Datearr") : undefined,
				Creatable: oBindingSource === undefined,
				Deletable: !AppComponent.get().getGlobalModel().getProperty("/userprofile/CccNoReceDeleteable"),
				StripMessage: sStripMessage,
				StripType: sStripType
			};

			oCreditCardFragment.setModel(new JSONModel(oCreditCardFragmentModel), "creditCardModel");
			oCreditCardFragment.setModel(oController.getView().getModel());
			oCreditCardFragment.bindElement(oBindingSource ? oBindingSource.getPath() : "/UserProfiles('" + sPernr + "')");
			oCreditCardTable = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "CreditCardBufferSmartTable");
			oCreditCardFilterBar = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "CreditCardBufferFilterBar");
			oCreditCardFragment.data("oSmartTable", bWizard !== true ? ControlUtil.getSmartTable(oEventSource) : undefined);

			oCreditCardFragment.attachAfterOpen(function () {
				if (oCreditCardFilterBar.isInitialised()){
					oCreditCardFilterBar.triggerSearch();
				} 
				
				if (oCreditCardFilterBar.getBasicSearchControl()) {
					oCreditCardFilterBar.getBasicSearchControl().focus();
				}
			});

			oCreditCardFragment.open();
		};

		if (FragmentHelper.get().loadFragment && typeof FragmentHelper.get().loadFragment === "function") {
			FragmentHelper.get().loadFragment({
				id: sCreditCardFragmentID,
				name: sDialogToBeOpen,
				controller: this,
				models: {
					i18n: oController.getView().getModel("i18n")
				}
			}).then(function (creditCardFragment) {
				if (creditCardFragment) {
					if (!oCreditCardFragment) {
						oCreditCardFragment = creditCardFragment;
						fnAfterFragmentCreation();
					}
					fnOpenFragment();
				}
			});
		} else {
			if (!oCreditCardFragment) {
				oCreditCardFragment = FragmentHelper.get().getFragment({
					id: sCreditCardFragmentID,
					name: sDialogToBeOpen,
					controller: this,
					models: {
						i18n: oController.getView().getModel("i18n")
					}
				});
				fnAfterFragmentCreation();
			}
			fnOpenFragment();
		}
	}

	function fnHandleBeforeRebindTable(oSource) {
		var oFilterBar = sap.ui.core.Fragment.byId(sCreditCardFragmentID, "CreditCardBufferFilterBar");

		var binding = oSource.getParameter("bindingParams");
		if (binding && binding.filters) {
			var aFilters = binding.filters[0].aFilters;
			aFilters.forEach(function (oFilter) {
				if (oFilter && oFilter.sPath) {
					if (oFilter.sPath === "RecDate" && Utils.isEmptyDateOrString(oFilter.oValue1)) {
						oFilter.oValue1 = new Date(0);
						oFilterBar.getControlByKey("RecDate").setValue("");
					}
					if (oFilter.sPath === "RecDate" && Utils.isEmptyDateOrString(oFilter.oValue2)) {
						oFilter.oValue2 = new Date(9999999999999);
					}
				}
			});
		}
	}

	return {
		viewCreditCard: fnViewCreditCard,
		handleBeforeRebindTable: fnHandleBeforeRebindTable
	};

});