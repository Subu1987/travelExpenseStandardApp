/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
//sap.ui.getCore().loadLibrary("sap.fin.travel.lib.reuse");
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/f/FlexibleColumnLayoutSemanticHelper",
	"sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/AppComponent"
], function (UIComponent, Device, FlexibleColumnLayoutSemanticHelper, JSONModel, AppComponent) {
	"use strict";

	return UIComponent.extend("fin.travel.mytravelexpensesv2.Component", {

		metadata: {
			manifest: "json",
			handleValidation: true,
			config: {
				fullWidth: true
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			//this.getRouter().initialize();
			//var detailPage = sap.ui.require("sap/fin/travel/lib/reuse/DetailPage");
			// jQuery.sap.log.setLevel(jQuery.sap.log.Level.WARNING); 
		},

		getResourceBundle: function () {
			var oModel = this.getModel("i18n");
			var oResourceBundle;
			if (oModel) {
				oResourceBundle = oModel.getResourceBundle();
			}
			return oResourceBundle;
		},

		getResourceModel: function () {
			return this.getModel("i18n");
		},

		destroy: function () {
			//On app exit, we have to make sure that AppComponent is destroyed
			var that = this;
			var args = arguments;
			AppComponent.destroy(function () {
				//call in exitapp callback
				UIComponent.prototype.destroy.apply(that, args);
			});
		}

	});
});