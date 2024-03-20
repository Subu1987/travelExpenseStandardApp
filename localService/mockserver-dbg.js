/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters",
	"sap/base/Log",
	"sap/ui/thirdparty/jquery",
	"./mockdata/FunctionImport"
], function (MockServer, UriParameters, Log, jQuery, FunctionImport) {
	"use strict";

	return {
		/**
		 * 
		 * @param {string} sPath contains related path to localService. Default is ..
		 */
		init: function (sPath) {
			// create
			var oMockServer = new MockServer({
				rootUri: "/sap/opu/odata/sap/TRV_MTE_SRV/"
			});

			var oUriParameters = new UriParameters(window.location.href);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});

			// simulate
			if (typeof sPath === "string"){
				sPath = sPath + "/localService";
			}else{
				sPath = "../localService";
			}
			//jQuery.sap.log.setLevel(jQuery.sap.log.Level.INFO); 
			oMockServer.simulate(sPath + "/metadata.xml", {
                sMockdataBaseUrl: sPath + "/mockdata",
                bGenerateMissingMockData: true
			});
			
			//Create expense
			// handling mocking a function import call step
			var aRequests = oMockServer.getRequests();
			aRequests.push({
				method: "POST",
				path: new RegExp("CreateExpense(.*)"),
				response: function(oXhr) {
					Log.debug("Incoming request for CreateExpense");
					var sLocationHeader = "http://localhost/offline/sap/opu/odata/sap/TRV_MTE_SRV/TravelExpenses(Pernr='00181086',Tripno='0000000000')";
					oXhr.respondJSON(200, {location:sLocationHeader}, JSON.stringify(FunctionImport.createExpense));

					/*debugger;
					jQuery.ajax({
						url: oMockServer.getRootUri() + "/Schemas",
						dataType : 'json',
						async: false,
						success : function(oData) {
						}
					});*/
					return true;
				}
			});
			aRequests.push({
				method: "POST",
				path: new RegExp("ExitApplication(.*)"),
				response: function(oXhr) {
					Log.debug("Incoming request for ExitApplication");
					oXhr.respondJSON(200, {}, JSON.stringify(FunctionImport.exitApplication));
					return true;
				}
			});
			aRequests.push({
				method: "GET",
				path: new RegExp("Mileages(.*)"),
				response: function(oXhr) {
					Log.debug("Incoming request for Mileages");
					var sErrorMsg = "Pers.no. 00000002 is blocked by user CENDRILLON on " + Date.now();
					oXhr.respondJSON(400, {}, JSON.stringify({"error":{"code":"56/393","message":{"lang":"en","value": sErrorMsg},"innererror":{"application":{"component_id":"FI-TV","service_namespace":"/SAP/","service_id":"TRV_MTE_SRV","service_version":"0001"},"transactionid":"4A5FE7C0B1B000A0E005E5E989FCE03F","timestamp":"20200428134913.3847960","Error_Resolution":{"SAP_Transaction":"Run transaction /IWFND/ERROR_LOG on SAP Gateway hub system (System Alias ) and search for entries with the timestamp above for more details","SAP_Note":"See SAP Note 1797736 for error analysis (/sap/support/notes/1797736)","Batch_SAP_Note":"See SAP Note 1869434 for details about working with $batch (/sap/support/notes/1869434)"},"errordetails":[{"code":"56/393","message":"Pers.no. 00000001 is blocked by user CENDRILLON","propertyref":"","severity":"error","target":""}]}}}
					));
					return true;
				}
			});

			oMockServer.setRequests(aRequests);
			
			// start
			oMockServer.start();
		}
	};

});