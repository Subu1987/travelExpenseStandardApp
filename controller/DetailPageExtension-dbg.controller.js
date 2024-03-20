/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
 /*global $, jQuery, sap*/
 sap.ui.define([
 	"sap/fin/travel/lib/reuse/util/CustomAction",
 	"sap/fin/travel/lib/reuse/util/FragmentHelper",
 	"sap/fin/travel/lib/reuse/util/PersistenceHelper",
 	"fin/travel/mytravelexpensesv2/util/CreditCardUtil",
 	"fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerHelper",
 	"fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerWithReasonHelper",
 	"sap/ui/model/json/JSONModel",
 	"sap/fin/travel/lib/reuse/util/MessageUtil",
 	"sap/fin/travel/lib/reuse/util/Utils",
 	"sap/fin/travel/lib/reuse/util/i18n",
 	"sap/fin/travel/lib/reuse/util/AnnotationHelper",
 	"sap/m/DateRangeSelection",
 	"sap/m/MessageToast",
 	"sap/fin/travel/lib/reuse/util/MessageParser",
 	"sap/ui/core/MessageType"
 ], function (CustomAction, FragmentHelper, PersistenceHelper, CreditCardUtil, SubmitDisclaimerHelper, SubmitDisclaimerWithReasonHelper,
 	JSONModel, MessageUtil, Utils, I18n, AnnotationHelper, DateRangeSelection, MessageToast, MessageParser, MessageType) {
 	"use strict";

 	var sWizardSplitReceiptDialogID = "WizardSplitReceiptDialog";

 	return sap.ui.controller("fin.travel.mytravelexpensesv2.controller.DetailPageExtension", {

 		/**
 		 * Return a control by ID of a given fragment is specified.
 		 * Fisrt look into byId method of the Controllern, then by fragment and finally using Core method.
 		 */
 		_byId: function (controlId, fragmentId) {
 			var oControl;
 			if (this.byId) {
 				oControl = this.byId(controlId);
 			}
 			if (Utils.isEmptyObjectOrString(oControl) && !Utils.isEmptyObjectOrString(fragmentId)) {
 				oControl = sap.ui.core.Fragment.byId(fragmentId, controlId);
 			}
 			if (Utils.isEmptyObjectOrString(oControl)) {
 				oControl = sap.ui.getCore().byId(controlId);
 			}
 			return oControl;
 		},

 		onInit: function () {},

 		onExit: function () {
 			//manual destroy for these objects. They are not destroyed with dialog...
 			var fnDestroyIfExists = function (oElem) {
 				if (oElem && typeof oElem.destroy === "function") {
 					oElem.destroy();
 				}
 			};
 			var oProductTable = this._byId("ReceiptWizardProductsTable", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oProductTable);
 			var oAttendeeTable = this._byId("ReceiptWizardAttendeesTable", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oAttendeeTable);
 			var oSmartFormSplitData = this._byId("receiptWizardSmartFormSplitData", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oSmartFormSplitData);
 			var oSmartFormReceiptData = this._byId("receiptWizardSmartFormReceiptData", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oSmartFormReceiptData);
 			var oButtonApply = this._byId("receiptWizardButtonApply", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oButtonApply);
 			var oButtonStep2 = this._byId("step2Button", sWizardSplitReceiptDialogID);
 			fnDestroyIfExists(oButtonStep2);
 			//var oWizard = this.byId("receiptWizard");
 		},

 		onAfterRendering: function () {
 			$.noop();
 		},

 		onBeforeRendering: function () {
 			$.noop();
 		},

 		_isFilled: function (oObject) {
 			return oObject !== undefined && oObject !== null && oObject !== "";
 		},

 		handleAddTripBreak: function (oEvent) {
 			CustomAction.handleAddTripBreak(oEvent, this);
 		},

 		handleCreditCard: function (oEvent) {
 			CreditCardUtil.viewCreditCard(oEvent, this);
 		},

 		switchStateStringToBoolean: function (oValue) {
 			return oValue ? true : false;
 		},

 		onPerDiemDeductionPress: function (oEvent) {
 			//in display mode, we do not have to check for errors in the forms
 			var bDisplayMode = oEvent.getSource().getBindingContext().getProperty("DisplayMode");
 			var that = this;
 			var oBindingSource = oEvent.getSource().getBindingContext();
 			var sFragmentId = that.getView().getId() + "PerDiemDialogFragment";

 			var fnOpenPDDialog = function () {
 				var fnOpenFragment = function () {
 					that.oPDDeductionsDialog.getModel("messageModel").setProperty("/stripMessage", "");

 					//prepare column visibility
 					sap.ui.core.Fragment.byId(sFragmentId, "perDiemListTable").attachUpdateFinished(function (oEventCallBack) {
 						if (!oEventCallBack.getParameter("reason") || "Refresh" !== oEventCallBack.getParameter("reason")) {
 							return;
 						}
 						//check first line if any. Infer the visbility from the different FCs.
 						var oTable = oEventCallBack.getSource();
 						var aItems = oTable.getItems();
 						if (aItems.length == 0) {
 							return;
 						}
 						var sPDBindingContext = aItems[0].getBindingContextPath();
 						var oPerDiemEntry = oTable.getModel().getObject(sPDBindingContext);
 						//(date) then following columns BreakDe, BreakPik, DinneDe, DinnePik, LunchDe, LunchPik, LuCoupn, NightDe
 						var aColumnFCs = [
 							["BreakDeFc", "BreakDeTimeFc"], "BreakPikFc", ["LunchDeFc", "LunchDeTimeFc"], "LunchPikFc", ["DinneDeFc",
 								"DinneDeTimeFc"
 							],
 							"DinnePikFc", "LuCoupnFc", ["NightDeFc", "NightDeTimeFc"]
 						];
 						aColumnFCs.forEach(function (sFC, i) {
 							//first entry for the per diem indicates that this column would or not need to be visible. We hide it by default unless the FC says otherwise
 							var bVisible = false;
 							if ($.isArray(sFC)) {
 								//several controls into the same column. if at least one is visible, we can let the column displayed.
 								bVisible = sFC.some(function (sFCValue) {
 									var iFCValue = oPerDiemEntry[sFCValue];
 									return iFCValue > 0;
 								});
 							} else {
 								var iFCValue = oPerDiemEntry[sFC];
 								if (iFCValue > 0) {
 									bVisible = true;
 								}
 							}
 							//i + 1, as the first column is the date
 							oTable.getColumns()[i + 1].setVisible(bVisible);
 						});

 						//indicate that we can collect all changes from group pdDeductionsChanges
 						var oModel = oTable.getModel();
 						var aDeferredGroups = oModel.getDeferredGroups();
 						aDeferredGroups = aDeferredGroups.concat(["pdDeductionsChanges"]);
 						oModel.setDeferredGroups(aDeferredGroups);

 						//We add the PerDiemDeduction entity to a different group id to manage
 						//all per diem modification independently from the rest of the application

 						var oChangeGroups = oModel.getChangeGroups();
 						oChangeGroups.PerDiemDeduction = {
 							groupId: "pdDeductionsChanges",
 							changeSetId: "pdDeductionsChangesId",
 							single: true
 						};
 						oModel.setChangeGroups(oChangeGroups);

 						var fnEscapeHandler = function (result) {
 							that._perdiemReset(oTable, {
 								fnSuccess: function () {
 									that.oPDDeductionsDialog.unbindElement();
 									result.resolve();
 								}
 							});
 						};
 						that.oPDDeductionsDialog.setEscapeHandler(fnEscapeHandler);

 					});

 					that.oPDDeductionsDialog.setModel(that.getView().getModel());
 					that.oPDDeductionsDialog.bindElement(oBindingSource.getPath());

 					sap.ui.core.Fragment.byId(sFragmentId, "perDiemListTable").getBinding("items").refresh();

 					that.oPDDeductionsDialog.open();
 				};

 				if (FragmentHelper.get().loadFragment && typeof FragmentHelper.get().loadFragment === "function") {
 					FragmentHelper.get().loadFragment({
 						id: sFragmentId,
 						name: "fin.travel.mytravelexpensesv2.view.fragments.PerDiemDialog",
 						controller: that,
 						models: {
 							i18n: that.getView().getModel("i18n"),
 							messageModel: new JSONModel({
 								stripMessage: "",
 								stripType: MessageType.None
 							})
 						}
 					}).then(function (oPerDiemDialog) {
 						if (oPerDiemDialog) {
 							that.oPDDeductionsDialog = oPerDiemDialog;
 							fnOpenFragment();
 						}
 					});
 				} else {
 					if (!that.oPDDeductionsDialog) {
 						that.oPDDeductionsDialog = FragmentHelper.get().getFragment({
 							id: sFragmentId,
 							name: "fin.travel.mytravelexpensesv2.view.fragments.PerDiemDialog",
 							controller: that,
 							models: {
 								i18n: that.getView().getModel("i18n"),
 								messageModel: new JSONModel({
 									stripMessage: "",
 									stripType: MessageType.None
 								})
 							}
 						});
 					}
 					fnOpenFragment();
 				}
 			};
 			if (bDisplayMode === true) {
 				fnOpenPDDialog();
 			} else {
 				this._eventHandler.checkAppForms(oEvent, false, fnOpenPDDialog);
 			}
 		},

 		/**
 		 * Apply the pending changes on the per-diem deductions.
 		 * All changes collected on groupId pdDeductionsChanges are then synced with the backend
 		 * It's possible to execute a fnSuccess function or fnError function (through the oParameters object) in case of submit changes success or error.
 		 *
 		 * @param{object}: oTable table containing the per diem deductions
 		 * @param{object}: oParameters object which can contain a fnSuccess and fnError function. This fnSuccess function is executed at the end of a successful submitchanges.
 		 */
 		_perdiemApply: function (oTable, oParameters) {
 			var oModel = oTable.getModel();
 			var oPerDiemDialog = this.oPDDeductionsDialog;

 			var fnErrorCallback = function (oResponse) {
 				if (undefined !== oResponse) {
 					var sError = MessageUtil.get().getErrorMessageBatch(oResponse);
 					oPerDiemDialog.getModel("messageModel").setProperty("/stripMessage", sError);
 					oPerDiemDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				}

 				if (oParameters && oParameters.fnError && "function" === typeof oParameters.fnError) {
 					oParameters.fnError();
 				}
 			};
 			//submitChanges with specific groupId
 			PersistenceHelper.submitChanges(oModel, {
 				settings: {
 					groupId: "pdDeductionsChanges"
 				},
 				success: function (oResponse) {
 					//in case of several changes, when some requests succeed, this callback is being called.
 					//We should there check all the different responses to find out potential blocking error, functional error
 					//XXX we should parse the different response, looking for a specific error
 					oPerDiemDialog.getModel("messageModel").setProperty("/stripMessage", "");
 					//refresh total per diem attributes which are located in the header
 					oModel.invalidateEntry(oTable.getBindingContext().getPath());
 					oModel.read(oTable.getBindingContext().getPath(), {
 						success: oParameters && oParameters.fnSuccess,
 						error: fnErrorCallback
 					});
 				},
 				error: fnErrorCallback
 			});
 		},

 		/**
 		 * Reset per-diem and execute a fnSuccess function if provided.
 		 * The reset is a frontend reset (ODatamodelv2 reset of pending changes) on all per diem deductions of the current travel expense context
 		 *
 		 * @param{object}: oTable table containing the per diem deductions
 		 * @param{object}: oParameters object which can contain a fnSuccess function. This function is executed at the end of the reset.
 		 */
 		_perdiemReset: function (oTable, oParameters) {
 			var oModel = oTable.getModel();
 			//var oTable.getBindingContext().getPath();
 			var sTripno = oTable.getBindingContext().getProperty("Tripno");
 			var sPernr = oTable.getBindingContext().getProperty("Pernr");

 			//makes sure that only PerDiemDeductions is reset
 			Object.getOwnPropertyNames(oModel.getPendingChanges()).filter(function (e) {
 				return e.startsWith("PerDiemDeductions(");
 			}).filter(function (e) {
 				return -1 !== e.indexOf("Tripno='" + sTripno + "'") && -1 !== e.indexOf("Pernr='" + sPernr + "'");
 			}).forEach(function (e, i) {
 				oModel.resetChanges(["/" + e]);
 			});

 			if (oParameters && oParameters.fnSuccess && "function" === typeof oParameters.fnSuccess) {
 				oParameters.fnSuccess();
 			}

 		},

 		handlePerDiemApplyAndClose: function (oEvent) {
 			var oPerDiemDialog = this.oPDDeductionsDialog;
 			this._perdiemApply(oEvent.getSource(), {
 				fnSuccess: function () {
 					oPerDiemDialog.unbindElement();
 					oPerDiemDialog.close();
 				}
 			});

 		},
 		handlePerDiemApply: function (oEvent) {
 			this._perdiemApply(oEvent.getSource());
 		},
 		handlePerDiemReset: function (oEvent) {
 			this._perdiemReset(oEvent.getSource());

 		},
 		handlePerDiemCancel: function (oEvent) {
 			//reset and close
 			var oPerDiemDialog = this.oPDDeductionsDialog;
 			this._perdiemReset(oEvent.getSource(), {
 				fnSuccess: function () {
 					oPerDiemDialog.unbindElement();
 					oPerDiemDialog.close();
 				}
 			});

 		},

 		handlePerDiemClose: function (oEvent) {
 			this.oPDDeductionsDialog.unbindElement();
 			this.oPDDeductionsDialog.close();
 		},

 		/***
 		 * Receipt Wizard
 		 */
 		_adjustReceiptWizardStep2Button: function (bVisible) {
 			var oButtonStep2 = this._byId("step2Button", sWizardSplitReceiptDialogID);
 			if (!Utils.isEmptyObjectOrString(oButtonStep2)) {
 				oButtonStep2.setVisible(bVisible);
 			}
 		},

 		handleWizardStep1ExpTypeComplete: function (oEvent) {
 			//call again function CreateReceiptWizard with proper expense type value.
 			var oViewBindingContext = oEvent.getSource().getBindingContext();

 			if (!oViewBindingContext) {
 				return;
 			}

 			if (Utils.isEmptyObjectOrString(oViewBindingContext.getProperty("ExpType"))) {
 				this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", I18n.get().getText(this,
 					"WIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY"));
 				this.oWizardDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				return;
 			}
 			this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", "");
 			this.oWizardDialog.getModel("messageModel").setProperty("/stripType", MessageType.None);

 			var oWizard = this._byId("receiptWizard", sWizardSplitReceiptDialogID);
 			var mParameters = {
 				ExpType: oViewBindingContext.getProperty("ExpType"), // will be selected during first wizard step
 				Receiptno: oViewBindingContext.getProperty("Receiptno"),
 				Pernr: oViewBindingContext.getProperty("Pernr"),
 				Tripno: oViewBindingContext.getProperty("Tripno")
 			};

 			var that = this;
 			var fnReceiptWizardCompleted = function (oData, oResponse) {
 				//The model should be properly refreshed, field controls updated at this point.

 				//adjust wizard step
 				oWizard.removeAllSteps();
 				that._fnInternalAddWizardStep(oWizard, that.oWizardSteps[0]);
 				that._fnInternalAddWizardStep(oWizard, that.oWizardSteps[1]);

 				//adjust visibility of steps according to FCs
 				//sections order is receipt (always mandatory), vat, flight, vendor, attendees, products
 				var aWizardStepsVisibility = ["HiddenVatDetails", "HiddenBooking", "HiddenVendor", "HiddenParticipant", "HiddenProduct"];
 				//assume that the two first steps could not be hidden (exp type and split data + receipt details)
 				that.oWizardSteps.slice(2).forEach(function (v, i) {
 					//if it's set to hidden section, let's hide it
 					var sHiddenProperty = aWizardStepsVisibility[i];
 					if (oData.hasOwnProperty(sHiddenProperty) && oData[sHiddenProperty] === false) {
 						that._fnInternalAddWizardStep(oWizard, v);
 						//oWizard.addStep(v);
 					}
 				});

 				var currentWizardSteps = oWizard.getSteps();
 				var oBeginWizardStep = currentWizardSteps[1];
 				var oEndWizardStep = currentWizardSteps[currentWizardSteps.length - 1];

 				that._adjustReceiptWizardStep2Button(false);
 				setTimeout(function () {
 					try {
 						oWizard.setCurrentStep(oEndWizardStep);
 					} catch (e) {
 						//API fails to go to top....we silently get rid of Wizard's inconsistency
 					}
 					oWizard.goToStep(oBeginWizardStep);
 				}, 100); //API fails to go to proper step if not detached from main thread....

 				var oButtonApply = that._byId("receiptWizardButtonApply", sWizardSplitReceiptDialogID);
 				oButtonApply.setEnabled(true);
 			};
 			
 			var fnError = function (oResponse) {
				if (undefined !== oResponse) {
					MessageUtil.get().preventNextShowMessage(function(){
						$.noop();
					});
					var sError = MessageUtil.get().getErrorMessageBatch(oResponse);
					that.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", sError.error);
 					that.oWizardDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				}
					
 				//	
 				
 				
 			};

 			PersistenceHelper.callFunction(oEvent.getSource().getModel(), {
 				name: "/CreateReceiptWizard",
 				settings: {
 					async: true
 				},
 				urlParameters: mParameters,
 				success: fnReceiptWizardCompleted,
 				functionalError: fnError,
 				error: fnError
 			});

 		},

 		handleWizardStep1ExpTypeChange: function (oEvent) {
 			//upon expense type change, we should propose to re-complete the first step
 			var oStep = oEvent.getSource().getParent();
 			var oWizard = oStep.getParent();
 			oWizard.setCurrentStep(oStep);
 			//reset apply button state
 			var oButtonApply = this._byId("receiptWizardButtonApply", sWizardSplitReceiptDialogID);
 			oButtonApply.setEnabled(false);
 			//clean out potential messages that were with the other expense type as well as related aggregations
 			this._resetWizardSplitReceipt({
 				bMessages: true,
				bAggregations: true,
				bRestoreGlobalMessageManager: true
 			});

 			this._adjustReceiptWizardStep2Button(true);

 			//oWizard.goToStep(oStep); does not work properly

 		},

 		/**
 		 * Settings to know what to reset. If nothing is provided, all settings are activated (a complete cleanup)
 		 *
 		 * mSettings with map:
 		 *  * bMessages: clean out the messages
 		 *  * bAggregations: clean out the aggregations
 		 *  * bEntity: clean the entity and reset the whole dialog
 		 *  * bRestoreGlobalMessageManager: restore the global message manager model to the one known before dialog opening
 		 *  * bSuccess: shortcut to say all but bRestoreGlobalMessageManager
 		 */
 		_resetWizardSplitReceipt: function (mSettings) {
 			if (!mSettings) {
 				mSettings = {
 					bMessages: true,
 					bAggregations: true,
 					bEntity: true,
					bRestoreGlobalMessageManager: true
 				};
 			}
			//in case of success, we are going to close the dialog. We can reset all BUT the global message manager
			if (mSettings.bSuccess){
				mSettings = {
					bMessages: true,
					bAggregations: true,
					bEntity: true,
				   	bRestoreGlobalMessageManager: false
				};
			}
 			if (this.oWizardDialog) {
 				var oModel = this.oWizardDialog.getModel();

 				var oSmartFormSplitData = this._byId("receiptWizardSmartFormSplitData", sWizardSplitReceiptDialogID);
 				var oSmartFormReceiptData = this._byId("receiptWizardSmartFormReceiptData", sWizardSplitReceiptDialogID);

 				if (mSettings.bMessages === true) {
 					this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", "");
 					this.oWizardDialog.getModel("messageModel").setProperty("/stripType", MessageType.None);
 					//In addition, we manually verify if mandatory fields are filled or not (the default check allows mandatory values to be null if the underlying type is nullable)
 					var fnSmartFieldResetState = function (e) {
 						e.setValueState("None");
 						e.setValueStateText("");
 					};

 					oSmartFormSplitData.getSmartFields().forEach(fnSmartFieldResetState);
 					oSmartFormReceiptData.getSmartFields().forEach(fnSmartFieldResetState);
 				}
 				
 				if (mSettings.bRestoreGlobalMessageManager === true){
					sap.ui.getCore().getMessageManager().removeAllMessages();
	 				sap.ui.getCore().getMessageManager().getMessageModel().setData(this.oWizardDialogMsgModel);
 				}

 				if (mSettings.bAggregations === true) {
 					//delete each item of the participant table
 					var oAttendeeTable = this._byId("ReceiptWizardAttendeesTable", sWizardSplitReceiptDialogID);
 					oAttendeeTable.getTable().getItems().forEach(function (v) {
 						oModel.deleteCreatedEntry(v.getBindingContext());
 					});
 					oAttendeeTable.getTable().removeAllItems();
 					//delete each item of the product table
 					var oProductTable = this._byId("ReceiptWizardProductsTable", sWizardSplitReceiptDialogID);
 					oProductTable.getTable().getItems().forEach(function (v) {
 						oModel.deleteCreatedEntry(v.getBindingContext());
 					});
 					oProductTable.getTable().removeAllItems();
 				}

 				if (mSettings.bEntity && this.oWizardDialog.getBindingContext()) {
 					//finally, delete created ReceiptWizard entry
 					oModel.deleteCreatedEntry(this.oWizardDialog.getBindingContext());

 					//prepare the dialog for potential next opening (wizard could not be easily reset, specially if it never renders)
 					this._adjustReceiptWizardStep2Button(true);

 					this.oWizardDialog.unbindElement();

 					var oButtonApply = this._byId("receiptWizardButtonApply", sWizardSplitReceiptDialogID);
 					oButtonApply.setEnabled(false);

 				}

 			}
 		},

 		handleWizardCancel: function (oEvent) {
 			this._resetWizardSplitReceipt();
 			this.oWizardDialog.close();
 		},

 		_fnInternalAddWizardStep: function (oWizard, oStep) {
 			var fnRemoveStep = sap.m.Wizard.prototype.removeStep;
 			sap.m.Wizard.prototype.removeStep = $.noop;
 			try {
 				oWizard.addStep(oStep);
 			} catch (e) {
 				jQuery.sap.log.error("Exception during oWizard.addStep");
 			}
 			sap.m.Wizard.prototype.removeStep = fnRemoveStep;
 		},

 		/**
 		 * Split wizard for receipts
 		 */
 		handleWizardSplitReceipt: function (oEvent) {
 			//open new dialog
 			//var oBindingSource = oEvent.getSource().getBindingContext();
 			//var sPernr = oBindingSource.getProperty("Pernr");
 			//var sTripNo = oBindingSource.getProperty("Tripno");
 			var that = this;
 			var oEventSource = oEvent.getSource();
 			var oModel = oEventSource.getModel();

 			var fnAfterFragmentCreation = function () {
 				var fnEscapeHandler = function (result) {
 					that._resetWizardSplitReceipt();
 					return result.resolve();
 				};
 				that.oWizardDialog.setEscapeHandler(fnEscapeHandler);
 			};
 			var fnOpenFragment = function () {
 				var sSmartTableId = oEventSource.getParent().getParent().getId(); //button located in the toolbar of the smart table
 				that.oWizardDialogMsgModel = sap.ui.getCore().getMessageManager().getMessageModel().getData();
 				that.oWizardDialog.data("splitReceiptWizardTableId", sSmartTableId);

 				var fnError = function (oData, oResponse) {
				   that._resetWizardSplitReceipt();
 				};

 				var fnReceiptWizardCreated = function (oData, oResponse) {
 					var fnSetFocus = function () {
 						//Focus on Dialog
 						that.oWizardDialog.focus();
 						if (that.oWizardSteps[0] && that.oWizardSteps[0].getContent()[0]) {
 							that.oWizardSteps[0].getContent()[0].focus();
 						}
 						that.oWizardDialog.detachAfterOpen(fnSetFocus);
 					};

 					that.oWizardDialog.attachAfterOpen(fnSetFocus);
 					that.oWizardDialog.open();

 					//save all steps
 					var oWizard = that._byId("receiptWizard", sWizardSplitReceiptDialogID);
 					if (Utils.isEmptyObjectOrString(that.oWizardSteps)) {
 						that.oWizardSteps = oWizard.removeAllSteps();
 					} else {
 						oWizard.removeAllSteps();
 					}

 					oWizard.addStep(that.oWizardSteps[0]);
 					oWizard.addStep(that.oWizardSteps[1]);
 					oWizard.setCurrentStep(oWizard.getSteps()[0]);
 					that._adjustReceiptWizardStep2Button(true);
 					//start step1 of the wizard. attach the expense type to the smart field

 					//get the context path
 					that.oWizardDialog.setModel(oModel);
 					var sReceiptWizardPath = oData.__metadata.id;
 					var iMetaDataIndex = sReceiptWizardPath.indexOf("/ReceiptWizard");
 					if (iMetaDataIndex > -1) {
 						sReceiptWizardPath = sReceiptWizardPath.slice(iMetaDataIndex);
 					}
 					that.oWizardDialog.bindElement(sReceiptWizardPath);

 					//We manually get rid of the review button. The dialog buttons are sufficient to handle the wizard review
 					//var oWizard = sap.ui.core.Fragment.byId(sFragmentId, "receiptWizard");
 				};

 				var oViewBindingContext = that.getView().getBindingContext();
 				var mParameters = {
 					ExpType: "", // will be selected during first wizard step
 					Receiptno: oViewBindingContext.getProperty("Receiptno"),
 					Pernr: oViewBindingContext.getProperty("Pernr"),
 					Tripno: oViewBindingContext.getProperty("Tripno")
 				};

			   var fnSuccessSubmit = function(){
 				PersistenceHelper.callFunction(oModel, {
 					name: "/CreateReceiptWizard",
 					settings: {
 						async: true
 					},
 					urlParameters: mParameters,
 					success: fnReceiptWizardCreated,
 					functionalError: fnError,
 					error: fnError
 				});
 			};

			   PersistenceHelper.submitChanges(oModel, {
				   source: oEventSource,
				   success: fnSuccessSubmit,
				   functionalError: fnSuccessSubmit, //in case of functional error in the global model, we still try to create the itemized receipt
				   error: fnError,
				   submitChangeOrigin: PersistenceHelper.SUBMIT_CHANGE_ORIGIN.ACTION,
			   });

			};

 			if (FragmentHelper.get().loadFragment && typeof FragmentHelper.get().loadFragment === "function") {
 				FragmentHelper.get().loadFragment({
 					id: sWizardSplitReceiptDialogID,
 					name: "fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialog",
 					controller: this,
 					models: {
 						i18n: this.getView().getModel("i18n"),
 						messageModel: new JSONModel({
 							stripMessage: "",
 							stripType: MessageType.None
 						})
 					}
 				}).then(function (wizardDialog) {
 					if (wizardDialog) {
 						if (!that.oWizardDialog) {
 							that.oWizardDialog = wizardDialog;
 							fnAfterFragmentCreation();
 						}
 						fnOpenFragment();
 					}
 				});
 			} else {
 				if (!this.oWizardDialog) {
 					this.oWizardDialog = FragmentHelper.get().getFragment({
 						id: sWizardSplitReceiptDialogID,
 						name: "fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialog",
 						controller: this,
 						models: {
 							i18n: this.getView().getModel("i18n"),
 							messageModel: new JSONModel({
 								stripMessage: "",
 								stripType: MessageType.None
 							})
 						}
 					});
 					fnAfterFragmentCreation();
 				}
 				fnOpenFragment();
 			}
 		},

 		/**
 		 * Prevent table rebind with backend. The sole purpose of this table is to hold rows on the frontend and later gather them for a deep-create. No further interaction with the backend is allowed
 		 * */
 		handleWizardReceiptBeforeRebindTable: function (oEvent) {
 			//https://wiki.wdf.sap.corp/wiki/display/UI/SmartTable+FAQs
 			var mBindingParams = oEvent.getParameter("bindingParams");
 			mBindingParams.preventTableBind = true;
 		},

 		/**
 		 * Generic handler for "add" action in an aggregation table for the receipt wizard.
 		 * It creates an ODataModedelV2 entry and attach it to the given table
 		 *
 		 * @param {string} sBindingPath: bindingPath of the main entity (/Attendees, or /Products for example)
 		 * @param {string} sTemplateName: template name holding the column list item that we'll append to the table (fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogAttendeesTable for example)
 		 */
 		_handleWizardReceiptCreateAction: function (oEvent, sBindingPath, sTemplateName, oProperties) {
 			var oSmartTable = oEvent.getSource().getParent().getParent();
 			var oModel = oSmartTable.getParent().getModel();

 			var oSettings = {
 				bindingPath: sBindingPath,
 				properties: {
 					Pernr: oSmartTable.getBindingContext().getProperty("Pernr"),
 					Tripno: oSmartTable.getBindingContext().getProperty("Tripno"),
 					Receiptno: oSmartTable.getBindingContext().getProperty("Receiptno"),
 					//Lfdnr: ""
 				},
 				submit: false
 			};

 			var oCreatedContext = PersistenceHelper.createEntry(oModel, oSettings.bindingPath, {
 				//success: fnSuccess,
 				properties: oSettings.properties,
 				submit: oSettings.submit,
 				//context: new sap.ui.model.Context(oModel, oSmartTable.getBindingContext().getPath())
 			});

 			/*
 				//We could not attach a local JSON Model as we have to rely on the ODataModel to get entity's search-help capabilities

 				var oJsonModel = new sap.ui.model.json.JSONModel({
 					"Attendees": [oCreatedContext.getObject()]
 				});
 				oSmartTable.setModel(oJsonModel);
 				oSmartTable.getTable().bindItems({path:"/Attendees"});

 				//not event possible to manually attach an item to the table as aggregation binding's manipulation is not possible
 				oSmartTable.getTable().getBinding("items").aKeys.push(oCreatedContext.getPath());

 			*/

 			var oTemplate = sap.ui.xmlfragment(sTemplateName);

 			oTemplate.setBindingContext(oCreatedContext);
 			oSmartTable.getTable().addItem(oTemplate);
 			return oTemplate;

 		},

 		handleWizardReceiptCreateProductAction: function (oEvent) {
 			//XXX default values
 			var oProperties = {};

 			var oCreatedItem = this._handleWizardReceiptCreateAction(oEvent, "/Products",
 				"fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogProductsTable");

 			//oCreatedItem.getModel().setProperty(, oTemplate.getBindingContext());
 			var oProductIdSmartField = undefined;
 			oCreatedItem.getCells().some(function (v, i) {
 				if ("ProductId" === v.getBindingPath("value")) {
 					oProductIdSmartField = v;
 					return true;
 				}
 			});
 			oProductIdSmartField.attachChange(function (oEvent) {
 				var oLineItem = oEvent.getSource().getParent();
 				var sProductId = oEvent.getParameter("value");
 				var aProducts = Object.getOwnPropertyNames(oLineItem.getModel().getObject("/"))
 					.filter(function (e) {
 						return e.startsWith("Products(");
 					}).filter(function (e) {
 						return -1 !== e.indexOf("Pernr='" + "00000000" + "'");
 					}).filter(function (e) {
 						return -1 !== e.indexOf("Tripno='" + "0000000000" + "'");
 					}).filter(function (e) {
 						return -1 !== e.indexOf("Receiptno=''");
 					}).filter(function (e) {
 						return -1 !== e.indexOf("ProductId='" + sProductId + "'");
 					});

 				if (aProducts.length != 1) {
 					$.sap.log.error("Expected only one product");
 					return;
 				}
 				var oProduct = oLineItem.getModel().getObject("/" + aProducts[0]);
 				oLineItem.getModel().setProperty("ProductCat", oProduct["ProductCat"], oCreatedItem.getBindingContext());
 				oLineItem.getModel().setProperty("ProductName", oProduct["ProductName"], oCreatedItem.getBindingContext());

 			});

 		},

 		handleWizardReceiptCreateParticipantAction: function (oEvent) {
 			var oProperties = {};

 			var oCreatedItem = this._handleWizardReceiptCreateAction(oEvent, "/Attendees",
 				"fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogAttendeesTable");

 			//Attendees: we do select a relation per default. And we provide a listner for a change on relation field to adjust FC
 			var oRelationSmartField = undefined;
 			oCreatedItem.getCells().some(function (v, i) {
 				if ("RelationName" === v.getBindingPath("value")) {
 					oRelationSmartField = v;
 					return true;
 				}
 			});

 			if (Utils.isEmptyObjectOrString(oRelationSmartField)) {
 				return;
 			}

 			//Convention: field controls shall be ended with Fc given the corresponding field name
 			var applyFcToField = function (oLineItem, sField, iFieldControl) {
 				oLineItem.getModel().setProperty(sField + "Fc", iFieldControl, oCreatedItem.getBindingContext());
 			};

 			//Lookup in model for existing relation. We translate the RelationName (Text) into a Relation (Id)
 			//We are doing so because the SearchHelp Out parameter is not propagated into the model when sf4 is selected.
 			var fnRelationNameToRelation = function (sRelationName) {
 				if (Utils.isEmptyObjectOrString(sRelationName)) {
 					return "";
 				}

 				//Look in model for relation and map it
 				var oModel = oCreatedItem.getModel();
 				var sRelationModel = Object.getOwnPropertyNames(oModel.getObject("/")).filter(function (e) {
 					return e.startsWith("Relations(");
 				}).find(function (e) {
 					var sTextValue = oModel.getProperty("/" + e + "/Text");
 					return sTextValue && sTextValue === sRelationName;
 				});

 				return sRelationModel && oModel.getProperty("/" + sRelationModel + "/Id");
 			};

 			var fnChangeRelation = function (oLineItem, sRelation) {
 				switch (sRelation) {
 				case "3": //external
 					applyFcToField(oLineItem, "Name", 3);
 					applyFcToField(oLineItem, "FirstName", 3);
 					applyFcToField(oLineItem, "Jobtitel", 3);
 					applyFcToField(oLineItem, "Company", 3);
 					applyFcToField(oLineItem, "PernrInt", 1);
 					applyFcToField(oLineItem, "BuPartner", 1);
 					break;
 				case "1": //internal
 					applyFcToField(oLineItem, "Name", 1);
 					applyFcToField(oLineItem, "FirstName", 1);
 					applyFcToField(oLineItem, "Jobtitel", 1);
 					applyFcToField(oLineItem, "Company", 1);
 					applyFcToField(oLineItem, "PernrInt", 3);
 					applyFcToField(oLineItem, "BuPartner", 1);
 					break;
 				case "2": //business partner
 					applyFcToField(oLineItem, "Name", 1);
 					applyFcToField(oLineItem, "FirstName", 1);
 					applyFcToField(oLineItem, "Jobtitel", 1);
 					applyFcToField(oLineItem, "Company", 1);
 					applyFcToField(oLineItem, "PernrInt", 1);
 					applyFcToField(oLineItem, "BuPartner", 3);
 					break;
 				default:
 					applyFcToField(oLineItem, "Name", 1);
 					applyFcToField(oLineItem, "FirstName", 1);
 					applyFcToField(oLineItem, "Jobtitel", 1);
 					applyFcToField(oLineItem, "Company", 1);
 					applyFcToField(oLineItem, "PernrInt", 1);
 					applyFcToField(oLineItem, "BuPartner", 1);

 				};
 			};
 			oRelationSmartField.attachChange(function (oEvent) {
 					var oLineItem = oEvent.getSource().getParent();
 					var sText = oEvent.getParameter("value");
 					var sRelationValue = fnRelationNameToRelation(sText);
 					fnChangeRelation(oLineItem, sRelationValue);
 				}

 			);
 			//perform default value to external
 			var sRelationValue = oCreatedItem.getBindingContext().getProperty("Relation");
 			fnChangeRelation(oRelationSmartField.getParent(), sRelationValue);

 		},

 		/**
 		 * Post deep create
 		 */
 		handleWizardApply: function (oEvent) {
 			var oDialog = oEvent.getSource().getParent();
 			var that = this;

 			var oSmartFormSplitData = this._byId("receiptWizardSmartFormSplitData", sWizardSplitReceiptDialogID);
 			var oSmartFormReceiptData = this._byId("receiptWizardSmartFormReceiptData", sWizardSplitReceiptDialogID);
 			//clean all messages before checking the form
 			this._resetWizardSplitReceipt({
 				bMessages: true
 			});

 			if (!$.isEmptyObject(oSmartFormSplitData.check()) || !$.isEmptyObject(oSmartFormReceiptData.check())) {
 				//there are still mandatory fields
 				oDialog.getModel("messageModel").setProperty("/stripMessage", I18n.get().getText(that, "RECEIPT_WIZARD_CHECK_ERROR"));
 				oDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				return;
 			}

 			//In addition, we manually verify if mandatory fields are filled or not (the default check allows mandatory values to be null if the underlying type is nullable)
 			var bFieldInError = false;
 			var fnMandatoryCheck = function (e) {
 				if (e.getMandatory() && e.getEditable() && e.getVisible() && "string" === typeof e.getValue() && Utils.isEmptyObjectOrString(
 						e.getValue())) {
 					e.setValueState("Error");
 					var sMessage = I18n.get().getText(that, "MANDATORY_FIELD_ERROR", [e.getTextLabel()]);
 					e.setValueStateText(sMessage);
 					bFieldInError = true;
 				}
 			};

 			oSmartFormSplitData.getSmartFields().forEach(fnMandatoryCheck);
 			oSmartFormReceiptData.getSmartFields().forEach(fnMandatoryCheck);
 			if (bFieldInError) {
 				//there are still mandatory fields
 				oDialog.getModel("messageModel").setProperty("/stripMessage", I18n.get().getText(that, "RECEIPT_WIZARD_CHECK_ERROR"));
 				oDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				return;
 			}

 			//if everything went fine, we prepare the deep entity
 			var oReceiptWizard = oDialog.getBindingContext().getObject();
 			var oAttendeeTable = this._byId("ReceiptWizardAttendeesTable", sWizardSplitReceiptDialogID);
 			oReceiptWizard.Attendees = [];
 			oAttendeeTable.getTable().getItems().forEach(function (v, i) {
 				//manually set a key for proper deep creation
 				v.getModel().setProperty("Lfdnr", ("00" + (i + 1)).slice(-3), v.getBindingContext());
 				var oAttendee = v.getBindingContext().getObject();
 				delete oAttendee.__metadata;
 				oReceiptWizard.Attendees.push(oAttendee);
 			});
 			oReceiptWizard.Products = [];
 			var oProductTable = this._byId("ReceiptWizardProductsTable", sWizardSplitReceiptDialogID);
 			oProductTable.getTable().getItems().forEach(function (v, i) {
 				//ProductId is mandatory. If user did not filled it, we skip it
 				if (!Utils.isEmptyObjectOrString(v.getBindingContext().getProperty("ProductId"))) {
 					var oProduct = v.getBindingContext().getObject();
 					delete oProduct.__metadata;
 					oReceiptWizard.Products.push(oProduct);
 				}
 			});

 			var fnFunctionalError = function (oData, oResponse) {
 				if (sap.fin.travel.lib.reuse.util.MessageUtil.get().handleMessageResponse(oResponse)) {
 					var error = sap.fin.travel.lib.reuse.util.MessageUtil.get().getErrorMessageResponse(oResponse);
 					oDialog.getModel("messageModel").setProperty("/stripMessage", error.hasOwnProperty("message") ? error.message : error);
 					var sErrorType = error.hasOwnProperty("type") ? MessageParser.ErrorType.toMessageType(error.type) : MessageType.Error;
 					oDialog.getModel("messageModel").setProperty("/stripType", sErrorType);
 				} else {
 					oDialog.getModel("messageModel").setProperty("/stripMessage", I18n.get().getText(that, "RECEIPT_WIZARD_CHECK_ERROR"));
 					oDialog.getModel("messageModel").setProperty("/stripType", MessageType.Error);
 				}

 				return;
 			};

 			var fnSuccess = function () {
 				//and display a successful message
 				that._resetWizardSplitReceipt({
	 				bSuccess: true
	 			});
 				that.oWizardDialog.close();

 				//The dialog parent should be the smart table, as set during dialog opening
 				var sSmartTableId = that.oWizardDialog.data("splitReceiptWizardTableId");
				var oTable = that._byId(sSmartTableId, sWizardSplitReceiptDialogID);
 				if (oTable) {
 					oTable.rebindTable();
 				}

 				//refresh receipt amount
 				var sReceiptPath = that.getView().getBindingContext().getPath();
 				that.getView().getModel().read(sReceiptPath);

 				MessageToast.show(I18n.get().getText(that, "WIZARD_SPLIT_RECEIPT_SUCCESS"), {
 					duration: 5000, // default
 					width: "15em", // default
 					my: "center bottom", // default
 					at: "center bottom", // default
 					of: window, // default
 					offset: "0 0", // default
 					collision: "fit fit", // default
 					onClose: null, // default
 					autoClose: true, // default
 					animationTimingFunction: "ease", // default
 					animationDuration: 1000, // default
 					closeOnBrowserNavigation: true // default
 				});
 			};
 			PersistenceHelper.createDeepEntry(oDialog.getModel(), "/ReceiptWizards", oReceiptWizard, {
 				success: fnSuccess,
 				functionalError: fnFunctionalError
 			});
 		},

 		handleDeleteParticipants: function (oEvent) {
 			var oAttendeeTable = this._byId("ReceiptWizardAttendeesTable", sWizardSplitReceiptDialogID);
 			oAttendeeTable.getTable().getSelectedItems().forEach(function (v) {
 				oAttendeeTable.getModel().deleteCreatedEntry(v.getBindingContext());
 				oAttendeeTable.getTable().removeItem(v);
 			});
 		},
 		handleDeleteProducts: function (oEvent) {
 			var oProductTable = this._byId("ReceiptWizardProductsTable", sWizardSplitReceiptDialogID);

 			oProductTable.getTable().getSelectedItems().forEach(function (v) {
 				oProductTable.getModel().deleteCreatedEntry(v.getBindingContext());
 				oProductTable.getTable().removeItem(v);
 			});
 		},

 		handleReceiptHasAttachmentButtonPressed: function (oEvent) {
 			//alert("Attachment button pressed");
 		},

 		/**
     * This extension is called from reuse library when it adjust the breadcrumbs. The breadcrumb expression can be adjusted.
     * For instance, this is useful when the reference key differs from default key. In the context of MTEv2, there are two known cases:
     *  <ul>
     *  <li>CostAssignments component can lies in different places (header, destination, receipt, etc.). The parent's key can be retrieved in RefKey attribute (empty for the header)</li>
     *  <li>Receipts: split receipts are contained within a parent's receipt. The parent's receipt key lies in RefNo, and not in Receiptno</li>
     * </ul>

		 * @parameter{map} mSettings is a map containing {entitySet, breadcrumbFor, breadcrumbs, entityTypeContext, keyTitle, typeName, currentExpression, i}
		 * @return a string representing the breadCrumb Expression
     */
 		extendP13nBreadCrumbExpression: function (mSettings) {
 			var sProperty = mSettings.keyTitle;
 			switch (mSettings.entitySet) {
 			case "CostAssignments":
 				if (mSettings.breadcrumbFor && mSettings.breadcrumbFor !== "TravelExpenses") {
 					//detect SplitReceipts case (Receipt>Receipt)
 					var fnCountReceipts = function (acc, value) {
 						if ("Receipts" === value) {
 							return acc + 1;
 						}
 						return acc;
 					};
 					//Only provide property refkey if we are building the breadcrumb expression for a SplitReceipt or a single Receipt (only one Receipt in history)
 					if (mSettings.breadcrumbFor === "Mileages" || (mSettings.breadcrumbFor ===
 							"Receipts" && mSettings.breadcrumbs.slice(mSettings.i)
 							.reduce(fnCountReceipts, 0) === 1)) {
 						sProperty = {
 							Path: "RefKey"
 						}; //CostAssignments contains an attribute called RefKey which corresponds to the parent's key
 					}
 				}
 				break;
 			case "Receipts":
 				if (mSettings.breadcrumbFor && mSettings.breadcrumbFor === "Receipts") {
 					return "{= ${RefNo} === '' ? ${Receiptno} : ${RefNo}}";
 				}
 			}
 			//"{= ${path:'Tripno',type:'sap.ui.model.odata.type.String',constraints:{'maxLength':'10','nullable':'false'}} ? ${path:'Tripno',type:'sap.ui.model.odata.type.String',constraints:{'maxLength':'10','nullable':'false'}} : 'Expense Report' }"
 			var sBreadCrumbExpression = AnnotationHelper.buildBreadCrumbExpression(mSettings.entityTypeContext, sProperty, mSettings.typeName);
 			//$.sap.log.error(mSettings, sBreadCrumbExpression);
 			return sBreadCrumbExpression;
 		},

 		handleSubmitDisclaimer: function (oEvent) {
 			var that = this;
 			var oEventSource = oEvent.getSource();
 			var oModel = oEvent.getSource().getModel();

 			// Check if feature reason is available
 			var oMetaModel = oModel.getMetaModel();
 			var oFunctionImport = oMetaModel.getODataFunctionImport("CheckTrip");
 			if (oFunctionImport) {
 				// Handle new version of Submit Disclaimer
 				var oViewBindingContext = this.getView().getBindingContext();
 				if (oViewBindingContext == undefined) {
 					return;
 				}

 				this._eventHandler.checkAppForms(oEvent, true, function () {
 					var fnSuccess = function (oData, oResponse) {
 						var aMessages = MessageUtil.get().getErrorMessagesResponse(oResponse);
						that.getOwnerComponent().runAsOwner(function (){
							SubmitDisclaimerWithReasonHelper.viewSubmitDisclaimer({
								getSource: function () {
									return oEventSource;
								},
								getErrors: function () {
									return aMessages;
								}
 							}, that);
						});
 						
 					};

 					var fnFunctionalError = function (oData, oResponse) {
 						if (!MessageUtil.get().hasError(MessageUtil.get().getErrorMessagesResponse(oResponse), [MessageType.Error])) {
 							// if there is no error and so only warning we do want to offer possibility to submit
 							fnSuccess(oData, oResponse);
 						}
 					};

 					var mParameters = {
 						Pernr: oViewBindingContext.getProperty("Pernr"),
 						Tripno: oViewBindingContext.getProperty("Tripno")
 					};

 					var fnSuccessSubmit = function (oData, oResponse) {
 						PersistenceHelper.callFunction(oModel, {
 							name: "/CheckTrip",
 							settings: {
 								async: true,
 								refreshAfterChange: false
 							},
 							success: fnSuccess,
 							functionalError: fnFunctionalError,
 							urlParameters: mParameters
 						});
 					};

 					// First check if error on trip header
 					PersistenceHelper.submitChanges(oModel, {
 						success: fnSuccessSubmit
 					});
 				});

 			} else {
 				// Handle old version of Submit Disclaimer
 				this._eventHandler.checkAppForms(oEvent, true, function () {
 					oViewBindingContext = that.getView().getBindingContext();
 					if (oViewBindingContext == undefined) {
 						return;
 					}
					that.getOwnerComponent().runAsOwner(function (){
						SubmitDisclaimerHelper.viewSubmitDisclaimer({
							getSource: function () {
								return {
									getBindingContext: function () {
										return oViewBindingContext;
									}
								};
							}
						}, that);
					});
 				});

 			}
 		},

 		getIconForExpenseTypeCategory: function (iCategory) {
 			switch (iCategory) {
 			case 1:
 				return "sap-icon://bed"; //lodging
 			case 2:
 				return "sap-icon://meal"; //meals
 			case 3:
 				return "sap-icon://private"; //privateCar
 			case 4:
 				return "sap-icon://receipt"; //other
 			case 5:
 				return "sap-icon://meal"; //Meals with Maximum Rate
 			case 6:
 				return "sap-icon://flight"; //flights
 			case 7:
 				return "sap-icon://FioriInAppIcons/Entertainment"; //entertainment
 			case 8:
 				return "sap-icon://car-rental"; //CarRental
 			case 9:
 				return "sap-icon://bus-public-transport"; //PublicTransportation
 			case 10:
 				return "sap-icon://per-diem"; //LodgingPerDiem
 			case 11:
 				return "sap-icon://per-diem"; //MealsPerDiem
 			case 12:
 				return "sap-icon://mileage"; //Mileage
 			case 13:
 				return "sap-icon://FioriInAppIcons/Gift"; //gifts
 			case 99:
 				return "sap-icon://money-bills"; //Travel Advances
 			default:
 				return "sap-icon://receipt"; //other;
 			}

 		},

 		formatDateAsDateRange: function (oStartDate, oEndDate) {
 			var oDateFormatter = sap.ui.core.format.DateFormat.getDateInstance();
 			if (oStartDate != null && oEndDate != null) {
 				return oDateFormatter.format(oStartDate, true) + " - " + oDateFormatter.format(oEndDate, true);
 			} else if (oEndDate == null) {
 				return oDateFormatter.format(oStartDate, true);
 			} else {
 				return oDateFormatter.format(oEndDate, true);
 			}
 		}

 	});
 });