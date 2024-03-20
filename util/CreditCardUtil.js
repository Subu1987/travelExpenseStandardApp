/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/model/json/JSONModel","sap/fin/travel/lib/reuse/util/AppComponent","sap/fin/travel/lib/reuse/util/PersistenceHelper","sap/fin/travel/lib/reuse/util/i18n","sap/fin/travel/lib/reuse/util/FragmentHelper","sap/fin/travel/lib/reuse/util/ODataModelUtil","sap/fin/travel/lib/reuse/util/Utils","sap/fin/travel/lib/reuse/util/ControlUtil","sap/fin/travel/lib/reuse/util/MessageUtil","sap/fin/travel/lib/reuse/util/ActionUtil","sap/fin/travel/lib/reuse/util/TravelUtil","sap/fin/travel/lib/reuse/util/NavigationUtil","sap/ui/core/MessageType","sap/m/MessageToast","sap/m/VBox","sap/m/MessageStrip","sap/fin/travel/lib/reuse/util/MessageParser"],function(J,A,P,I,F,O,U,C,M,a,T,N,b,c,V,d,f){"use strict";var s="CreditCardReceiptDialogFragment";var g="CreditCardBufferSetId::ResponsiveTable";var o,h,j;var k=new J();function H(){if(o){o.unbindElement();o.close();o=undefined;}F.get().destroy(s);}function l(e,i){i._eventHandler.onSelectionChange(e);var t=sap.ui.core.Fragment.byId(s,g);var w=sap.ui.core.Fragment.byId(s,"creditCardStep2Button");var S=sap.ui.core.Fragment.byId(s,"submitButton");if(w){if(t&&t.getSelectedItems().length>0){var W=sap.ui.core.Fragment.byId(s,"creditCardWizard");if(W.getSteps()[1].getContent().length>0){S.setEnabled(true);}else{w.setEnabled(true);}}else{w.setEnabled(false);S.setEnabled(false);}}}function m(e,i,r,t){var u=[],w=i.getView().getModel();var B=e.getBindingContext();var x={Pernr:B.getProperty("Pernr"),Tripno:B.getProperty("Tripno")};var y;if(r){var z=r.getBindingContext();x.TSchema=z.getProperty("TSchema");x.Tripno=z.getProperty("Tripno")||"";y=function(D,G){var K=N.getNavigationPathFromReponse(D,G);if(!U.isEmptyObjectOrString(K.subPath)){N.navigate(K.subPath,i.getView().getModel("view").getProperty("/level"));}};}if(h.getTable().getSelectedItems()&&h.getTable().getSelectedItems().length>0){h.getTable().getSelectedItems().forEach(function(D){var G=D.getBindingContext();u.push(G.getModel().getProperty(G.getPath()));});x.AssignCreditCards=u;var E=function(D,R){var G="";if(R!=undefined){G=M.get().getErrorMessageResponse(R);}else{G=M.get().getErrorMessageResponse(D);}o.getModel("creditCardModel").setProperty("/StripMessage",G.hasOwnProperty("message")?G.message:G);var K=G.hasOwnProperty("type")?f.ErrorType.toMessageType(G.type):b.Error;o.getModel("creditCardModel").setProperty("/StripType",K);if(r){var W=sap.ui.core.Fragment.byId(s,"creditCardWizard");W.goToStep(W.getSteps()[0]);}};var S=function(D,G){var R=G||D;if(M.get().hasError(M.get().getErrorMessagesResponse(R),[b.Error])){E(D,G);}else{var K=o.data("oSmartTable");if(K){K.rebindTable();}H();if(typeof y==="function"){if(t&&typeof t==="function"){t(i);}y(D,G);}}};P.createDeepEntry(w,"/TravelExpenses",x,{success:S,error:E,functionalError:S});}else{H();}}function n(e,i){var r=i.getView().getModel(),t=C.getOwnerControl(e);var u=function(D,R){if(R===undefined){return;}var w=M.get().getErrorMessageResponse(R);o.getModel("creditCardModel").setProperty("/StripMessage",w.hasOwnProperty("message")?w.message:w);var E=w.hasOwnProperty("type")?f.ErrorType.toMessageType(w.type):b.Error;o.getModel("creditCardModel").setProperty("/StripType",E);};var S=function(){o.getModel("creditCardModel").setProperty("/StripMessage","");};t.getTable().getSelectedItems().forEach(function(w){P.remove(r,w.getBindingContext().getPath(),{success:S,functionalError:u});});}function _(e){var B=sap.ui.core.Fragment.byId(s,"creditCardStep2Button");if(!U.isEmptyObjectOrString(B)){B.setEnabled(e);}}function p(E,r){var t=E.getSource();var u=a.getActionContext(E,r);u.context.contextCreated().then(function(w){var x=a.buildParametersForm(u.actionParam,w);var W=sap.ui.core.Fragment.byId(s,"creditCardWizard");var y=W.getSteps();var B=y[0];var z=y[y.length-1];r.actionContext=w;sap.ui.core.Fragment.byId(s,"endButton").attachPress(r,u.close);var S=function(){var e,G,i;o.getModel("creditCardModel").setProperty("/StripMessage","");if(x.getEmptyMandatoryFields().length==0&&x.getEmptyMandatoryValueHelpFields().length==0&&x.checkValuesValidityFields()==0){m(t,r,x.form,u.close);}else{var K=[];var L=[];var R=I.get().getText("MANDATORY_FIELD_ERROR");var Q=I.get().getText("MANDATORY_VALUE_LIST_FIELD_ERROR");for(i=0;i<x.getEmptyMandatoryFields().length;i++){e=x.getEmptyMandatoryFields()[i];G=jQuery.sap.formatMessage(R,e.getTextLabel());L.push({text:G,type:b.Error,showCloseButton:true});K.push(e.getTextLabel());}for(i=0;i<x.getEmptyMandatoryValueHelpFields().length;i++){e=x.getEmptyMandatoryValueHelpFields()[i];if(K.indexOf(e.getTextLabel())===-1){G=jQuery.sap.formatMessage(Q,e.getTextLabel());L.push({text:G,type:b.Error,showCloseButton:true});K.push(e.getTextLabel());}}for(i=0;i<x.checkValuesValidityFields().length;i++){var X=x.checkValuesValidityFields()[i];e=sap.ui.getCore().byId(X);if(e){if(K.indexOf(e.getTextLabel())===-1){G=jQuery.sap.formatMessage(Q,e.getTextLabel());L.push({text:G,type:b.Error,showCloseButton:true});K.push(e.getTextLabel());}}}if(L.length>0){o.getModel("creditCardModel").setProperty("/StripMessage",L[0].text);o.getModel("creditCardModel").setProperty("/StripType",L[0].type);W.goToStep(B);}}};sap.ui.core.Fragment.byId(s,"submitButton").attachPress(r,S);_(false);setTimeout(function(){try{if(z.getContent().length<1){z.insertContent(x.form,1);W.setCurrentStep(z);}}catch(e){jQuery.sap.log.error(e);}W.goToStep(z);},100);var D=sap.ui.core.Fragment.byId(s,"submitButton");D.setEnabled(true);});}function v(e,i,w,D){var E=e.getSource();var B=e.getSource().getBindingContext(),r=B?B.getProperty("Pernr"):O.get().getCurrentTripContext().Pernr;var S="";var t=b.None;var u="fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";if(w){u=typeof a.getActionContext==="function"?"fin.travel.mytravelexpensesv2.view.fragments.WizardCreditCardDialog":"fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";S=D?(T.TripNumber.Initial===D?I.get().getText("DRAFT_WARNING_UNKNOWN",D):I.get().getText("DRAFT_WARNING",D)):"";t=D?b.Warning:b.None;}var x=function(){sap.ui.core.Fragment.byId(s,"endButton").attachPress(i,H);if(w!==true){sap.ui.core.Fragment.byId(s,"submitButton").attachPress(i,function(z){m(z.getSource(),i);});}var W=sap.ui.core.Fragment.byId(s,"creditCardStep2Button");if(W){W.attachPress(i,p);}sap.ui.core.Fragment.byId(s,"CreditCardBufferSetId::Button::deleteEntry").attachPress(i,function(z){n(z.getSource(),i);});sap.ui.core.Fragment.byId(s,g).attachSelectionChange(i,l);};var y=function(){k={Pernr:r,Tripno:B?B.getProperty("Tripno"):"9999999999",BeginDate:B?B.getProperty("Datedep"):undefined,EndDate:B?B.getProperty("Datearr"):undefined,Creatable:B===undefined,Deletable:!A.get().getGlobalModel().getProperty("/userprofile/CccNoReceDeleteable"),StripMessage:S,StripType:t};o.setModel(new J(k),"creditCardModel");o.setModel(i.getView().getModel());o.bindElement(B?B.getPath():"/UserProfiles('"+r+"')");h=sap.ui.core.Fragment.byId(s,"CreditCardBufferSmartTable");j=sap.ui.core.Fragment.byId(s,"CreditCardBufferFilterBar");o.data("oSmartTable",w!==true?C.getSmartTable(E):undefined);o.attachAfterOpen(function(){if(j.isInitialised()){j.triggerSearch();}if(j.getBasicSearchControl()){j.getBasicSearchControl().focus();}});o.open();};if(F.get().loadFragment&&typeof F.get().loadFragment==="function"){F.get().loadFragment({id:s,name:u,controller:this,models:{i18n:i.getView().getModel("i18n")}}).then(function(z){if(z){if(!o){o=z;x();}y();}});}else{if(!o){o=F.get().getFragment({id:s,name:u,controller:this,models:{i18n:i.getView().getModel("i18n")}});x();}y();}}function q(S){var e=sap.ui.core.Fragment.byId(s,"CreditCardBufferFilterBar");var i=S.getParameter("bindingParams");if(i&&i.filters){var r=i.filters[0].aFilters;r.forEach(function(t){if(t&&t.sPath){if(t.sPath==="RecDate"&&U.isEmptyDateOrString(t.oValue1)){t.oValue1=new Date(0);e.getControlByKey("RecDate").setValue("");}if(t.sPath==="RecDate"&&U.isEmptyDateOrString(t.oValue2)){t.oValue2=new Date(9999999999999);}}});}}return{viewCreditCard:v,handleBeforeRebindTable:q};});
