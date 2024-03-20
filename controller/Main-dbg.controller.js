/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/fin/travel/lib/reuse/util/AppComponent",
	"fin/travel/mytravelexpensesv2/conf/AppManifest",
	"fin/travel/mytravelexpensesv2/conf/AppDescriptor"
], function (Controller, AppComponent, AppManifest, AppDescriptor) {
	"use strict";

	return Controller.extend("fin.travel.mytravelexpensesv2.controller.Main", {

		onInit: function () {
			// Initalize Global Util

			var sApplicationVersion = this.getOwnerComponent().getManifestEntry("sap.app").applicationVersion.version;
			//app manifest versions need adjustments
			AppManifest.ListPage["sap.app"].applicationVersion.version = sApplicationVersion;
			AppManifest.DetailPage["sap.app"].applicationVersion.version = sApplicationVersion;

			//view extensions from adaptation projects might be propagated to the DetailPage
			//this will allow proper loading of standard ExtensionPoint that are statically defined in Dialog 
			//(such as topPerDiem, belowPerDiemAmount, topSubmitDisclaimerDialog, bottomSubmitDialog, etc.)
			var oManifest = this.getOwnerComponent().getManifest();
			if (oManifest && oManifest["sap.ui5"] && oManifest["sap.ui5"].extends && oManifest["sap.ui5"].extends.extensions){
				jQuery.extend(AppManifest.DetailPage["sap.ui5"].extends.extensions["sap.ui.viewExtensions"], 
					oManifest["sap.ui5"].extends.extensions["sap.ui.viewExtensions"]);
			}


			var oSettings = {
				manifestPath: "fin.travel.mytravelexpensesv2.conf",
				homeRoute: "TravelExpenses",
				manifest: {
					"ListPage": AppManifest.ListPage,
					"DetailPage": AppManifest.DetailPage
				},
				appDescriptor: AppDescriptor,
				//extensions coming from adaptation of controller fin.travel.mytravelexpensesv2.controller.Main. propagated to both sap.fin.travel.lib.reuse.{DetailPage,ListPage}
				//as adaptation tool could not directly access fin.travel.mytravelexpensesv2.controller.Main, please change manually the generated change files.
				extension: this.extension 
			};

			// Merge Extended and parent internationalization resource files.
			var oExt18model = this.getView().getModel("i18n");
			var oRoot18model = this.getView().getModel("i18n||Default");
			if (oRoot18model && oRoot18model.getResourceBundle() && oExt18model && oExt18model.getResourceBundle()) {
				oExt18model.getResourceBundle().aPropertyFiles[0].getKeys().forEach(function (key) {
					oRoot18model.getResourceBundle().aPropertyFiles[0].setProperty(key, oExt18model.getResourceBundle().getText(key)); // replace root key by extended key
				});
				this.getOwnerComponent().getResourceBundle().aPropertyFiles = oRoot18model.getResourceBundle().aPropertyFiles; // erase resource by merged root and extended keys.
			}

			AppComponent.init(this.getOwnerComponent(), this.getView().byId("fcl"), this.getView().getModel(), oSettings);
		}

	});
});