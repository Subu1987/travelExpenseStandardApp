/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/fin/travel/lib/reuse/util/FragmentHelper",
	"sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/CustomDataUtil",
	"sap/fin/travel/lib/reuse/util/PersistenceHelper",
	"sap/fin/travel/lib/reuse/util/ODataModelUtil",
	"sap/fin/travel/lib/reuse/util/NavigationUtil",
	"sap/fin/travel/lib/reuse/util/ControlUtil",
	"fin/travel/mytravelexpensesv2/util/CreditCardUtil",
	"sap/m/MessageBox",
	"sap/ui/model/Context"
], function (JSONModel, Filter, FilterOperator, FragmentHelper, I18n, CustomData, PersistenceHelper, ODataModelUtil, NavigationUtil,
	ControlUtil, CreditCardUtil, MessageBox, Context) {
	"use strict";

	return sap.ui.controller("fin.travel.mytravelexpensesv2.controller.ListPageExtension", {

		onInit: function () {
			$.noop();
		},

		_fnDraftOrUnsavedByDialog: function (fnOnConfirm, oDraftItem) {
			var bIsDraft = oDraftItem && oDraftItem.getProperty("DraftLinkType") === "Draft";
			var bIsUnsavedBy = oDraftItem && oDraftItem.getProperty("DraftLinkType") === "UnsavedBy";
			var sDraftTripNumber = oDraftItem && oDraftItem.getProperty("Tripno");

			if (bIsDraft) {
				var sAction = I18n.get().getText(this, "LEAVE_PAGE");
				MessageBox.show(I18n.get().getText(this, "BACK_WARNING"), {
					icon: MessageBox.Icon.WARNING,
					title: I18n.get().getText(this, "WARNING"),
					actions: [sAction, MessageBox.Action.CANCEL],
					onClose: function (oAction) {
						if (oAction === sAction && fnOnConfirm && "function" === typeof fnOnConfirm) {
							fnOnConfirm();
						}
					}
				});
			} else if (bIsUnsavedBy) {
				var sDraftUser = oDraftItem.getProperty("DraftUserId");
				var sFragmentId = this.getView().getId() + "UnsavedChangesDialogFragment";
				FragmentHelper.get().getUnsavedDialog(this, sFragmentId, sDraftTripNumber, sDraftUser).then(fnOnConfirm);
			} else if (fnOnConfirm && "function" === typeof fnOnConfirm) {
				fnOnConfirm();
			}
		},

		handleCreateExpenseConfirm: function (oEvent) {
			var oExpense = oEvent.getSource().getBindingContext().getObject();
			var oSchemaSF = sap.ui.getCore().byId("CreateExpenseDialogFragment--schemaSmartField");
			if (oSchemaSF && $.isEmptyObject(oSchemaSF.getValue())) {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", I18n.get().getText(this,
					"SCHEMA_MISSING_FIELD_ALERT"));
			} else {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
				var oModel = this.getView().getModel();
				oModel.deleteCreatedEntry(new Context(oModel, this.oCreateExpenseDialog.getBindingContext().getPath()));
				var that = this;
				var fnSuccess = function (oData, oResponse) {
					var subEntityPath = "/" + (oResponse.headers && oResponse.headers["location"] && oResponse.headers["location"].split("/").slice(-
							1).pop()) ||
						"TravelExpenses(Pernr='" + oData.Pernr + "',Tripno='" + oData.Tripno + "')";
					that.oCreateExpenseDialog.close();
					NavigationUtil.navigate(subEntityPath, that.getOwnerComponent()
						.iLevel);
				};
				PersistenceHelper.createEntry(oModel, "TravelExpenses", {
					success: fnSuccess,
					properties: {
						Pernr: oExpense.Pernr,
						Tripno: oExpense.Tripno,
						TSchema: oExpense.TSchema
					}
				});
			}
		},

		handleSchemaChange: function (oEvent) {
			if (!$.isEmptyObject(oEvent.getParameter("value"))) {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
			}
		},

		handleCreateExpenseCancel: function (oEvent) {
			this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
			var oSchemaSF = sap.ui.getCore().byId("CreateExpenseDialogFragment--schemaSmartField");
			var oPendingTrip = sap.ui.getCore().byId("CreateExpenseDialogFragment--pendingTripListSmartField");
			oSchemaSF.setValue("");
			oPendingTrip.setValue("");
			this.oCreateExpenseDialog.close();
		},

		handleCreditCard: function (oEvent) {
			var oList = ControlUtil.getSmartTable(oEvent.getSource());
			var oDraftItem = ODataModelUtil.get().getDraftItem(oList);
			var sDraftTripno = oDraftItem && oDraftItem.getProperty("Tripno");
			CreditCardUtil.viewCreditCard(oEvent, this, true, sDraftTripno);
		}

	});
});