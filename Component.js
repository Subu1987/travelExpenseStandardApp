/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/f/FlexibleColumnLayoutSemanticHelper","sap/ui/model/json/JSONModel","sap/fin/travel/lib/reuse/util/AppComponent"],function(U,D,F,J,A){"use strict";return U.extend("fin.travel.mytravelexpensesv2.Component",{metadata:{manifest:"json",handleValidation:true,config:{fullWidth:true}},init:function(){U.prototype.init.apply(this,arguments);},getResourceBundle:function(){var m=this.getModel("i18n");var r;if(m){r=m.getResourceBundle();}return r;},getResourceModel:function(){return this.getModel("i18n");},destroy:function(){var t=this;var a=arguments;A.destroy(function(){U.prototype.destroy.apply(t,a);});}});});
