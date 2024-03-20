/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('fin/travel/mytravelexpensesv2/Component', ["sap/ui/core/UIComponent", "sap/ui/Device",
	"sap/f/FlexibleColumnLayoutSemanticHelper", "sap/ui/model/json/JSONModel", "sap/fin/travel/lib/reuse/util/AppComponent"
], function(U, D, F, J, A) {
	"use strict";
	return U.extend("fin.travel.mytravelexpensesv2.Component", {
		metadata: {
			manifest: "json",
			handleValidation: true,
			config: {
				fullWidth: true
			}
		},
		init: function() {
			U.prototype.init.apply(this, arguments);
		},
		getResourceBundle: function() {
			var m = this.getModel("i18n");
			var r;
			if (m) {
				r = m.getResourceBundle();
			}
			return r;
		},
		getResourceModel: function() {
			return this.getModel("i18n");
		},
		destroy: function() {
			var t = this;
			var a = arguments;
			A.destroy(function() {
				U.prototype.destroy.apply(t, a);
			});
		}
	});
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/conf/AppDescriptor', [], function() {
	"use strict";
	return {
		"settings": {
			"flexibleColumnLayout": {
				"defaultTwoColumnLayoutType": "TwoColumnsMidExpanded",
				"defaultThreeColumnLayoutType": "EndColumnFullScreen",
				"maxColumnsCount": 2
			}
		},
		"pages": {
			"ListReport|TravelExpenses": {
				"entitySet": "TravelExpenses",
				"component": {
					"name": "sap.fin.travel.lib.reuse.ListPage",
					"list": true,
					"settings": {
						"smartVariantManagement": true,
						"variantManagementHidden": true
					}
				},
				"pages": {
					"ObjectPage|TravelExpenses": {
						"entitySet": "TravelExpenses",
						"routingSpec": {
							"routeName": "#TravelExpenses",
							"headerTitle": "EXPENSE_REPORT",
							"typeImageUrl": "sap-icon://circle-task-2"
						},
						"component": {
							"name": "sap.fin.travel.lib.reuse.DetailPage",
							"settings": {
								"editableHeaderContent": true,
								"enableLazyLoading": false,
								"allowDeepLinking": true
							}
						},
						"pages": {
							"ObjectPage|CostAssignments": {
								"navigationProperty": "CostAssignments",
								"entitySet": "CostAssignments",
								"routingSpec": {
									"routeName": "#CostAssignments",
									"headerTitle": "COST_ASSIGNMENT",
									"typeImageUrl": "sap-icon://circle-task-2"
								},
								"component": {
									"name": "sap.fin.travel.lib.reuse.DetailPage",
									"settings": {
										"allowDeepLinking": true,
										"allowShallowNavidation": false
									}
								}
							},
							"ObjectPage|Mileages": {
								"navigationProperty": "Mileages",
								"entitySet": "Mileages",
								"routingSpec": {
									"routeName": "#Mileages",
									"headerTitle": "MILEAGE",
									"typeImageUrl": "sap-icon://mileage"
								},
								"component": {
									"name": "sap.fin.travel.lib.reuse.DetailPage",
									"settings": {
										"allowDeepLinking": true
									}
								},
								"pages": {
									"ObjectPage|CostAssignments": {
										"navigationProperty": "CostAssignments",
										"entitySet": "CostAssignments",
										"routingSpec": {
											"routeName": "#CostAssignments",
											"headerTitle": "COST_ASSIGNMENT",
											"typeImageUrl": "sap-icon://circle-task-2"
										},
										"component": {
											"name": "sap.fin.travel.lib.reuse.DetailPage",
											"settings": {
												"allowDeepLinking": true
											}
										}
									}
								}
							},
							"ObjectPage|Destinations": {
								"navigationProperty": "Destinations",
								"entitySet": "Destinations",
								"routingSpec": {
									"routeName": "#Destinations",
									"headerTitle": "DESTINATION",
									"typeImageUrl": "sap-icon://circle-task-2"
								},
								"component": {
									"name": "sap.fin.travel.lib.reuse.DetailPage",
									"settings": {
										"allowDeepLinking": true
									}
								},
								"pages": {
									"ObjectPage|CostAssignments": {
										"navigationProperty": "CostAssignments",
										"entitySet": "CostAssignments",
										"routingSpec": {
											"routeName": "#CostAssignments",
											"headerTitle": "COST_ASSIGNMENT",
											"typeImageUrl": "sap-icon://circle-task-2"
										},
										"component": {
											"name": "sap.fin.travel.lib.reuse.DetailPage",
											"settings": {
												"allowDeepLinking": true
											}
										}
									}
								}
							},
							"ObjectPage|Receipts": {
								"navigationProperty": "Receipts",
								"entitySet": "Receipts",
								"routingSpec": {
									"routeName": "#Receipts",
									"headerTitle": "RECEIPT",
									"typeImageUrl": "sap-icon://circle-task-2"
								},
								"component": {
									"name": "sap.fin.travel.lib.reuse.DetailPage",
									"settings": {
										"allowDeepLinking": true
									}
								},
								"pages": {
									"ObjectPage|Receipts": {
										"navigationProperty": "SplitReceipts",
										"entitySet": "Receipts",
										"routingSpec": {
											"routeName": "#Receipts",
											"headerTitle": "SPLIT_RECEIPT",
											"typeImageUrl": "sap-icon://circle-task-2"
										},
										"component": {
											"name": "sap.fin.travel.lib.reuse.DetailPage",
											"settings": {
												"allowDeepLinking": true
											}
										},
										"pages": {
											"ObjectPage|CostAssignments": {
												"navigationProperty": "CostAssignments",
												"entitySet": "CostAssignments",
												"routingSpec": {
													"routeName": "#CostAssignments",
													"headerTitle": "COST_ASSIGNMENT",
													"typeImageUrl": "sap-icon://circle-task-2"
												},
												"component": {
													"name": "sap.fin.travel.lib.reuse.DetailPage",
													"settings": {
														"allowDeepLinking": true
													}
												}
											}
										}
									},
									"ObjectPage|CostAssignments": {
										"navigationProperty": "CostAssignments",
										"entitySet": "CostAssignments",
										"routingSpec": {
											"routeName": "#CostAssignments",
											"headerTitle": "COST_ASSIGNMENT",
											"typeImageUrl": "sap-icon://circle-task-2"
										},
										"component": {
											"name": "sap.fin.travel.lib.reuse.DetailPage",
											"settings": {
												"allowDeepLinking": true,
												"referenceFacetId": "ReceCostAssignmentSetId",
												"quickVariantSelection": {
													"selectField": "PercAbs",
													"variants": {
														"0": {
															"key": "Percentage",
															"selectValue": "P",
															"annotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#Percentage",
															"editable": "!AssignFromDestination"
														},
														"1": {
															"key": "Absolute",
															"selectValue": "B",
															"annotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#Absolute",
															"enabled": "!AssignFromDestination"
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
}, true);
sap.ui.predefine('fin/travel/mytravelexpensesv2/conf/AppManifest', [], function() {
	"use strict";
	return {
		"ListPage": {
			"_version": "1.7.0",
			"sap.app": {
				"id": "sap.fin.travel.lib.reuse.ListPage",
				"type": "component",
				"i18n": "i18n/i18n.properties",
				"applicationVersion": {
					"version": "2.0.18"
				},
				"title": "{{TITLE}}",
				"description": "{{DESCRIPTION}}",
				"tags": {
					"keywords": ["{{TITLE}}"]
				},
				"ach": "FI-FIO-TV-MTE",
				"offline": false,
				"resources": "resources.json"
			},
			"sap.ui": {
				"technology": "UI5",
				"deviceTypes": {
					"desktop": true,
					"tablet": true,
					"phone": true
				},
				"supportedThemes": ["sap_hcb", "sap_bluecrystal", "sap_belize", "sap_belize_plus", "sap_belize_hcw"]
			},
			"sap.ui5": {
				"commands": {
					"Create": {
						"shortcut": "Ctrl+Enter"
					},
					"Export": {
						"shortcut": "Ctrl+Shift+E"
					},
					"Delete": {
						"shortcut": "Ctrl+D"
					}
				},
				"dependencies": {
					"minUI5Version": "1.46.0",
					"libs": {
						"sap.ui.core": {
							"lazy": false
						},
						"sap.m": {
							"lazy": false
						},
						"sap.f": {
							"lazy": false
						},
						"sap.ui.layout": {
							"lazy": false
						},
						"sap.ushell": {
							"lazy": false
						},
						"sap.collaboration": {
							"lazy": false
						},
						"sap.ui.comp": {
							"lazy": false
						},
						"sap.uxap": {
							"lazy": false
						},
						"sap.fin.travel.lib.reuse": {
							"lazy": false
						}
					}
				},
				"contentDensities": {
					"compact": true,
					"cozy": true
				},
				"models": {
					"i18n": {
						"type": "sap.ui.model.resource.ResourceModel",
						"uri": "../i18n/i18n.properties"
					}
				},
				"extends": {
					"extensions": {
						"sap.ui.controllerExtensions": {
							"sap.fin.travel.lib.reuse.ListPage.controller.ListPage": {
								"controllerName": "fin.travel.mytravelexpensesv2.controller.ListPageExtension",
								"sap.ui.generic.app": {
									"TravelExpense": {
										"EntitySet": "TravelExpenses",
										"Actions": {
											"ListPage::ViewCreditCardBuffer": {
												"id": "ListPageViewCreditCardBufferButtonID",
												"text": "{i18n>CREDIT_CARD_RECEIPT_TITLE}",
												"tooltip": "{i18n>CREDIT_CARD_RECEIPT_TITLE}",
												"icon": "sap-icon://credit-card",
												"press": "handleCreditCard",
												"visible": "/userprofile/CccActive",
												"Criticality": {
													"EnumMember": "com.sap.vocabularies.UI.v1.CriticalityType/Critical"
												}
											}
										}
									},
									"ReceiptWizard": {
										"EntitySet": "ReceiptWizards",
										"Side-Effect": false
									}
								}
							}
						},
						"sap.ui.viewExtensions": {
							"sap.fin.travel.lib.reuse.Listpage.view.fragments.ListPage": {
								"hideCopyButton": {
									"id": "CopyButtonListPageID",
									"visible": false
								}
							}
						}
					}
				}
			},
			"sap.fiori": {
				"registrationIds": ["F0584A"],
				"archeType": "transactional"
			}
		},
		"DetailPage": {
			"_version": "1.7.0",
			"sap.app": {
				"id": "sap.fin.travel.lib.reuse.DetailPage",
				"type": "component",
				"i18n": "i18n/i18n.properties",
				"applicationVersion": {
					"version": "2.0.18"
				},
				"title": "{{TITLE}}",
				"description": "{{DESCRIPTION}}",
				"tags": {
					"keywords": ["{{TITLE}}"]
				},
				"ach": "FI-FIO-TV-MTE",
				"offline": false,
				"resources": "resources.json"
			},
			"sap.ui": {
				"technology": "UI5",
				"deviceTypes": {
					"desktop": true,
					"tablet": true,
					"phone": true
				},
				"supportedThemes": ["sap_hcb", "sap_bluecrystal", "sap_belize", "sap_belize_plus", "sap_belize_hcw"]
			},
			"sap.ui5": {
				"commands": {
					"Share": {
						"shortcut": "Shift+Ctrl+S"
					},
					"Edit": {
						"shortcut": "Ctrl+E"
					},
					"Save": {
						"shortcut": "Ctrl+S"
					},
					"Export": {
						"shortcut": "Ctrl+Shift+E"
					},
					"Delete": {
						"shortcut": "Ctrl+Delete"
					}
				},
				"dependencies": {
					"minUI5Version": "1.46.0",
					"libs": {
						"sap.ui.core": {
							"lazy": false
						},
						"sap.m": {
							"lazy": false
						},
						"sap.f": {
							"lazy": false
						},
						"sap.ui.layout": {
							"lazy": false
						},
						"sap.ushell": {
							"lazy": false
						},
						"sap.collaboration": {
							"lazy": false
						},
						"sap.ui.comp": {
							"lazy": false
						},
						"sap.uxap": {
							"lazy": false
						},
						"sap.fin.travel.lib.reuse": {
							"lazy": false
						}
					}
				},
				"contentDensities": {
					"compact": true,
					"cozy": true
				},
				"models": {
					"i18n": {
						"type": "sap.ui.model.resource.ResourceModel",
						"uri": "../i18n/i18n.properties"
					}
				},
				"extends": {
					"extensions": {
						"sap.ui.controllerExtensions": {
							"sap.fin.travel.lib.reuse.DetailPage.controller.DetailPage": {
								"controllerName": "fin.travel.mytravelexpensesv2.controller.DetailPageExtension",
								"sap.ui.generic.app": {
									"TravelExpenses": {
										"EntitySet": "TravelExpenses",
										"Sections": {
											"Destinations::com.sap.vocabularies.UI.v1.LineItem": {
												"Id": "Destinations",
												"FacetId": "DestinationSetId",
												"Actions": {
													"DetailPageAddEntryDestinationTripBreak": {
														"id": "DetailPageAddEntryDestinationTripBreakId",
														"text": "{i18n>CREATE_TRIP_BREAK_BUTTON}",
														"press": "handleAddTripBreak",
														"requiresSelection": false,
														"importance": "Medium",
														"scope": "EntitySetOnly",
														"visible": "TripBreak"
													}
												}
											},
											"Receipts::com.sap.vocabularies.UI.v1.LineItem": {
												"Id": "Receipts",
												"FacetId": "ReceiptSetId",
												"Actions": {
													"DetailPageCreditCardReceipt": {
														"id": "DetailPageCreditCardReceipt",
														"text": "{i18n>CREDIT_CARD_BUTTON}",
														"press": "handleCreditCard",
														"requiresSelection": false,
														"importance": "Medium",
														"scope": "EntitySetOnly",
														"visible": "/userprofile/CccActive"
													}
												}
											}
										},
										"Header": {
											"Actions": {
												"SubmitDisclaimer": {
													"id": "SubmitDisclaimerId",
													"text": "{i18n>SUBMIT_DISCLAIMER}",
													"tooltip": "{i18n>SUBMIT_DISCLAIMER}",
													"press": "handleSubmitDisclaimer",
													"importance": "High",
													"global": true,
													"determining": true,
													"Criticality": {
														"EnumMember": "com.sap.vocabularies.UI.v1.CriticalityType/Critical"
													},
													"bindingExp": "${view>/level} === 1"
												}
											}
										}
									},
									"Receipts": {
										"EntitySet": "Receipts",
										"Sections": {
											"SplitReceipts::com.sap.vocabularies.UI.v1.LineItem": {
												"Id": "SplitReceipts",
												"FacetId": "WizardSetId",
												"Actions": {
													"DetailPageAddEntrySplitReceipts": {
														"id": "DetailPageAddEntrySplitReceiptsId",
														"icon": "sap-icon://add",
														"tooltip": "{i18n>ADD_BUTTON}",
														"press": "handleWizardSplitReceipt",
														"requiresSelection": false,
														"importance": "Medium",
														"Criticality": {
															"EnumMember": "com.sap.vocabularies.UI.v1.CriticalityType/Critical"
														}
													}
												}
											}
										}
									}
								}
							}
						},
						"sap.ui.viewExtensions": {
							"sap.fin.travel.lib.reuse.DetailPage.view.fragments.Sections": {
								"AfterFacet|TravelExpenses|ReceiptSetId|Attachments": {
									"type": "XML",
									"className": "sap.ui.core.Fragment",
									"fragmentName": "sap.fin.travel.lib.reuse.view.fragments.Attachments",
									"sap.fin.travel.lib.reuse": {
										"title": "{i18n>ATTACHMENTS}",
										"hiddenProperty": "HiddenAttachments"
									}
								},
								"AfterFacet|TravelExpenses|ReceiptSetId|Comments": {
									"type": "XML",
									"className": "sap.ui.core.Fragment",
									"fragmentName": "sap.fin.travel.lib.reuse.view.fragments.Comments",
									"sap.fin.travel.lib.reuse": {
										"title": "{i18n>COMMENTS}"
									}
								},
								"AfterFacet|Receipts|ProductSetId|Attachments": {
									"type": "XML",
									"className": "sap.ui.core.Fragment",
									"fragmentName": "sap.fin.travel.lib.reuse.view.fragments.Attachments",
									"sap.fin.travel.lib.reuse": {
										"title": "{i18n>ATTACHMENTS}",
										"hiddenProperty": "HiddenAttachement"
									}
								},
								"BeforeFacet|TravelExpenses|MileageSetId": {
									"type": "XML",
									"className": "sap.ui.core.Fragment",
									"fragmentName": "fin.travel.mytravelexpensesv2.view.fragments.PerDiem",
									"sap.fin.travel.lib.reuse": {
										"title": "{i18n>PER_DIEM_TITLE}",
										"sectionId": "PerDiemSection",
										"hiddenProperty": "HiddenPerdiem"
									}
								}
							},
							"sap.fin.travel.lib.reuse.DetailPage.view.fragments.DetailPage": {
								"hideCopyButton": {
									"id": "CopyButtonDetailPageID",
									"visible": false
								}
							},
							"sap.fin.travel.lib.reuse.DetailPage.view.fragments.FooterBar": {
								"hideSubmitButton": {
									"id": "SaveAndSubmitFooterBarID",
									"visible": false
								}
							},
							"sap.fin.travel.lib.reuse.DetailPage.view.fragments.TableColumns": [{
								"tableId": "ReceiptSetId::Table",
								"type": "XML",
								"className": "sap.ui.core.Fragment",
								"columnFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableColumnIsItemized",
								"cellFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableLineItemIsItemized",
								"sap.fin.travel.lib.reuse": {}
							}, {
								"tableId": "ReceiptSetId::Table",
								"type": "XML",
								"className": "sap.ui.core.Fragment",
								"columnFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableColumnAttachments",
								"cellFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableLineItemAttachments",
								"sap.fin.travel.lib.reuse": {}
							}, {
								"tableId": "ReceiptSetId::Table",
								"type": "XML",
								"className": "sap.ui.core.Fragment",
								"columnFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableColumnExpenseCategoryIcon",
								"cellFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableLineItemExpenseCategoryIcon",
								"sap.fin.travel.lib.reuse": {}
							}, {
								"tableId": "WizardSetId::Table",
								"type": "XML",
								"className": "sap.ui.core.Fragment",
								"columnFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableColumnExpenseCategoryIcon",
								"cellFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableLineItemExpenseCategoryIcon",
								"sap.fin.travel.lib.reuse": {}
							}, {
								"tableId": "WizardSetId::Table",
								"type": "XML",
								"className": "sap.ui.core.Fragment",
								"columnFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableColumnAttachments",
								"cellFragmentName": "fin.travel.mytravelexpensesv2.view.fragments.ReceiptTableLineItemAttachments",
								"sap.fin.travel.lib.reuse": {}
							}]
						}
					}
				}
			},
			"sap.fiori": {
				"registrationIds": ["F0584A"],
				"archeType": "transactional"
			}
		}
	};
}, true);
sap.ui.predefine('fin/travel/mytravelexpensesv2/controller/DetailPageExtension.controller', ["sap/fin/travel/lib/reuse/util/CustomAction",
	"sap/fin/travel/lib/reuse/util/FragmentHelper", "sap/fin/travel/lib/reuse/util/PersistenceHelper",
	"fin/travel/mytravelexpensesv2/util/CreditCardUtil", "fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerHelper",
	"fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerWithReasonHelper", "sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/MessageUtil", "sap/fin/travel/lib/reuse/util/Utils", "sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/AnnotationHelper", "sap/m/DateRangeSelection", "sap/m/MessageToast",
	"sap/fin/travel/lib/reuse/util/MessageParser", "sap/ui/core/MessageType"
], function(C, F, P, a, S, b, J, M, U, I, A, D, c, d, f) {
	"use strict";
	var w = "WizardSplitReceiptDialog";
	return sap.ui.controller("fin.travel.mytravelexpensesv2.controller.DetailPageExtension", {
		_byId: function(e, g) {
			var o;
			if (this.byId) {
				o = this.byId(e);
			}
			if (U.isEmptyObjectOrString(o) && !U.isEmptyObjectOrString(g)) {
				o = sap.ui.core.Fragment.byId(g, e);
			}
			if (U.isEmptyObjectOrString(o)) {
				o = sap.ui.getCore().byId(e);
			}
			return o;
		},
		onInit: function() {},
		onExit: function() {
			var e = function(E) {
				if (E && typeof E.destroy === "function") {
					E.destroy();
				}
			};
			var p = this._byId("ReceiptWizardProductsTable", w);
			e(p);
			var o = this._byId("ReceiptWizardAttendeesTable", w);
			e(o);
			var s = this._byId("receiptWizardSmartFormSplitData", w);
			e(s);
			var g = this._byId("receiptWizardSmartFormReceiptData", w);
			e(g);
			var B = this._byId("receiptWizardButtonApply", w);
			e(B);
			var h = this._byId("step2Button", w);
			e(h);
		},
		onAfterRendering: function() {
			$.noop();
		},
		onBeforeRendering: function() {
			$.noop();
		},
		_isFilled: function(o) {
			return o !== undefined && o !== null && o !== "";
		},
		handleAddTripBreak: function(e) {
			C.handleAddTripBreak(e, this);
		},
		handleCreditCard: function(e) {
			a.viewCreditCard(e, this);
		},
		switchStateStringToBoolean: function(v) {
			return v ? true : false;
		},
		onPerDiemDeductionPress: function(e) {
			var g = e.getSource().getBindingContext().getProperty("DisplayMode");
			var t = this;
			var B = e.getSource().getBindingContext();
			var s = t.getView().getId() + "PerDiemDialogFragment";
			var o = function() {
				var O = function() {
					t.oPDDeductionsDialog.getModel("messageModel").setProperty("/stripMessage", "");
					sap.ui.core.Fragment.byId(s, "perDiemListTable").attachUpdateFinished(function(E) {
						if (!E.getParameter("reason") || "Refresh" !== E.getParameter("reason")) {
							return;
						}
						var T = E.getSource();
						var h = T.getItems();
						if (h.length == 0) {
							return;
						}
						var p = h[0].getBindingContextPath();
						var j = T.getModel().getObject(p);
						var k = [
							["BreakDeFc", "BreakDeTimeFc"], "BreakPikFc", ["LunchDeFc", "LunchDeTimeFc"], "LunchPikFc", ["DinneDeFc", "DinneDeTimeFc"],
							"DinnePikFc", "LuCoupnFc", ["NightDeFc", "NightDeTimeFc"]
						];
						k.forEach(function(r, i) {
							var v = false;
							if ($.isArray(r)) {
								v = r.some(function(x) {
									var u = j[x];
									return u > 0;
								});
							} else {
								var u = j[r];
								if (u > 0) {
									v = true;
								}
							}
							T.getColumns()[i + 1].setVisible(v);
						});
						var m = T.getModel();
						var l = m.getDeferredGroups();
						l = l.concat(["pdDeductionsChanges"]);
						m.setDeferredGroups(l);
						var n = m.getChangeGroups();
						n.PerDiemDeduction = {
							groupId: "pdDeductionsChanges",
							changeSetId: "pdDeductionsChangesId",
							single: true
						};
						m.setChangeGroups(n);
						var q = function(r) {
							t._perdiemReset(T, {
								fnSuccess: function() {
									t.oPDDeductionsDialog.unbindElement();
									r.resolve();
								}
							});
						};
						t.oPDDeductionsDialog.setEscapeHandler(q);
					});
					t.oPDDeductionsDialog.setModel(t.getView().getModel());
					t.oPDDeductionsDialog.bindElement(B.getPath());
					sap.ui.core.Fragment.byId(s, "perDiemListTable").getBinding("items").refresh();
					t.oPDDeductionsDialog.open();
				};
				if (F.get().loadFragment && typeof F.get().loadFragment === "function") {
					F.get().loadFragment({
						id: s,
						name: "fin.travel.mytravelexpensesv2.view.fragments.PerDiemDialog",
						controller: t,
						models: {
							i18n: t.getView().getModel("i18n"),
							messageModel: new J({
								stripMessage: "",
								stripType: f.None
							})
						}
					}).then(function(p) {
						if (p) {
							t.oPDDeductionsDialog = p;
							O();
						}
					});
				} else {
					if (!t.oPDDeductionsDialog) {
						t.oPDDeductionsDialog = F.get().getFragment({
							id: s,
							name: "fin.travel.mytravelexpensesv2.view.fragments.PerDiemDialog",
							controller: t,
							models: {
								i18n: t.getView().getModel("i18n"),
								messageModel: new J({
									stripMessage: "",
									stripType: f.None
								})
							}
						});
					}
					O();
				}
			};
			if (g === true) {
				o();
			} else {
				this._eventHandler.checkAppForms(e, false, o);
			}
		},
		_perdiemApply: function(t, p) {
			var m = t.getModel();
			var o = this.oPDDeductionsDialog;
			var e = function(r) {
				if (undefined !== r) {
					var E = M.get().getErrorMessageBatch(r);
					o.getModel("messageModel").setProperty("/stripMessage", E);
					o.getModel("messageModel").setProperty("/stripType", f.Error);
				}
				if (p && p.fnError && "function" === typeof p.fnError) {
					p.fnError();
				}
			};
			P.submitChanges(m, {
				settings: {
					groupId: "pdDeductionsChanges"
				},
				success: function(r) {
					o.getModel("messageModel").setProperty("/stripMessage", "");
					m.invalidateEntry(t.getBindingContext().getPath());
					m.read(t.getBindingContext().getPath(), {
						success: p && p.fnSuccess,
						error: e
					});
				},
				error: e
			});
		},
		_perdiemReset: function(t, p) {
			var m = t.getModel();
			var T = t.getBindingContext().getProperty("Tripno");
			var s = t.getBindingContext().getProperty("Pernr");
			Object.getOwnPropertyNames(m.getPendingChanges()).filter(function(e) {
				return e.startsWith("PerDiemDeductions(");
			}).filter(function(e) {
				return -1 !== e.indexOf("Tripno='" + T + "'") && -1 !== e.indexOf("Pernr='" + s + "'");
			}).forEach(function(e, i) {
				m.resetChanges(["/" + e]);
			});
			if (p && p.fnSuccess && "function" === typeof p.fnSuccess) {
				p.fnSuccess();
			}
		},
		handlePerDiemApplyAndClose: function(e) {
			var p = this.oPDDeductionsDialog;
			this._perdiemApply(e.getSource(), {
				fnSuccess: function() {
					p.unbindElement();
					p.close();
				}
			});
		},
		handlePerDiemApply: function(e) {
			this._perdiemApply(e.getSource());
		},
		handlePerDiemReset: function(e) {
			this._perdiemReset(e.getSource());
		},
		handlePerDiemCancel: function(e) {
			var p = this.oPDDeductionsDialog;
			this._perdiemReset(e.getSource(), {
				fnSuccess: function() {
					p.unbindElement();
					p.close();
				}
			});
		},
		handlePerDiemClose: function(e) {
			this.oPDDeductionsDialog.unbindElement();
			this.oPDDeductionsDialog.close();
		},
		_adjustReceiptWizardStep2Button: function(v) {
			var B = this._byId("step2Button", w);
			if (!U.isEmptyObjectOrString(B)) {
				B.setVisible(v);
			}
		},
		handleWizardStep1ExpTypeComplete: function(E) {
			var V = E.getSource().getBindingContext();
			if (!V) {
				return;
			}
			if (U.isEmptyObjectOrString(V.getProperty("ExpType"))) {
				this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", I.get().getText(this,
					"WIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY"));
				this.oWizardDialog.getModel("messageModel").setProperty("/stripType", f.Error);
				return;
			}
			this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", "");
			this.oWizardDialog.getModel("messageModel").setProperty("/stripType", f.None);
			var W = this._byId("receiptWizard", w);
			var p = {
				ExpType: V.getProperty("ExpType"),
				Receiptno: V.getProperty("Receiptno"),
				Pernr: V.getProperty("Pernr"),
				Tripno: V.getProperty("Tripno")
			};
			var t = this;
			var r = function(o, R) {
				W.removeAllSteps();
				t._fnInternalAddWizardStep(W, t.oWizardSteps[0]);
				t._fnInternalAddWizardStep(W, t.oWizardSteps[1]);
				var h = ["HiddenVatDetails", "HiddenBooking", "HiddenVendor", "HiddenParticipant", "HiddenProduct"];
				t.oWizardSteps.slice(2).forEach(function(v, i) {
					var H = h[i];
					if (o.hasOwnProperty(H) && o[H] === false) {
						t._fnInternalAddWizardStep(W, v);
					}
				});
				var j = W.getSteps();
				var B = j[1];
				var k = j[j.length - 1];
				t._adjustReceiptWizardStep2Button(false);
				setTimeout(function() {
					try {
						W.setCurrentStep(k);
					} catch (e) {}
					W.goToStep(B);
				}, 100);
				var l = t._byId("receiptWizardButtonApply", w);
				l.setEnabled(true);
			};
			var g = function(R) {
				if (undefined !== R) {
					M.get().preventNextShowMessage(function() {
						$.noop();
					});
					var e = M.get().getErrorMessageBatch(R);
					t.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", e.error);
					t.oWizardDialog.getModel("messageModel").setProperty("/stripType", f.Error);
				}
			};
			P.callFunction(E.getSource().getModel(), {
				name: "/CreateReceiptWizard",
				settings: {
					async: true
				},
				urlParameters: p,
				success: r,
				functionalError: g,
				error: g
			});
		},
		handleWizardStep1ExpTypeChange: function(e) {
			var s = e.getSource().getParent();
			var W = s.getParent();
			W.setCurrentStep(s);
			var B = this._byId("receiptWizardButtonApply", w);
			B.setEnabled(false);
			this._resetWizardSplitReceipt({
				bMessages: true,
				bAggregations: true,
				bRestoreGlobalMessageManager: true
			});
			this._adjustReceiptWizardStep2Button(true);
		},
		_resetWizardSplitReceipt: function(s) {
			if (!s) {
				s = {
					bMessages: true,
					bAggregations: true,
					bEntity: true,
					bRestoreGlobalMessageManager: true
				};
			}
			if (s.bSuccess) {
				s = {
					bMessages: true,
					bAggregations: true,
					bEntity: true,
					bRestoreGlobalMessageManager: false
				};
			}
			if (this.oWizardDialog) {
				var m = this.oWizardDialog.getModel();
				var o = this._byId("receiptWizardSmartFormSplitData", w);
				var g = this._byId("receiptWizardSmartFormReceiptData", w);
				if (s.bMessages === true) {
					this.oWizardDialog.getModel("messageModel").setProperty("/stripMessage", "");
					this.oWizardDialog.getModel("messageModel").setProperty("/stripType", f.None);
					var h = function(e) {
						e.setValueState("None");
						e.setValueStateText("");
					};
					o.getSmartFields().forEach(h);
					g.getSmartFields().forEach(h);
				}
				if (s.bRestoreGlobalMessageManager === true) {
					sap.ui.getCore().getMessageManager().removeAllMessages();
					sap.ui.getCore().getMessageManager().getMessageModel().setData(this.oWizardDialogMsgModel);
				}
				if (s.bAggregations === true) {
					var i = this._byId("ReceiptWizardAttendeesTable", w);
					i.getTable().getItems().forEach(function(v) {
						m.deleteCreatedEntry(v.getBindingContext());
					});
					i.getTable().removeAllItems();
					var p = this._byId("ReceiptWizardProductsTable", w);
					p.getTable().getItems().forEach(function(v) {
						m.deleteCreatedEntry(v.getBindingContext());
					});
					p.getTable().removeAllItems();
				}
				if (s.bEntity && this.oWizardDialog.getBindingContext()) {
					m.deleteCreatedEntry(this.oWizardDialog.getBindingContext());
					this._adjustReceiptWizardStep2Button(true);
					this.oWizardDialog.unbindElement();
					var B = this._byId("receiptWizardButtonApply", w);
					B.setEnabled(false);
				}
			}
		},
		handleWizardCancel: function(e) {
			this._resetWizardSplitReceipt();
			this.oWizardDialog.close();
		},
		_fnInternalAddWizardStep: function(W, s) {
			var r = sap.m.Wizard.prototype.removeStep;
			sap.m.Wizard.prototype.removeStep = $.noop;
			try {
				W.addStep(s);
			} catch (e) {
				jQuery.sap.log.error("Exception during oWizard.addStep");
			}
			sap.m.Wizard.prototype.removeStep = r;
		},
		handleWizardSplitReceipt: function(e) {
			var t = this;
			var E = e.getSource();
			var m = E.getModel();
			var g = function() {
				var h = function(r) {
					t._resetWizardSplitReceipt();
					return r.resolve();
				};
				t.oWizardDialog.setEscapeHandler(h);
			};
			var o = function() {
				var s = E.getParent().getParent().getId();
				t.oWizardDialogMsgModel = sap.ui.getCore().getMessageManager().getMessageModel().getData();
				t.oWizardDialog.data("splitReceiptWizardTableId", s);
				var h = function(j, R) {
					t._resetWizardSplitReceipt();
				};
				var r = function(j, R) {
					var k = function() {
						t.oWizardDialog.focus();
						if (t.oWizardSteps[0] && t.oWizardSteps[0].getContent()[0]) {
							t.oWizardSteps[0].getContent()[0].focus();
						}
						t.oWizardDialog.detachAfterOpen(k);
					};
					t.oWizardDialog.attachAfterOpen(k);
					t.oWizardDialog.open();
					var W = t._byId("receiptWizard", w);
					if (U.isEmptyObjectOrString(t.oWizardSteps)) {
						t.oWizardSteps = W.removeAllSteps();
					} else {
						W.removeAllSteps();
					}
					W.addStep(t.oWizardSteps[0]);
					W.addStep(t.oWizardSteps[1]);
					W.setCurrentStep(W.getSteps()[0]);
					t._adjustReceiptWizardStep2Button(true);
					t.oWizardDialog.setModel(m);
					var l = j.__metadata.id;
					var n = l.indexOf("/ReceiptWizard");
					if (n > -1) {
						l = l.slice(n);
					}
					t.oWizardDialog.bindElement(l);
				};
				var v = t.getView().getBindingContext();
				var p = {
					ExpType: "",
					Receiptno: v.getProperty("Receiptno"),
					Pernr: v.getProperty("Pernr"),
					Tripno: v.getProperty("Tripno")
				};
				var i = function() {
					P.callFunction(m, {
						name: "/CreateReceiptWizard",
						settings: {
							async: true
						},
						urlParameters: p,
						success: r,
						functionalError: h,
						error: h
					});
				};
				P.submitChanges(m, {
					source: E,
					success: i,
					functionalError: i,
					error: h,
					submitChangeOrigin: P.SUBMIT_CHANGE_ORIGIN.ACTION,
				});
			};
			if (F.get().loadFragment && typeof F.get().loadFragment === "function") {
				F.get().loadFragment({
					id: w,
					name: "fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialog",
					controller: this,
					models: {
						i18n: this.getView().getModel("i18n"),
						messageModel: new J({
							stripMessage: "",
							stripType: f.None
						})
					}
				}).then(function(h) {
					if (h) {
						if (!t.oWizardDialog) {
							t.oWizardDialog = h;
							g();
						}
						o();
					}
				});
			} else {
				if (!this.oWizardDialog) {
					this.oWizardDialog = F.get().getFragment({
						id: w,
						name: "fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialog",
						controller: this,
						models: {
							i18n: this.getView().getModel("i18n"),
							messageModel: new J({
								stripMessage: "",
								stripType: f.None
							})
						}
					});
					g();
				}
				o();
			}
		},
		handleWizardReceiptBeforeRebindTable: function(e) {
			var B = e.getParameter("bindingParams");
			B.preventTableBind = true;
		},
		_handleWizardReceiptCreateAction: function(e, B, t, p) {
			var s = e.getSource().getParent().getParent();
			var m = s.getParent().getModel();
			var o = {
				bindingPath: B,
				properties: {
					Pernr: s.getBindingContext().getProperty("Pernr"),
					Tripno: s.getBindingContext().getProperty("Tripno"),
					Receiptno: s.getBindingContext().getProperty("Receiptno"),
				},
				submit: false
			};
			var g = P.createEntry(m, o.bindingPath, {
				properties: o.properties,
				submit: o.submit,
			});
			var T = sap.ui.xmlfragment(t);
			T.setBindingContext(g);
			s.getTable().addItem(T);
			return T;
		},
		handleWizardReceiptCreateProductAction: function(E) {
			var p = {};
			var o = this._handleWizardReceiptCreateAction(E, "/Products",
				"fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogProductsTable");
			var g = undefined;
			o.getCells().some(function(v, i) {
				if ("ProductId" === v.getBindingPath("value")) {
					g = v;
					return true;
				}
			});
			g.attachChange(function(E) {
				var l = E.getSource().getParent();
				var s = E.getParameter("value");
				var h = Object.getOwnPropertyNames(l.getModel().getObject("/")).filter(function(e) {
					return e.startsWith("Products(");
				}).filter(function(e) {
					return -1 !== e.indexOf("Pernr='" + "00000000" + "'");
				}).filter(function(e) {
					return -1 !== e.indexOf("Tripno='" + "0000000000" + "'");
				}).filter(function(e) {
					return -1 !== e.indexOf("Receiptno=''");
				}).filter(function(e) {
					return -1 !== e.indexOf("ProductId='" + s + "'");
				});
				if (h.length != 1) {
					$.sap.log.error("Expected only one product");
					return;
				}
				var i = l.getModel().getObject("/" + h[0]);
				l.getModel().setProperty("ProductCat", i["ProductCat"], o.getBindingContext());
				l.getModel().setProperty("ProductName", i["ProductName"], o.getBindingContext());
			});
		},
		handleWizardReceiptCreateParticipantAction: function(E) {
			var p = {};
			var o = this._handleWizardReceiptCreateAction(E, "/Attendees",
				"fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogAttendeesTable");
			var r = undefined;
			o.getCells().some(function(v, i) {
				if ("RelationName" === v.getBindingPath("value")) {
					r = v;
					return true;
				}
			});
			if (U.isEmptyObjectOrString(r)) {
				return;
			}
			var g = function(l, e, i) {
				l.getModel().setProperty(e + "Fc", i, o.getBindingContext());
			};
			var R = function(i) {
				if (U.isEmptyObjectOrString(i)) {
					return "";
				}
				var m = o.getModel();
				var j = Object.getOwnPropertyNames(m.getObject("/")).filter(function(e) {
					return e.startsWith("Relations(");
				}).find(function(e) {
					var t = m.getProperty("/" + e + "/Text");
					return t && t === i;
				});
				return j && m.getProperty("/" + j + "/Id");
			};
			var h = function(l, e) {
				switch (e) {
					case "3":
						g(l, "Name", 3);
						g(l, "FirstName", 3);
						g(l, "Jobtitel", 3);
						g(l, "Company", 3);
						g(l, "PernrInt", 1);
						g(l, "BuPartner", 1);
						break;
					case "1":
						g(l, "Name", 1);
						g(l, "FirstName", 1);
						g(l, "Jobtitel", 1);
						g(l, "Company", 1);
						g(l, "PernrInt", 3);
						g(l, "BuPartner", 1);
						break;
					case "2":
						g(l, "Name", 1);
						g(l, "FirstName", 1);
						g(l, "Jobtitel", 1);
						g(l, "Company", 1);
						g(l, "PernrInt", 1);
						g(l, "BuPartner", 3);
						break;
					default:
						g(l, "Name", 1);
						g(l, "FirstName", 1);
						g(l, "Jobtitel", 1);
						g(l, "Company", 1);
						g(l, "PernrInt", 1);
						g(l, "BuPartner", 1);
				};
			};
			r.attachChange(function(E) {
				var l = E.getSource().getParent();
				var t = E.getParameter("value");
				var s = R(t);
				h(l, s);
			});
			var s = o.getBindingContext().getProperty("Relation");
			h(r.getParent(), s);
		},
		handleWizardApply: function(E) {
			var o = E.getSource().getParent();
			var t = this;
			var s = this._byId("receiptWizardSmartFormSplitData", w);
			var g = this._byId("receiptWizardSmartFormReceiptData", w);
			this._resetWizardSplitReceipt({
				bMessages: true
			});
			if (!$.isEmptyObject(s.check()) || !$.isEmptyObject(g.check())) {
				o.getModel("messageModel").setProperty("/stripMessage", I.get().getText(t, "RECEIPT_WIZARD_CHECK_ERROR"));
				o.getModel("messageModel").setProperty("/stripType", f.Error);
				return;
			}
			var h = false;
			var m = function(e) {
				if (e.getMandatory() && e.getEditable() && e.getVisible() && "string" === typeof e.getValue() && U.isEmptyObjectOrString(e.getValue())) {
					e.setValueState("Error");
					var i = I.get().getText(t, "MANDATORY_FIELD_ERROR", [e.getTextLabel()]);
					e.setValueStateText(i);
					h = true;
				}
			};
			s.getSmartFields().forEach(m);
			g.getSmartFields().forEach(m);
			if (h) {
				o.getModel("messageModel").setProperty("/stripMessage", I.get().getText(t, "RECEIPT_WIZARD_CHECK_ERROR"));
				o.getModel("messageModel").setProperty("/stripType", f.Error);
				return;
			}
			var r = o.getBindingContext().getObject();
			var j = this._byId("ReceiptWizardAttendeesTable", w);
			r.Attendees = [];
			j.getTable().getItems().forEach(function(v, i) {
				v.getModel().setProperty("Lfdnr", ("00" + (i + 1)).slice(-3), v.getBindingContext());
				var e = v.getBindingContext().getObject();
				delete e.__metadata;
				r.Attendees.push(e);
			});
			r.Products = [];
			var p = this._byId("ReceiptWizardProductsTable", w);
			p.getTable().getItems().forEach(function(v, i) {
				if (!U.isEmptyObjectOrString(v.getBindingContext().getProperty("ProductId"))) {
					var e = v.getBindingContext().getObject();
					delete e.__metadata;
					r.Products.push(e);
				}
			});
			var k = function(e, R) {
				if (sap.fin.travel.lib.reuse.util.MessageUtil.get().handleMessageResponse(R)) {
					var i = sap.fin.travel.lib.reuse.util.MessageUtil.get().getErrorMessageResponse(R);
					o.getModel("messageModel").setProperty("/stripMessage", i.hasOwnProperty("message") ? i.message : i);
					var n = i.hasOwnProperty("type") ? d.ErrorType.toMessageType(i.type) : f.Error;
					o.getModel("messageModel").setProperty("/stripType", n);
				} else {
					o.getModel("messageModel").setProperty("/stripMessage", I.get().getText(t, "RECEIPT_WIZARD_CHECK_ERROR"));
					o.getModel("messageModel").setProperty("/stripType", f.Error);
				}
				return;
			};
			var l = function() {
				t._resetWizardSplitReceipt({
					bSuccess: true
				});
				t.oWizardDialog.close();
				var e = t.oWizardDialog.data("splitReceiptWizardTableId");
				var T = t._byId(e, w);
				if (T) {
					T.rebindTable();
				}
				var R = t.getView().getBindingContext().getPath();
				t.getView().getModel().read(R);
				c.show(I.get().getText(t, "WIZARD_SPLIT_RECEIPT_SUCCESS"), {
					duration: 5000,
					width: "15em",
					my: "center bottom",
					at: "center bottom",
					of: window,
					offset: "0 0",
					collision: "fit fit",
					onClose: null,
					autoClose: true,
					animationTimingFunction: "ease",
					animationDuration: 1000,
					closeOnBrowserNavigation: true
				});
			};
			P.createDeepEntry(o.getModel(), "/ReceiptWizards", r, {
				success: l,
				functionalError: k
			});
		},
		handleDeleteParticipants: function(e) {
			var o = this._byId("ReceiptWizardAttendeesTable", w);
			o.getTable().getSelectedItems().forEach(function(v) {
				o.getModel().deleteCreatedEntry(v.getBindingContext());
				o.getTable().removeItem(v);
			});
		},
		handleDeleteProducts: function(e) {
			var p = this._byId("ReceiptWizardProductsTable", w);
			p.getTable().getSelectedItems().forEach(function(v) {
				p.getModel().deleteCreatedEntry(v.getBindingContext());
				p.getTable().removeItem(v);
			});
		},
		handleReceiptHasAttachmentButtonPressed: function(e) {},
		extendP13nBreadCrumbExpression: function(s) {
			var p = s.keyTitle;
			switch (s.entitySet) {
				case "CostAssignments":
					if (s.breadcrumbFor && s.breadcrumbFor !== "TravelExpenses") {
						var e = function(g, v) {
							if ("Receipts" === v) {
								return g + 1;
							}
							return g;
						};
						if (s.breadcrumbFor === "Mileages" || (s.breadcrumbFor === "Receipts" && s.breadcrumbs.slice(s.i).reduce(e, 0) === 1)) {
							p = {
								Path: "RefKey"
							};
						}
					}
					break;
				case "Receipts":
					if (s.breadcrumbFor && s.breadcrumbFor === "Receipts") {
						return "{= ${RefNo} === '' ? ${Receiptno} : ${RefNo}}";
					}
			}
			var B = A.buildBreadCrumbExpression(s.entityTypeContext, p, s.typeName);
			return B;
		},
		handleSubmitDisclaimer: function(e) {
			var t = this;
			var E = e.getSource();
			var m = e.getSource().getModel();
			var o = m.getMetaModel();
			var g = o.getODataFunctionImport("CheckTrip");
			if (g) {
				var v = this.getView().getBindingContext();
				if (v == undefined) {
					return;
				}
				this._eventHandler.checkAppForms(e, true, function() {
					var s = function(j, r) {
						var k = M.get().getErrorMessagesResponse(r);
						t.getOwnerComponent().runAsOwner(function() {
							b.viewSubmitDisclaimer({
								getSource: function() {
									return E;
								},
								getErrors: function() {
									return k;
								}
							}, t);
						});
					};
					var h = function(j, r) {
						if (!M.get().hasError(M.get().getErrorMessagesResponse(r), [f.Error])) {
							s(j, r);
						}
					};
					var p = {
						Pernr: v.getProperty("Pernr"),
						Tripno: v.getProperty("Tripno")
					};
					var i = function(j, r) {
						P.callFunction(m, {
							name: "/CheckTrip",
							settings: {
								async: true,
								refreshAfterChange: false
							},
							success: s,
							functionalError: h,
							urlParameters: p
						});
					};
					P.submitChanges(m, {
						success: i
					});
				});
			} else {
				this._eventHandler.checkAppForms(e, true, function() {
					v = t.getView().getBindingContext();
					if (v == undefined) {
						return;
					}
					t.getOwnerComponent().runAsOwner(function() {
						S.viewSubmitDisclaimer({
							getSource: function() {
								return {
									getBindingContext: function() {
										return v;
									}
								};
							}
						}, t);
					});
				});
			}
		},
		getIconForExpenseTypeCategory: function(i) {
			switch (i) {
				case 1:
					return "sap-icon://bed";
				case 2:
					return "sap-icon://meal";
				case 3:
					return "sap-icon://private";
				case 4:
					return "sap-icon://receipt";
				case 5:
					return "sap-icon://meal";
				case 6:
					return "sap-icon://flight";
				case 7:
					return "sap-icon://FioriInAppIcons/Entertainment";
				case 8:
					return "sap-icon://car-rental";
				case 9:
					return "sap-icon://bus-public-transport";
				case 10:
					return "sap-icon://per-diem";
				case 11:
					return "sap-icon://per-diem";
				case 12:
					return "sap-icon://mileage";
				case 13:
					return "sap-icon://FioriInAppIcons/Gift";
				case 99:
					return "sap-icon://money-bills";
				default:
					return "sap-icon://receipt";
			}
		},
		formatDateAsDateRange: function(s, e) {
			var o = sap.ui.core.format.DateFormat.getDateInstance();
			if (s != null && e != null) {
				return o.format(s, true) + " - " + o.format(e, true);
			} else if (e == null) {
				return o.format(s, true);
			} else {
				return o.format(e, true);
			}
		}
	});
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/controller/ListPageExtension.controller', ["sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/fin/travel/lib/reuse/util/FragmentHelper",
	"sap/fin/travel/lib/reuse/util/i18n", "sap/fin/travel/lib/reuse/util/CustomDataUtil", "sap/fin/travel/lib/reuse/util/PersistenceHelper",
	"sap/fin/travel/lib/reuse/util/ODataModelUtil", "sap/fin/travel/lib/reuse/util/NavigationUtil",
	"sap/fin/travel/lib/reuse/util/ControlUtil", "fin/travel/mytravelexpensesv2/util/CreditCardUtil", "sap/m/MessageBox",
	"sap/ui/model/Context"
], function(J, F, a, b, I, C, P, O, N, c, d, M, e) {
	"use strict";
	return sap.ui.controller("fin.travel.mytravelexpensesv2.controller.ListPageExtension", {
		onInit: function() {
			$.noop();
		},
		_fnDraftOrUnsavedByDialog: function(o, D) {
			var i = D && D.getProperty("DraftLinkType") === "Draft";
			var f = D && D.getProperty("DraftLinkType") === "UnsavedBy";
			var s = D && D.getProperty("Tripno");
			if (i) {
				var A = I.get().getText(this, "LEAVE_PAGE");
				M.show(I.get().getText(this, "BACK_WARNING"), {
					icon: M.Icon.WARNING,
					title: I.get().getText(this, "WARNING"),
					actions: [A, M.Action.CANCEL],
					onClose: function(j) {
						if (j === A && o && "function" === typeof o) {
							o();
						}
					}
				});
			} else if (f) {
				var g = D.getProperty("DraftUserId");
				var h = this.getView().getId() + "UnsavedChangesDialogFragment";
				b.get().getUnsavedDialog(this, h, s, g).then(o);
			} else if (o && "function" === typeof o) {
				o();
			}
		},
		handleCreateExpenseConfirm: function(E) {
			var o = E.getSource().getBindingContext().getObject();
			var s = sap.ui.getCore().byId("CreateExpenseDialogFragment--schemaSmartField");
			if (s && $.isEmptyObject(s.getValue())) {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", I.get().getText(this,
					"SCHEMA_MISSING_FIELD_ALERT"));
			} else {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
				var m = this.getView().getModel();
				m.deleteCreatedEntry(new e(m, this.oCreateExpenseDialog.getBindingContext().getPath()));
				var t = this;
				var S = function(D, r) {
					var f = "/" + (r.headers && r.headers["location"] && r.headers["location"].split("/").slice(-1).pop()) ||
						"TravelExpenses(Pernr='" + D.Pernr + "',Tripno='" + D.Tripno + "')";
					t.oCreateExpenseDialog.close();
					N.navigate(f, t.getOwnerComponent().iLevel);
				};
				P.createEntry(m, "TravelExpenses", {
					success: S,
					properties: {
						Pernr: o.Pernr,
						Tripno: o.Tripno,
						TSchema: o.TSchema
					}
				});
			}
		},
		handleSchemaChange: function(E) {
			if (!$.isEmptyObject(E.getParameter("value"))) {
				this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
			}
		},
		handleCreateExpenseCancel: function(E) {
			this.oCreateExpenseDialog.getModel("createExpenseDialogModel").setProperty("/stripMessage", "");
			var s = sap.ui.getCore().byId("CreateExpenseDialogFragment--schemaSmartField");
			var p = sap.ui.getCore().byId("CreateExpenseDialogFragment--pendingTripListSmartField");
			s.setValue("");
			p.setValue("");
			this.oCreateExpenseDialog.close();
		},
		handleCreditCard: function(E) {
			var l = c.getSmartTable(E.getSource());
			var D = O.get().getDraftItem(l);
			var s = D && D.getProperty("Tripno");
			d.viewCreditCard(E, this, true, s);
		}
	});
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/controller/Main.controller', ["sap/ui/core/mvc/Controller",
	"sap/fin/travel/lib/reuse/util/AppComponent", "fin/travel/mytravelexpensesv2/conf/AppManifest",
	"fin/travel/mytravelexpensesv2/conf/AppDescriptor"
], function(C, A, a, b) {
	"use strict";
	return C.extend("fin.travel.mytravelexpensesv2.controller.Main", {
		onInit: function() {
			var s = this.getOwnerComponent().getManifestEntry("sap.app").applicationVersion.version;
			a.ListPage["sap.app"].applicationVersion.version = s;
			a.DetailPage["sap.app"].applicationVersion.version = s;
			var m = this.getOwnerComponent().getManifest();
			if (m && m["sap.ui5"] && m["sap.ui5"].extends && m["sap.ui5"].extends.extensions) {
				jQuery.extend(a.DetailPage["sap.ui5"].extends.extensions["sap.ui.viewExtensions"], m["sap.ui5"].extends.extensions[
					"sap.ui.viewExtensions"]);
			}
			var S = {
				manifestPath: "fin.travel.mytravelexpensesv2.conf",
				homeRoute: "TravelExpenses",
				manifest: {
					"ListPage": a.ListPage,
					"DetailPage": a.DetailPage
				},
				appDescriptor: b,
				extension: this.extension
			};
			var e = this.getView().getModel("i18n");
			var r = this.getView().getModel("i18n||Default");
			if (r && r.getResourceBundle() && e && e.getResourceBundle()) {
				e.getResourceBundle().aPropertyFiles[0].getKeys().forEach(function(k) {
					r.getResourceBundle().aPropertyFiles[0].setProperty(k, e.getResourceBundle().getText(k));
				});
				this.getOwnerComponent().getResourceBundle().aPropertyFiles = r.getResourceBundle().aPropertyFiles;
			}
			A.init(this.getOwnerComponent(), this.getView().byId("fcl"), this.getView().getModel(), S);
		}
	});
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerHelper', ["sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/i18n", "sap/fin/travel/lib/reuse/util/FragmentHelper"
], function(J, I, F) {
	"use strict";
	var s = "SubmitDisclaimerDialogFragment";

	function S(e, c) {
		if (c.oSubmitDisclaimerFragment) {
			c.oSubmitDisclaimerFragment.unbindElement();
			c.oSubmitDisclaimerFragment.close();
		}
	}

	function f(e, c) {
		var E = function() {
			S(e, c);
		};
		var b = function() {
			S(e, c);
		};
		c._eventHandler.handleSubmitAction(e, b, E);
	}

	function a(e, c) {
		sap.ui.core.Fragment.byId(s, "SubmitButton").setEnabled(e.getParameter("selected"));
	}

	function v(e, c) {
		var A = function() {
			sap.ui.core.Fragment.byId(s, "CancelButton").attachPress(c, S);
			sap.ui.core.Fragment.byId(s, "SubmitButton").attachPress(c, f);
			sap.ui.core.Fragment.byId(s, "SubmitCheckbox").attachSelect(c, a);
			c.oSubmitDisclaimerFragment.setModel(c.getView().getModel());
		};
		var o = function() {
			c.oSubmitDisclaimerFragment.bindElement(e.getSource().getBindingContext().getPath());
			c.oSubmitDisclaimerFragment.setModel(new J({
				submitText: e.getSource().getBindingContext().getObject().SubmitText.length > 0 ? e.getSource().getBindingContext().getObject().SubmitText : I
					.get().getText(c, "EXPENSE_SUBMIT_DISCLAIMER")
			}), "submitDisclaimerModel");
			c.oSubmitDisclaimerFragment.open();
		};
		if (F.get().loadFragment && typeof F.get().loadFragment === "function") {
			F.get().loadFragment({
				id: s,
				name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialog",
				controller: c,
				models: {
					i18n: c.getView().getModel("i18n")
				}
			}).then(function(b) {
				if (b) {
					if (!c.oSubmitDisclaimerFragment) {
						c.oSubmitDisclaimerFragment = b;
						A();
					}
					o();
				}
			});
		} else {
			if (!c.oSubmitDisclaimerFragment) {
				c.oSubmitDisclaimerFragment = F.get().getFragment({
					id: s,
					name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialog",
					controller: c,
					models: {
						i18n: c.getView().getModel("i18n")
					}
				});
				A();
			}
			o();
		}
	}
	return {
		viewSubmitDisclaimer: v
	};
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerWithReasonHelper', ["sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/i18n", "sap/fin/travel/lib/reuse/util/FragmentHelper", "sap/fin/travel/lib/reuse/util/Utils",
	"sap/m/MessageToast", "sap/ui/core/ValueState", "sap/ui/core/MessageType", "sap/m/MessageStrip"
], function(J, I, F, U, M, V, a, b) {
	"use strict";
	var s = "SubmitDisclaimerDialogFragment";

	function _(m, C) {
		var o = m.getMetaModel();
		var t = o.getODataEntityType("TRV_MTE_SRV.TravelExpense");
		var r = o.getODataProperty(t, "Reason");
		var R = o.getObject("com.sap.vocabularies.Common.v1.Label/String", r);
		var e = R || r["sap:label"];
		var g = new J({
			Reason: C.getProperty("Reason"),
			ReasonProperty: r
		});
		return {
			facadeModel: g,
			label: e
		};
	}

	function v(i, C) {
		var B = i.getBinding("value");
		var e = false;
		try {
			if (i.getVisible()) {
				B.getType().validateValue(i.getValue());
			}
		} catch (E) {
			e = true;
			i.setValueState(V.Error);
		}
		return e;
	}

	function S(e, C) {
		if (C.oSubmitDisclaimerFragment) {
			sap.ui.core.Fragment.byId(s, "SubmitCheckbox").setSelected(false);
			sap.ui.core.Fragment.byId(s, "SubmitButton").setEnabled(false);
			C.oSubmitDisclaimerFragment.unbindElement();
			C.oSubmitDisclaimerFragment.close();
		}
	}

	function f(e, C) {
		var g = function() {
			S(e, C);
		};
		var h = function() {
			S(e, C);
			M.show(I.get().getText(C, "SUBMIT_ERROR_MSG"), {
				duration: 2000,
				onClose: C._eventHandler.onShowMessages
			});
		};
		var r = sap.ui.core.Fragment.byId(s, "SumbitInputReasonID");
		if (!v(r, C)) {
			if (!U.isEmptyObjectOrString(r.getValue())) {
				var m = C.getView().getModel();
				var o = C.oSubmitDisclaimerFragment.getModel("facadeModel");
				m.setProperty("Reason", o.getProperty("/Reason"), C.getView().getBindingContext());
			}
			C._eventHandler.handleSubmitAction(e, g, h, h);
		}
	}

	function c(e, C) {
		sap.ui.core.Fragment.byId(s, "SubmitButton").setEnabled(e.getParameter("selected"));
	}

	function d(e, C) {
		var A = function() {
			sap.ui.core.Fragment.byId(s, "CancelButton").attachPress(C, S);
			sap.ui.core.Fragment.byId(s, "SubmitButton").attachPress(C, f);
			sap.ui.core.Fragment.byId(s, "SubmitCheckbox").attachSelect(C, c);
			C.oSubmitDisclaimerFragment.setModel(C.getView().getModel());
			var m = C.getView().getModel().getMetaModel();
			var t = m.getODataEntityType("TRV_MTE_SRV.TravelExpense");
			var r = m.getODataProperty(t, "Reason");
			var R = new sap.m.Input({
				id: s + "--SumbitInputReasonID",
				type: "Text",
				value: {
					path: "facadeModel>/Reason",
					type: "sap.ui.model.type.String",
					constraints: {
						minLength: 1,
						maxLength: r.maxLength
					}
				},
				visible: "{= ${ReasonFc} > 0 }"
			});
			var g = sap.ui.core.Fragment.byId(s, "SimpleFormReasonID");
			g.addContent(R);
			sap.ui.getCore().getMessageManager().registerObject(R, true);
			R.attachLiveChange(function(D) {
				if (!U.isEmptyObjectOrString(D.getParameter("value"))) {
					R.setValueState(V.None);
					R.setValueStateText("");
				}
			});
		};
		var o = function() {
			var r = _(C.getView().getModel(), C.getView().getBindingContext());
			C.oSubmitDisclaimerFragment.setModel(r.facadeModel, "facadeModel");
			var m = e.getErrors();
			C.oSubmitDisclaimerFragment.bindElement(e.getSource().getBindingContext().getPath());
			C.oSubmitDisclaimerFragment.setModel(new J({
				stripMessage: m && m.length > 0 ? m[0].message : "",
				stripType: m && m.length > 0 ? a.Warning : a.None,
				submitText: e.getSource().getBindingContext().getObject().SubmitText.length > 0 ? e.getSource().getBindingContext().getObject().SubmitText : I
					.get().getText(C, "EXPENSE_SUBMIT_DISCLAIMER"),
				reasonLabel: U.isEmptyObjectOrString(r.label) ? I.get().getText(C, "SUBMIT_REASON_LABEL") : r.label
			}), "submitDisclaimerModel");
			C.oSubmitDisclaimerFragment.open();
		};
		if (F.get().loadFragment && typeof F.get().loadFragment === "function") {
			F.get().loadFragment({
				id: s,
				name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialogWithReason",
				controller: C,
				models: {
					i18n: C.getView().getModel("i18n")
				}
			}).then(function(g) {
				if (g) {
					if (!C.oSubmitDisclaimerFragment) {
						C.oSubmitDisclaimerFragment = g;
						A();
					}
					o();
				}
			});
		} else {
			if (!C.oSubmitDisclaimerFragment) {
				C.oSubmitDisclaimerFragment = F.get().getFragment({
					id: s,
					name: "fin.travel.mytravelexpensesv2.view.fragments.SubmitDisclaimerDialogWithReason",
					controller: C,
					models: {
						i18n: C.getView().getModel("i18n")
					}
				});
				A();
			}
			o();
		}
	}
	return {
		viewSubmitDisclaimer: d
	};
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/model/models', ["sap/ui/model/json/JSONModel", "sap/ui/Device"], function(J, D) {
	"use strict";
	return {
		createDeviceModel: function() {
			var m = new J(D);
			m.setDefaultBindingMode("OneWay");
			return m;
		}
	};
});
sap.ui.predefine('fin/travel/mytravelexpensesv2/util/CreditCardUtil', ["sap/ui/model/json/JSONModel",
	"sap/fin/travel/lib/reuse/util/AppComponent", "sap/fin/travel/lib/reuse/util/PersistenceHelper", "sap/fin/travel/lib/reuse/util/i18n",
	"sap/fin/travel/lib/reuse/util/FragmentHelper", "sap/fin/travel/lib/reuse/util/ODataModelUtil", "sap/fin/travel/lib/reuse/util/Utils",
	"sap/fin/travel/lib/reuse/util/ControlUtil", "sap/fin/travel/lib/reuse/util/MessageUtil", "sap/fin/travel/lib/reuse/util/ActionUtil",
	"sap/fin/travel/lib/reuse/util/TravelUtil", "sap/fin/travel/lib/reuse/util/NavigationUtil", "sap/ui/core/MessageType",
	"sap/m/MessageToast", "sap/m/VBox", "sap/m/MessageStrip", "sap/fin/travel/lib/reuse/util/MessageParser"
], function(J, A, P, I, F, O, U, C, M, a, T, N, b, c, V, d, f) {
	"use strict";
	var s = "CreditCardReceiptDialogFragment";
	var g = "CreditCardBufferSetId::ResponsiveTable";
	var o, h, j;
	var k = new J();

	function H() {
		if (o) {
			o.unbindElement();
			o.close();
			o = undefined;
		}
		F.get().destroy(s);
	}

	function l(e, i) {
		i._eventHandler.onSelectionChange(e);
		var t = sap.ui.core.Fragment.byId(s, g);
		var w = sap.ui.core.Fragment.byId(s, "creditCardStep2Button");
		var S = sap.ui.core.Fragment.byId(s, "submitButton");
		if (w) {
			if (t && t.getSelectedItems().length > 0) {
				var W = sap.ui.core.Fragment.byId(s, "creditCardWizard");
				if (W.getSteps()[1].getContent().length > 0) {
					S.setEnabled(true);
				} else {
					w.setEnabled(true);
				}
			} else {
				w.setEnabled(false);
				S.setEnabled(false);
			}
		}
	}

	function m(e, i, r, t) {
		var u = [],
			w = i.getView().getModel();
		var B = e.getBindingContext();
		var x = {
			Pernr: B.getProperty("Pernr"),
			Tripno: B.getProperty("Tripno")
		};
		var y;
		if (r) {
			var z = r.getBindingContext();
			x.TSchema = z.getProperty("TSchema");
			x.Tripno = z.getProperty("Tripno") || "";
			y = function(D, G) {
				var K = N.getNavigationPathFromReponse(D, G);
				if (!U.isEmptyObjectOrString(K.subPath)) {
					N.navigate(K.subPath, i.getView().getModel("view").getProperty("/level"));
				}
			};
		}
		if (h.getTable().getSelectedItems() && h.getTable().getSelectedItems().length > 0) {
			h.getTable().getSelectedItems().forEach(function(D) {
				var G = D.getBindingContext();
				u.push(G.getModel().getProperty(G.getPath()));
			});
			x.AssignCreditCards = u;
			var E = function(D, R) {
				var G = "";
				if (R != undefined) {
					G = M.get().getErrorMessageResponse(R);
				} else {
					G = M.get().getErrorMessageResponse(D);
				}
				o.getModel("creditCardModel").setProperty("/StripMessage", G.hasOwnProperty("message") ? G.message : G);
				var K = G.hasOwnProperty("type") ? f.ErrorType.toMessageType(G.type) : b.Error;
				o.getModel("creditCardModel").setProperty("/StripType", K);
				if (r) {
					var W = sap.ui.core.Fragment.byId(s, "creditCardWizard");
					W.goToStep(W.getSteps()[0]);
				}
			};
			var S = function(D, G) {
				var R = G || D;
				if (M.get().hasError(M.get().getErrorMessagesResponse(R), [b.Error])) {
					E(D, G);
				} else {
					var K = o.data("oSmartTable");
					if (K) {
						K.rebindTable();
					}
					H();
					if (typeof y === "function") {
						if (t && typeof t === "function") {
							t(i);
						}
						y(D, G);
					}
				}
			};
			P.createDeepEntry(w, "/TravelExpenses", x, {
				success: S,
				error: E,
				functionalError: S
			});
		} else {
			H();
		}
	}

	function n(e, i) {
		var r = i.getView().getModel(),
			t = C.getOwnerControl(e);
		var u = function(D, R) {
			if (R === undefined) {
				return;
			}
			var w = M.get().getErrorMessageResponse(R);
			o.getModel("creditCardModel").setProperty("/StripMessage", w.hasOwnProperty("message") ? w.message : w);
			var E = w.hasOwnProperty("type") ? f.ErrorType.toMessageType(w.type) : b.Error;
			o.getModel("creditCardModel").setProperty("/StripType", E);
		};
		var S = function() {
			o.getModel("creditCardModel").setProperty("/StripMessage", "");
		};
		t.getTable().getSelectedItems().forEach(function(w) {
			P.remove(r, w.getBindingContext().getPath(), {
				success: S,
				functionalError: u
			});
		});
	}

	function _(e) {
		var B = sap.ui.core.Fragment.byId(s, "creditCardStep2Button");
		if (!U.isEmptyObjectOrString(B)) {
			B.setEnabled(e);
		}
	}

	function p(E, r) {
		var t = E.getSource();
		var u = a.getActionContext(E, r);
		u.context.contextCreated().then(function(w) {
			var x = a.buildParametersForm(u.actionParam, w);
			var W = sap.ui.core.Fragment.byId(s, "creditCardWizard");
			var y = W.getSteps();
			var B = y[0];
			var z = y[y.length - 1];
			r.actionContext = w;
			sap.ui.core.Fragment.byId(s, "endButton").attachPress(r, u.close);
			var S = function() {
				var e, G, i;
				o.getModel("creditCardModel").setProperty("/StripMessage", "");
				if (x.getEmptyMandatoryFields().length == 0 && x.getEmptyMandatoryValueHelpFields().length == 0 && x.checkValuesValidityFields() ==
					0) {
					m(t, r, x.form, u.close);
				} else {
					var K = [];
					var L = [];
					var R = I.get().getText("MANDATORY_FIELD_ERROR");
					var Q = I.get().getText("MANDATORY_VALUE_LIST_FIELD_ERROR");
					for (i = 0; i < x.getEmptyMandatoryFields().length; i++) {
						e = x.getEmptyMandatoryFields()[i];
						G = jQuery.sap.formatMessage(R, e.getTextLabel());
						L.push({
							text: G,
							type: b.Error,
							showCloseButton: true
						});
						K.push(e.getTextLabel());
					}
					for (i = 0; i < x.getEmptyMandatoryValueHelpFields().length; i++) {
						e = x.getEmptyMandatoryValueHelpFields()[i];
						if (K.indexOf(e.getTextLabel()) === -1) {
							G = jQuery.sap.formatMessage(Q, e.getTextLabel());
							L.push({
								text: G,
								type: b.Error,
								showCloseButton: true
							});
							K.push(e.getTextLabel());
						}
					}
					for (i = 0; i < x.checkValuesValidityFields().length; i++) {
						var X = x.checkValuesValidityFields()[i];
						e = sap.ui.getCore().byId(X);
						if (e) {
							if (K.indexOf(e.getTextLabel()) === -1) {
								G = jQuery.sap.formatMessage(Q, e.getTextLabel());
								L.push({
									text: G,
									type: b.Error,
									showCloseButton: true
								});
								K.push(e.getTextLabel());
							}
						}
					}
					if (L.length > 0) {
						o.getModel("creditCardModel").setProperty("/StripMessage", L[0].text);
						o.getModel("creditCardModel").setProperty("/StripType", L[0].type);
						W.goToStep(B);
					}
				}
			};
			sap.ui.core.Fragment.byId(s, "submitButton").attachPress(r, S);
			_(false);
			setTimeout(function() {
				try {
					if (z.getContent().length < 1) {
						z.insertContent(x.form, 1);
						W.setCurrentStep(z);
					}
				} catch (e) {
					jQuery.sap.log.error(e);
				}
				W.goToStep(z);
			}, 100);
			var D = sap.ui.core.Fragment.byId(s, "submitButton");
			D.setEnabled(true);
		});
	}

	function v(e, i, w, D) {
		var E = e.getSource();
		var B = e.getSource().getBindingContext(),
			r = B ? B.getProperty("Pernr") : O.get().getCurrentTripContext().Pernr;
		var S = "";
		var t = b.None;
		var u = "fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";
		if (w) {
			u = typeof a.getActionContext === "function" ? "fin.travel.mytravelexpensesv2.view.fragments.WizardCreditCardDialog" :
				"fin.travel.mytravelexpensesv2.view.fragments.CreditCardReceiptDialog";
			S = D ? (T.TripNumber.Initial === D ? I.get().getText("DRAFT_WARNING_UNKNOWN", D) : I.get().getText("DRAFT_WARNING", D)) : "";
			t = D ? b.Warning : b.None;
		}
		var x = function() {
			sap.ui.core.Fragment.byId(s, "endButton").attachPress(i, H);
			if (w !== true) {
				sap.ui.core.Fragment.byId(s, "submitButton").attachPress(i, function(z) {
					m(z.getSource(), i);
				});
			}
			var W = sap.ui.core.Fragment.byId(s, "creditCardStep2Button");
			if (W) {
				W.attachPress(i, p);
			}
			sap.ui.core.Fragment.byId(s, "CreditCardBufferSetId::Button::deleteEntry").attachPress(i, function(z) {
				n(z.getSource(), i);
			});
			sap.ui.core.Fragment.byId(s, g).attachSelectionChange(i, l);
		};
		var y = function() {
			k = {
				Pernr: r,
				Tripno: B ? B.getProperty("Tripno") : "9999999999",
				BeginDate: B ? B.getProperty("Datedep") : undefined,
				EndDate: B ? B.getProperty("Datearr") : undefined,
				Creatable: B === undefined,
				Deletable: !A.get().getGlobalModel().getProperty("/userprofile/CccNoReceDeleteable"),
				StripMessage: S,
				StripType: t
			};
			o.setModel(new J(k), "creditCardModel");
			o.setModel(i.getView().getModel());
			o.bindElement(B ? B.getPath() : "/UserProfiles('" + r + "')");
			h = sap.ui.core.Fragment.byId(s, "CreditCardBufferSmartTable");
			j = sap.ui.core.Fragment.byId(s, "CreditCardBufferFilterBar");
			o.data("oSmartTable", w !== true ? C.getSmartTable(E) : undefined);
			o.attachAfterOpen(function() {
				if (j.isInitialised()) {
					j.triggerSearch();
				}
				if (j.getBasicSearchControl()) {
					j.getBasicSearchControl().focus();
				}
			});
			o.open();
		};
		if (F.get().loadFragment && typeof F.get().loadFragment === "function") {
			F.get().loadFragment({
				id: s,
				name: u,
				controller: this,
				models: {
					i18n: i.getView().getModel("i18n")
				}
			}).then(function(z) {
				if (z) {
					if (!o) {
						o = z;
						x();
					}
					y();
				}
			});
		} else {
			if (!o) {
				o = F.get().getFragment({
					id: s,
					name: u,
					controller: this,
					models: {
						i18n: i.getView().getModel("i18n")
					}
				});
				x();
			}
			y();
		}
	}

	function q(S) {
		var e = sap.ui.core.Fragment.byId(s, "CreditCardBufferFilterBar");
		var i = S.getParameter("bindingParams");
		if (i && i.filters) {
			var r = i.filters[0].aFilters;
			r.forEach(function(t) {
				if (t && t.sPath) {
					if (t.sPath === "RecDate" && U.isEmptyDateOrString(t.oValue1)) {
						t.oValue1 = new Date(0);
						e.getControlByKey("RecDate").setValue("");
					}
					if (t.sPath === "RecDate" && U.isEmptyDateOrString(t.oValue2)) {
						t.oValue2 = new Date(9999999999999);
					}
				}
			});
		}
	}
	return {
		viewCreditCard: v,
		handleBeforeRebindTable: q
	};
});
jQuery.sap.registerPreloadedModules({
	"name": "fin/travel/mytravelexpensesv2/Component-preload",
	"version": "2.0",
	"modules": {
		"fin/travel/mytravelexpensesv2/i18n/i18n.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Additional Destination\nPD_VIEW_DEDUCTION=View deductions\nSUBMIT_MANDATORY_ERROR_MSG=Enter a value.\nCLOSE=Close\nCREDIT_CARD_STEP2_TITLE=Assign to a new Expense Report\nADJUST_RECEIPT_DATE=Adjust Receipt Date\nIS_ITEMIZED=Itemized\nSUBMITTED_MSG=Your Expense Report has been submitted to your approver {0}\nRESET_DEDUCTION=Reset\nMERGE_RECEIPT_BUTTON=Merge receipts\nRECEIPT_WIZARD_CHECK_ERROR=Could not split the receipt. Mandatory fields are missing.\nSELECT_SCHEMA=Schema selection\nPERDIEM_EXPLANATION=Deselect by clicking on the respective icon\nSUBMIT_DISCLAIMER=Save & Submit\nLUNCH=Lunch\nCREATE_EXPENSE=Create Expense Report\nMILEAGE=Mileage\nCOST_ASSIGNMENT=Cost Assignment\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Category\nOBJECT_TYPE=Travel Expense\nRECEIPT_WIZARD_STEP4_PRODUCTS=Products\nLODGING_NIGHT=Overnight\nDRAFT_WARNING_UNKNOWN=A draft expense report already exists. Please note unsaved changes will be lost.\nSUBMITTED_MSG_NO_APPROVER=Your Expense Report has been submitted\nPD_ENTER_DEDUCTION=Enter deductions\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Expense Type\nappDescription=App Description\nSPLIT_RECEIPT=Slipt Receipt\nPER_DIEM_DEDUCTIONS=Per-Diem deductions\nDRAFT_LOCKED_BY_USER=Another user edited trip number "{0}" without saving the changes\\: {1} \\n\\nIf you pursue, any changes will be lost.\nLUNCH_PK=Payment in Kind Lunch\nPER_DIEM_MEALS=Meals\nADJUST_FROM_DATE_TO_DATE=Adjust From Date and To Date\nSUBMIT_DATE=Date\nCREDIT_CARD_RECEIPT_HEADER=Available Receipts\nASSIGN_BUTTON=Assign\nCREDIT_CARD_STEP2_BUTTON=Assign to a new Expense Report\nSCHEMA_MISSING_FIELD_ALERT=Trip Schema field is mandatory\nWIZARD_SPLIT_RECEIPT=Split Receipt\nHAS_ATTACHMENT=Includes {0} attachment(s)\nSUBMIT_REASON=Reason for Exceeding Maximum Difference\nEXPENSE_REPORT=Expense Report\nRECEIPT_WIZARD_RECEIPT_DETAILS=Receipt Information\nNO_CREDIT_CARD_RECEIPT=No Receipts available\nCREDIT_CARD_RECEIPT_TITLE=Access Receipt Buffer\nSUBMIT_APPROVER=Approver\nCANCEL=Cancel\nWIZARD_SPLIT_RECEIPT_SUCCESS=Split receipt created\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Receipt details\nPER_DIEM_RESET_DESC=Reset the pending changes (till your last apply)\nRECEIPT=Receipt\nRECEIPT_WIZARD_VENDOR_DETAILS=Vendor details\nRECEIPT_COLUMN_ATTACHMENTS=Attachments\nEXPENSE_SUBMIT_DISCLAIMER=I have read, understood, and complied with the company\'s policy. I declare amounts and supporting details are complete and accurate to the best of my knowledge.\nRECEIPT_WIZARD_VAT_DETAILS=VAT Details\nAbsolute=Absolute\nPER_DIEM_DATE=Date\nCREATE_TRIP_BREAK_BUTTON=Create Trip Break\nRECEIPT_WIZARD_FLIGHT_DETAILS=Booking details\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Expense type is mandatory\nPER_DIEM_TITLE=Per-Diem\nSUBMIT_ERROR_MSG=Your Expense Report could not be saved because an error exists.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participants\nSUBMIT_REASON_LABEL=Reason for Difference\nSAVE_MSG=Your Expense Report has been saved\nBREAKFAST=Breakfast\nRECEIPT_WIZARD_SPLIT_DATA=Receipt Split Data\nPER_DIEM_ACCOMODATIONS=Accomodation\nCREATE_PENDING_TRIP=Available Travel Requests / Plans\nRECEIPT_WIZARD_STEP2=Step 2\nPDF_ERROR=Your Expense Report cannot be exported as PDF.\nCREATE=Create\nTRAVEL_EXPENSE=Travel Expense\nCREDIT_CARD_BUTTON=Access Receipt Buffer\nDINNER=Dinner\nPER_DIEM_APPLY_DESC=Sync your pending changes with the backend\nCOUPONS=Meal Coupons\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Additional button information\nSUBMIT=Submit\nBREAKFAST_PK=Payment in Kind Breakfast\nPercentage=Percentage\nNUMBER_FOR_SPLITTING=Number of Receipts to Create\nDINNER_PK=Payment in Kind Dinner\nUNSAVED_OBJECT_POPOVER_TEXT=This Expense Report has unsaved changes by {0}.\nappTitle=My Travel and Expenses V2\nDRAFT_WARNING=There is an unsaved version of Expense Report "{0}". Please be aware that usaved changes will be lost.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_ar.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u0648\\u062C\\u0647\\u0629 \\u0625\\u0636\\u0627\\u0641\\u064A\\u0629\nPD_VIEW_DEDUCTION=\\u0639\\u0631\\u0636 \\u0627\\u0644\\u0627\\u0633\\u062A\\u0642\\u0637\\u0627\\u0639\\u0627\\u062A\nSUBMIT_MANDATORY_ERROR_MSG=\\u0623\\u062F\\u062E\\u0644 \\u0642\\u064A\\u0645\\u0629.\nCLOSE=\\u0625\\u063A\\u0644\\u0627\\u0642\nCREDIT_CARD_STEP2_TITLE=\\u062A\\u0639\\u064A\\u064A\\u0646 \\u0644\\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062C\\u062F\\u064A\\u062F\nADJUST_RECEIPT_DATE=\\u062A\\u0639\\u062F\\u064A\\u0644 \\u062A\\u0627\\u0631\\u064A\\u062E \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nIS_ITEMIZED=\\u062A\\u0641\\u0635\\u064A\\u0644\\u064A\nSUBMITTED_MSG=\\u064A\\u062A\\u0645 \\u062A\\u0642\\u062F\\u064A\\u0645 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062E\\u0627\\u0635 \\u0628\\u0643 \\u0625\\u0644\\u0649 \\u0627\\u0644\\u0645\\u0639\\u062A\\u0645\\u062F \\u0627\\u0644\\u062E\\u0627\\u0635 \\u0628\\u0643 {0}.\nRESET_DEDUCTION=\\u0625\\u0639\\u0627\\u062F\\u0629 \\u062A\\u0639\\u064A\\u064A\\u0646\nMERGE_RECEIPT_BUTTON=\\u062F\\u0645\\u062C \\u0627\\u0644\\u0645\\u0633\\u062A\\u0644\\u0650\\u0645\\u064A\\u0646\nRECEIPT_WIZARD_CHECK_ERROR=\\u062A\\u0639\\u0630\\u0631 \\u062A\\u0642\\u0633\\u064A\\u0645 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644. \\u0627\\u0644\\u062D\\u0642\\u0648\\u0644 \\u0627\\u0644\\u0625\\u0644\\u0632\\u0627\\u0645\\u064A\\u0629 \\u0645\\u0641\\u0642\\u0648\\u062F\\u0629.\nSELECT_SCHEMA=\\u062A\\u062D\\u062F\\u064A\\u062F \\u0627\\u0644\\u0645\\u062E\\u0637\\u0637\nPERDIEM_EXPLANATION=\\u0642\\u0645 \\u0628\\u0625\\u0644\\u063A\\u0627\\u0621 \\u0627\\u0644\\u062A\\u062D\\u062F\\u064A\\u062F \\u0628\\u0627\\u0644\\u0646\\u0642\\u0631 \\u0641\\u0648\\u0642 \\u0627\\u0644\\u0623\\u064A\\u0642\\u0648\\u0646\\u0629 \\u0630\\u0627\\u062A \\u0627\\u0644\\u0635\\u0644\\u0629\nSUBMIT_DISCLAIMER=\\u062D\\u0641\\u0638 \\u0648\\u062A\\u0642\\u062F\\u064A\\u0645\nLUNCH=\\u0627\\u0644\\u063A\\u062F\\u0627\\u0621\nCREATE_EXPENSE=\\u0625\\u0646\\u0634\\u0627\\u0621 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0645\\u0635\\u0627\\u0631\\u064A\\u0641\nMILEAGE=\\u0627\\u0644\\u0645\\u0633\\u0627\\u0641\\u0629 \\u0628\\u0627\\u0644\\u0645\\u064A\\u0644\nCOST_ASSIGNMENT=\\u062A\\u0639\\u064A\\u064A\\u0646 \\u0627\\u0644\\u062A\\u0643\\u0644\\u0641\\u0629\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u0627\\u0644\\u0641\\u0626\\u0629\nOBJECT_TYPE=\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u0633\\u0641\\u0631\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u0627\\u0644\\u0645\\u0646\\u062A\\u062C\\u0627\\u062A\nLODGING_NIGHT=\\u0644\\u064A\\u0644\\u0629 \\u0648\\u0627\\u062D\\u062F\\u0629\nDRAFT_WARNING_UNKNOWN=\\u062A\\u0642\\u0631\\u064A\\u0631 \\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u0645\\u0633\\u0648\\u062F\\u0629 \\u0645\\u0648\\u062C\\u0648\\u062F \\u0628\\u0627\\u0644\\u0641\\u0639\\u0644. \\u064A\\u0631\\u062C\\u0649 \\u0645\\u0644\\u0627\\u062D\\u0638\\u0629 \\u0623\\u0646\\u0647 \\u0633\\u064A\\u062A\\u0645 \\u0641\\u0642\\u062F \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u063A\\u064A\\u0631 \\u0627\\u0644\\u0645\\u062D\\u0641\\u0648\\u0638\\u0629.\nSUBMITTED_MSG_NO_APPROVER=\\u062A\\u0645 \\u062A\\u0642\\u062F\\u064A\\u0645 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641.\nPD_ENTER_DEDUCTION=\\u0625\\u062F\\u062E\\u0627\\u0644 \\u0627\\u0644\\u0627\\u0633\\u062A\\u0642\\u0637\\u0627\\u0639\\u0627\\u062A\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u0646\\u0648\\u0639 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641\nappDescription=\\u0648\\u0635\\u0641 \\u0627\\u0644\\u062A\\u0637\\u0628\\u064A\\u0642\nSPLIT_RECEIPT=\\u062A\\u0642\\u0633\\u064A\\u0645 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nPER_DIEM_DEDUCTIONS=\\u0627\\u0633\\u062A\\u0642\\u0637\\u0627\\u0639\\u0627\\u062A \\u0627\\u0644\\u0628\\u062F\\u0644\nDRAFT_LOCKED_BY_USER=\\u062D\\u0631\\u0631 \\u0645\\u0633\\u062A\\u062E\\u062F\\u0645 \\u0622\\u062E\\u0631 \\u0627\\u0644\\u0631\\u062D\\u0644\\u0629 "{0}" \\u062F\\u0648\\u0646 \\u062D\\u0641\\u0638 \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A\\: {1} \\n\\n\\u0633\\u062A\\u0641\\u0642\\u062F \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u0639\\u0646\\u062F \\u0627\\u0644\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629.\nLUNCH_PK=\\u063A\\u062F\\u0627\\u0621 \\u0645\\u062F\\u0641\\u0648\\u0639 \\u0639\\u064A\\u0646\\u064B\\u0627\nPER_DIEM_MEALS=\\u0627\\u0644\\u0648\\u062C\\u0628\\u0627\\u062A\nADJUST_FROM_DATE_TO_DATE=\\u062A\\u0639\\u062F\\u064A\\u0644 \\u062A\\u0627\\u0631\\u064A\\u062E \\u0627\\u0644\\u0628\\u062F\\u0621 \\u0648\\u062A\\u0627\\u0631\\u064A\\u062E \\u0627\\u0644\\u0627\\u0646\\u062A\\u0647\\u0627\\u0621\nSUBMIT_DATE=\\u0627\\u0644\\u062A\\u0627\\u0631\\u064A\\u062E\nCREDIT_CARD_RECEIPT_HEADER=\\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\\u0627\\u062A \\u0627\\u0644\\u0645\\u062A\\u0648\\u0641\\u0631\\u0629\nASSIGN_BUTTON=\\u062A\\u0639\\u064A\\u064A\\u0646\nCREDIT_CARD_STEP2_BUTTON=\\u062A\\u0639\\u064A\\u064A\\u0646 \\u0644\\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062C\\u062F\\u064A\\u062F\nSCHEMA_MISSING_FIELD_ALERT=\\u062D\\u0642\\u0644 \\u0645\\u062E\\u0637\\u0637 \\u0627\\u0644\\u0631\\u062D\\u0644\\u0629 \\u0625\\u0644\\u0632\\u0627\\u0645\\u064A\nWIZARD_SPLIT_RECEIPT=\\u062A\\u0642\\u0633\\u064A\\u0645 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nHAS_ATTACHMENT=\\u062A\\u0636\\u0645\\u064A\\u0646 {0} \\u0645\\u0646 \\u0627\\u0644\\u0645\\u0631\\u0641\\u0642\\u0627\\u062A\nSUBMIT_REASON=\\u0627\\u0644\\u0633\\u0628\\u0628 \\u0648\\u0631\\u0627\\u0621 \\u062A\\u062C\\u0627\\u0648\\u0632 \\u0627\\u0644\\u062D\\u062F \\u0627\\u0644\\u0623\\u0642\\u0635\\u0649 \\u0644\\u0644\\u0641\\u0631\\u0642\nEXPENSE_REPORT=\\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u0645\\u0639\\u0644\\u0648\\u0645\\u0627\\u062A \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nNO_CREDIT_CARD_RECEIPT=\\u0644\\u0627 \\u062A\\u062A\\u0648\\u0641\\u0631 \\u0623\\u064A \\u0625\\u064A\\u0635\\u0627\\u0644\\u0627\\u062A\nCREDIT_CARD_RECEIPT_TITLE=\\u0627\\u0644\\u0648\\u0635\\u0648\\u0644 \\u0625\\u0644\\u0649 \\u0627\\u0644\\u0645\\u062E\\u0632\\u0646 \\u0627\\u0644\\u0645\\u0624\\u0642\\u062A \\u0644\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\\u0627\\u062A\nSUBMIT_APPROVER=\\u0627\\u0644\\u0645\\u0639\\u062A\\u0645\\u0650\\u062F\nCANCEL=\\u0625\\u0644\\u063A\\u0627\\u0621\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u062A\\u0645 \\u0625\\u0646\\u0634\\u0627\\u0621 \\u062A\\u0642\\u0633\\u064A\\u0645 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u062A\\u0641\\u0627\\u0635\\u064A\\u0644 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nPER_DIEM_RESET_DESC=\\u0625\\u0639\\u0627\\u062F\\u0629 \\u062A\\u0639\\u064A\\u064A\\u0646 \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u0627\\u0644\\u0645\\u0639\\u0644\\u0642\\u0629 (\\u0625\\u0644\\u0649 \\u0622\\u062E\\u0631 \\u062A\\u0623\\u0643\\u064A\\u062F)\nRECEIPT=\\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u062A\\u0641\\u0627\\u0635\\u064A\\u0644 \\u0627\\u0644\\u0645\\u0648\\u0631\\u0651\\u0650\\u062F\nRECEIPT_COLUMN_ATTACHMENTS=\\u0627\\u0644\\u0645\\u0631\\u0641\\u0642\\u0627\\u062A\nEXPENSE_SUBMIT_DISCLAIMER=\\u0644\\u0642\\u062F \\u0642\\u0631\\u0623\\u062A \\u0633\\u064A\\u0627\\u0633\\u064A\\u0629 \\u0627\\u0644\\u0634\\u0631\\u0643\\u0629 \\u0648\\u0641\\u0647\\u0645\\u062A\\u0647\\u0627 \\u0648\\u0627\\u0644\\u062A\\u0632\\u0645\\u062A \\u0628\\u0647\\u0627. \\u0648\\u0623\\u0642\\u0631 \\u0628\\u0623\\u0646 \\u0627\\u0644\\u0645\\u0628\\u0627\\u0644\\u063A \\u0648\\u062A\\u0641\\u0627\\u0635\\u064A\\u0644 \\u0627\\u0644\\u062F\\u0639\\u0645 \\u0643\\u0627\\u0645\\u0644\\u0629 \\u0648\\u062A\\u062A\\u0648\\u0627\\u0641\\u0642 \\u0628\\u0643\\u0644 \\u062F\\u0642\\u0629 \\u0645\\u0639 \\u0645\\u0639\\u0631\\u0641\\u062A\\u064A.\nRECEIPT_WIZARD_VAT_DETAILS=\\u062A\\u0641\\u0627\\u0635\\u064A\\u0644 \\u0636\\u0631\\u064A\\u0628\\u0629 \\u0627\\u0644\\u0642\\u064A\\u0645\\u0629 \\u0627\\u0644\\u0645\\u0636\\u0627\\u0641\\u0629\nAbsolute=\\u0645\\u0637\\u0644\\u0642\nPER_DIEM_DATE=\\u0627\\u0644\\u062A\\u0627\\u0631\\u064A\\u062E\nCREATE_TRIP_BREAK_BUTTON=\\u0625\\u0646\\u0634\\u0627\\u0621 \\u0627\\u0633\\u062A\\u0631\\u0627\\u062D\\u0629 \\u0623\\u062B\\u0646\\u0627\\u0621 \\u0627\\u0644\\u0631\\u062D\\u0644\\u0629\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u062A\\u0641\\u0627\\u0635\\u064A\\u0644 \\u0627\\u0644\\u062D\\u062C\\u0632\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u0646\\u0648\\u0639 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0625\\u0644\\u0632\\u0627\\u0645\\u064A\nPER_DIEM_TITLE=\\u0628\\u062F\\u0644\nSUBMIT_ERROR_MSG=\\u062A\\u0639\\u0630\\u0631 \\u062D\\u0641\\u0638 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062E\\u0627\\u0635 \\u0628\\u0643 \\u0628\\u0633\\u0628\\u0628 \\u0648\\u062C\\u0648\\u062F \\u062E\\u0637\\u0623 \\u0645\\u0627.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u0627\\u0644\\u0645\\u0634\\u0627\\u0631\\u0643\\u0648\\u0646\nSUBMIT_REASON_LABEL=\\u0627\\u0644\\u0633\\u0628\\u0628 \\u0648\\u0631\\u0627\\u0621 \\u0627\\u0644\\u0641\\u0631\\u0642\nSAVE_MSG=\\u062A\\u0645 \\u062D\\u0641\\u0638 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641\nBREAKFAST=\\u0627\\u0644\\u0625\\u0641\\u0637\\u0627\\u0631\nRECEIPT_WIZARD_SPLIT_DATA=\\u0628\\u064A\\u0627\\u0646\\u0627\\u062A \\u062A\\u0642\\u0633\\u064A\\u0645 \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\nPER_DIEM_ACCOMODATIONS=\\u0627\\u0644\\u0625\\u0642\\u0627\\u0645\\u0629\nCREATE_PENDING_TRIP=\\u0637\\u0644\\u0628\\u0627\\u062A/\\u062E\\u0637\\u0637 \\u0627\\u0644\\u0633\\u0641\\u0631 \\u0627\\u0644\\u0645\\u062A\\u0648\\u0641\\u0631\\u0629\nRECEIPT_WIZARD_STEP2=\\u0627\\u0644\\u062E\\u0637\\u0648\\u0629 2\nPDF_ERROR=\\u0644\\u0627 \\u064A\\u0645\\u0643\\u0646 \\u062A\\u0635\\u062F\\u064A\\u0631 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062E\\u0627\\u0635 \\u0628\\u0643 \\u0628\\u062A\\u0646\\u0633\\u064A\\u0642 PDF.\nCREATE=\\u0625\\u0646\\u0634\\u0627\\u0621\nTRAVEL_EXPENSE=\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u0633\\u0641\\u0631\nCREDIT_CARD_BUTTON=\\u0627\\u0644\\u0648\\u0635\\u0648\\u0644 \\u0625\\u0644\\u0649 \\u0627\\u0644\\u0645\\u062E\\u0632\\u0646 \\u0627\\u0644\\u0645\\u0624\\u0642\\u062A \\u0644\\u0644\\u0627\\u0633\\u062A\\u0644\\u0627\\u0645\nDINNER=\\u0627\\u0644\\u0639\\u0634\\u0627\\u0621\nPER_DIEM_APPLY_DESC=\\u0645\\u0632\\u0627\\u0645\\u0646\\u0629 \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u0627\\u0644\\u0645\\u0639\\u0644\\u0642\\u0629 \\u0645\\u0639 \\u0627\\u0644\\u0646\\u0638\\u0627\\u0645 \\u0627\\u0644\\u062E\\u0644\\u0641\\u064A\nCOUPONS=\\u0643\\u0648\\u0628\\u0648\\u0646\\u0627\\u062A \\u0627\\u0644\\u0648\\u062C\\u0628\\u0627\\u062A\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u0645\\u0639\\u0644\\u0648\\u0645\\u0627\\u062A \\u0627\\u0644\\u0632\\u0631 \\u0627\\u0644\\u0625\\u0636\\u0627\\u0641\\u064A\\u0629\nSUBMIT=\\u062A\\u0642\\u062F\\u064A\\u0645\nBREAKFAST_PK=\\u0625\\u0641\\u0637\\u0627\\u0631 \\u0645\\u062F\\u0641\\u0648\\u0639 \\u0639\\u064A\\u0646\\u064B\\u0627\nPercentage=\\u0627\\u0644\\u0646\\u0633\\u0628\\u0629 \\u0627\\u0644\\u0645\\u0626\\u0648\\u064A\\u0629\nNUMBER_FOR_SPLITTING=\\u0639\\u062F\\u062F \\u0627\\u0644\\u0625\\u064A\\u0635\\u0627\\u0644\\u0627\\u062A \\u0644\\u0644\\u0625\\u0646\\u0634\\u0627\\u0621\nDINNER_PK=\\u0639\\u0634\\u0627\\u0621 \\u0645\\u062F\\u0641\\u0648\\u0639 \\u0639\\u064A\\u0646\\u064B\\u0627\nUNSAVED_OBJECT_POPOVER_TEXT=\\u062A\\u0648\\u062C\\u062F \\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u063A\\u064A\\u0631 \\u0645\\u062D\\u0641\\u0648\\u0638\\u0629 \\u0641\\u064A \\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u0633\\u0641\\u0631 \\u0647\\u0630\\u0647 \\u062A\\u0645 \\u0625\\u062C\\u0631\\u0627\\u0624\\u0648\\u0647\\u0627 \\u0628\\u0648\\u0627\\u0633\\u0637\\u0629 {0}.\nappTitle=\\u0627\\u0644\\u0633\\u0641\\u0631 \\u0627\\u0644\\u062E\\u0627\\u0635 \\u0628\\u064A \\u0648\\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 \\u0627\\u0644\\u062E\\u0627\\u0635\\u0629 \\u0628\\u064A - \\u0627\\u0644\\u0625\\u0635\\u062F\\u0627\\u0631 \\u0627\\u0644\\u062B\\u0627\\u0646\\u064A\nDRAFT_WARNING=\\u064A\\u0648\\u062C\\u062F \\u0625\\u0635\\u062F\\u0627\\u0631 \\u063A\\u064A\\u0631 \\u0645\\u062D\\u0641\\u0648\\u0638 \\u0645\\u0646 \\u062A\\u0642\\u0631\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0631\\u064A\\u0641 "{0}". \\u064A\\u064F\\u0631\\u062C\\u0649 \\u0645\\u0644\\u0627\\u062D\\u0638\\u0629 \\u0623\\u0646\\u0647 \\u0633\\u064A\\u062A\\u0645 \\u0641\\u0642\\u062F \\u0627\\u0644\\u062A\\u063A\\u064A\\u064A\\u0631\\u0627\\u062A \\u063A\\u064A\\u0631 \\u0627\\u0644\\u0645\\u062D\\u0641\\u0648\\u0638\\u0629.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_bg.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u0414\\u043E\\u043F\\u044A\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u043D\\u0430 \\u0434\\u0435\\u0441\\u0442\\u0438\\u043D\\u0430\\u0446\\u0438\\u044F\nPD_VIEW_DEDUCTION=\\u041F\\u0440\\u0435\\u0433\\u043B\\u0435\\u0434 \\u043D\\u0430 \\u0443\\u0434\\u0440\\u044A\\u0436\\u043A\\u0438\nSUBMIT_MANDATORY_ERROR_MSG=\\u0412\\u044A\\u0432\\u0435\\u0434\\u0435\\u0442\\u0435 \\u0441\\u0442\\u043E\\u0439\\u043D\\u043E\\u0441\\u0442.\nCLOSE=\\u0417\\u0430\\u0442\\u0432\\u0430\\u0440\\u044F\\u043D\\u0435\nCREDIT_CARD_STEP2_TITLE=\\u041F\\u0440\\u0438\\u0441\\u044A\\u0435\\u0434\\u0438\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435 \\u043A\\u044A\\u043C \\u043D\\u043E\\u0432 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\\u0442\\u0435\nADJUST_RECEIPT_DATE=\\u041A\\u043E\\u0440\\u0438\\u0433\\u0438\\u0440\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u0434\\u0430\\u0442\\u0430 \\u043D\\u0430 \\u043F\\u043E\\u0441\\u0442\\u044A\\u043F\\u0432\\u0430\\u043D\\u0435\nIS_ITEMIZED=\\u0414\\u0435\\u0442\\u0430\\u0439\\u043B\\u0438\\u0437\\u0438\\u0440\\u0430\\u043D\nSUBMITTED_MSG=\\u0412\\u0430\\u0448\\u0438\\u044F\\u0442 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0435 \\u0438\\u0437\\u043F\\u0440\\u0430\\u0442\\u0435\\u043D \\u043D\\u0430 \\u0432\\u0430\\u0448\\u0435\\u0442\\u043E \\u043E\\u0434\\u043E\\u0431\\u0440\\u044F\\u0432\\u0430\\u0449\\u043E \\u043B\\u0438\\u0446\\u0435 {0}.\nRESET_DEDUCTION=\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435\nMERGE_RECEIPT_BUTTON=\\u041E\\u0431\\u0435\\u0434\\u0438\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043A\\u0432\\u0438\\u0442\\u0430\\u043D\\u0446\\u0438\\u0438\nRECEIPT_WIZARD_CHECK_ERROR=\\u041D\\u0435\\u0432\\u044A\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u044F\\u043D\\u0435 \\u043D\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442. \\u041B\\u0438\\u043F\\u0441\\u0432\\u0430\\u0442 \\u0437\\u0430\\u0434\\u044A\\u043B\\u0436\\u0438\\u0442\\u0435\\u043B\\u043D\\u0438 \\u043F\\u043E\\u043B\\u0435\\u0442\\u0430.\nSELECT_SCHEMA=\\u0418\\u0437\\u0431\\u043E\\u0440 \\u043D\\u0430 \\u0441\\u0445\\u0435\\u043C\\u0430\nPERDIEM_EXPLANATION=\\u041E\\u0442\\u043C\\u0435\\u043D\\u0435\\u0442\\u0435 \\u0438\\u0437\\u0431\\u043E\\u0440\\u0430 \\u0447\\u0440\\u0435\\u0437 \\u043A\\u043B\\u0438\\u043A\\u0432\\u0430\\u043D\\u0435 \\u0432\\u044A\\u0440\\u0445\\u0443 \\u0441\\u044A\\u043E\\u0442\\u0432\\u0435\\u0442\\u043D\\u0430\\u0442\\u0430 \\u0438\\u043A\\u043E\\u043D\\u0430\nSUBMIT_DISCLAIMER=\\u0417\\u0430\\u043F\\u0430\\u0437\\u0432\\u0430\\u043D\\u0435 \\u0438 \\u0438\\u0437\\u043F\\u0440\\u0430\\u0449\\u0430\\u043D\\u0435\nLUNCH=\\u041E\\u0431\\u044F\\u0434\nCREATE_EXPENSE=\\u0421\\u044A\\u0437\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\\u0442\\u0435\nMILEAGE=\\u041F\\u0440\\u043E\\u0431\\u0435\\u0433\nCOST_ASSIGNMENT=\\u041F\\u0440\\u0438\\u0441\\u044A\\u0435\\u0434\\u0438\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F\nOBJECT_TYPE=\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u044A\\u0447\\u0435\\u043D \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u041F\\u0440\\u043E\\u0434\\u0443\\u043A\\u0442\\u0438\nLODGING_NIGHT=\\u041D\\u043E\\u0449\\u0443\\u0432\\u043A\\u0430\nDRAFT_WARNING_UNKNOWN=\\u0427\\u0435\\u0440\\u043D\\u043E\\u0432\\u0430 \\u043D\\u0430 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\\u0442\\u0435 \\u0432\\u0435\\u0447\\u0435 \\u0441\\u044A\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0432\\u0430. \\u041C\\u043E\\u043B\\u044F, \\u0437\\u0430\\u0431\\u0435\\u043B\\u0435\\u0436\\u0435\\u0442\\u0435, \\u0447\\u0435 \\u043D\\u0435\\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D\\u0438\\u0442\\u0435 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438 \\u0449\\u0435 \\u0431\\u044A\\u0434\\u0430\\u0442 \\u0438\\u0437\\u0433\\u0443\\u0431\\u0435\\u043D\\u0438.\nSUBMITTED_MSG_NO_APPROVER=\\u0412\\u0430\\u0448\\u0438\\u044F\\u0442 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0435 \\u0438\\u0437\\u043F\\u0440\\u0430\\u0442\\u0435\\u043D.\nPD_ENTER_DEDUCTION=\\u0412\\u044A\\u0432\\u0435\\u0436\\u0434\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u0443\\u0434\\u0440\\u044A\\u0436\\u043A\\u0438\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u0412\\u0438\\u0434 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\nappDescription=\\u041E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435 \\u043D\\u0430 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435\\u0442\\u043E\nSPLIT_RECEIPT=\\u0420\\u0430\\u0437\\u0434\\u0435\\u043B\\u044F\\u043D\\u0435 \\u043D\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nPER_DIEM_DEDUCTIONS=\\u0423\\u0434\\u0440\\u044A\\u0436\\u043A\\u0438 \\u0437\\u0430 \\u0434\\u043D\\u0435\\u0432\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\nDRAFT_LOCKED_BY_USER=\\u0414\\u0440\\u0443\\u0433 \\u0435 \\u0440\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u0430\\u043B \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430 "{0}", \\u0431\\u0435\\u0437 \\u0434\\u0430 \\u0437\\u0430\\u043F\\u0430\\u0437\\u0438 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438\\u0442\\u0435\\: {1}\\n\\n\\u0410\\u043A\\u043E \\u043F\\u0440\\u043E\\u0434\\u044A\\u043B\\u0436\\u0438\\u0442\\u0435, \\u0449\\u0435 \\u0431\\u044A\\u0434\\u0430\\u0442 \\u0438\\u0437\\u0433\\u0443\\u0431\\u0435\\u043D\\u0438.\nLUNCH_PK=\\u041D\\u0430\\u0442\\u0443\\u0440\\u0430\\u043B\\u043D\\u043E \\u043F\\u043B\\u0430\\u0449\\u0430\\u043D\\u0435 \\u041E\\u0431\\u044F\\u0434\nPER_DIEM_MEALS=\\u0425\\u0440\\u0430\\u043D\\u0430\nADJUST_FROM_DATE_TO_DATE=\\u041A\\u043E\\u0440\\u0438\\u0433\\u0438\\u0440\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043D\\u0430\\u0447\\u0430\\u043B\\u043D\\u0430 \\u0434\\u0430\\u0442\\u0430 \\u0438 \\u043A\\u0440\\u0430\\u0439\\u043D\\u0430 \\u0434\\u0430\\u0442\\u0430\nSUBMIT_DATE=\\u0414\\u0430\\u0442\\u0430\nCREDIT_CARD_RECEIPT_HEADER=\\u041D\\u0430\\u043B\\u0438\\u0447\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\nASSIGN_BUTTON=\\u041F\\u0440\\u0438\\u0441\\u044A\\u0435\\u0434\\u0438\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435\nCREDIT_CARD_STEP2_BUTTON=\\u041F\\u0440\\u0438\\u0441\\u044A\\u0435\\u0434\\u0438\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435 \\u043A\\u044A\\u043C \\u043D\\u043E\\u0432 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\\u0442\\u0435\nSCHEMA_MISSING_FIELD_ALERT=\\u041F\\u043E\\u043B\\u0435 \\u0437\\u0430 \\u0441\\u0445\\u0435\\u043C\\u0430 \\u043D\\u0430 \\u043F\\u044A\\u0442\\u0443\\u0432\\u0430\\u043D\\u0435 \\u0435 \\u0437\\u0430\\u0434\\u044A\\u043B\\u0436\\u0438\\u0442\\u0435\\u043B\\u043D\\u043E\nWIZARD_SPLIT_RECEIPT=\\u0420\\u0430\\u0437\\u0434\\u0435\\u043B\\u044F\\u043D\\u0435 \\u043D\\u0430 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nHAS_ATTACHMENT=\\u0412\\u043A\\u043B\\u044E\\u0447\\u0432\\u0430 {0} \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435(\\u044F)\nSUBMIT_REASON=\\u041F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0430 \\u0437\\u0430 \\u043D\\u0430\\u0434\\u0432\\u0438\\u0448\\u0430\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u043D\\u0430 \\u0440\\u0430\\u0437\\u043B\\u0438\\u043A\\u0430\nEXPENSE_REPORT=\\u0420\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u043E\\u0442\\u0447\\u0435\\u0442\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C.\\u0440\\u0430\\u0437\\u0445.\\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nNO_CREDIT_CARD_RECEIPT=\\u041D\\u044F\\u043C\\u0430 \\u043D\\u0430\\u043B\\u0438\\u0447\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\nCREDIT_CARD_RECEIPT_TITLE=\\u0414\\u043E\\u0441\\u0442\\u044A\\u043F \\u0434\\u043E \\u0431\\u0443\\u0444\\u0435\\u0440 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\nSUBMIT_APPROVER=\\u041E\\u0434\\u043E\\u0431\\u0440\\u044F\\u0432\\u0430\\u0449\nCANCEL=\\u041E\\u0442\\u043A\\u0430\\u0437\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u0421\\u044A\\u0437\\u0434\\u0430\\u0434\\u0435\\u043D\\u043E \\u0435 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u044F\\u043D\\u0435 \\u043D\\u0430 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u041F\\u043E\\u0434\\u0440.\\u0434\\u0430\\u043D\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0445.\\u0434\\u043E\\u043A.\nPER_DIEM_RESET_DESC=\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u0447\\u0430\\u043A\\u0430\\u0449\\u0438 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438 (\\u0441 \\u043F\\u043E\\u0441\\u043B\\u0435\\u0434\\u043D\\u043E \\u043F\\u043E\\u0442\\u0432\\u044A\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435)\nRECEIPT=\\u0420\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0438 \\u0434\\u0430\\u043D\\u043D\\u0438 \\u0437\\u0430 \\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u0447\\u0438\\u043A\nRECEIPT_COLUMN_ATTACHMENTS=\\u041F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u044F\nEXPENSE_SUBMIT_DISCLAIMER=\\u041F\\u0440\\u043E\\u0447\\u0435\\u0442\\u043E\\u0445, \\u0440\\u0430\\u0437\\u0431\\u0440\\u0430\\u0445 \\u0438 \\u0441\\u0435 \\u0441\\u044A\\u0433\\u043B\\u0430\\u0441\\u044F\\u0432\\u0430\\u043C \\u0441 \\u0444\\u0438\\u0440\\u043C\\u0435\\u043D\\u0430\\u0442\\u0430 \\u043F\\u043E\\u043B\\u0438\\u0442\\u0438\\u043A\\u0430. \\u0417\\u0430\\u044F\\u0432\\u044F\\u0432\\u0430\\u043C, \\u0447\\u0435 \\u0441\\u0443\\u043C\\u0438\\u0442\\u0435 \\u0438 \\u0441\\u044A\\u043F\\u0440\\u043E\\u0432\\u043E\\u0434\\u0438\\u0442\\u0435\\u043B\\u043D\\u0438\\u0442\\u0435 \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0438 \\u0434\\u0430\\u043D\\u043D\\u0438 \\u0441\\u0430 \\u043F\\u044A\\u043B\\u043D\\u0438 \\u0438 \\u0442\\u043E\\u0447\\u043D\\u0438 \\u0434\\u043E\\u043A\\u043E\\u043B\\u043A\\u043E\\u0442\\u043E \\u043C\\u0438 \\u0435 \\u0438\\u0437\\u0432\\u0435\\u0441\\u0442\\u043D\\u043E.\nRECEIPT_WIZARD_VAT_DETAILS=\\u041F\\u043E\\u0434\\u0440.\\u0434\\u0430\\u043D\\u043D\\u0438 \\u0437\\u0430 \\u0414\\u0414\\u0421\nAbsolute=\\u0410\\u0431\\u0441\\u043E\\u043B\\u044E\\u0442\\u043D\\u0430 \\u0441\\u0442\\u043E\\u0439\\u043D\\u043E\\u0441\\u0442\nPER_DIEM_DATE=\\u0414\\u0430\\u0442\\u0430\nCREATE_TRIP_BREAK_BUTTON=\\u0421\\u044A\\u0437\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043F\\u0440\\u0435\\u043A\\u044A\\u0441\\u0432\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u041F\\u043E\\u0434\\u0440\\u0414\\u0430\\u043D\\u043D\\u0438\\u0420\\u0435\\u0437\\u0435\\u0440\\u0432\\u0430\\u0446\\u0438\\u044F\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u0412\\u0438\\u0434 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434 \\u0435 \\u0437\\u0430\\u0434\\u044A\\u043B\\u0436\\u0438\\u0442\\u0435\\u043B\\u0435\\u043D\nPER_DIEM_TITLE=\\u0414\\u043D\\u0435\\u0432\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\nSUBMIT_ERROR_MSG=\\u0420\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438\\u044F\\u0442 \\u0432\\u0438 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043D\\u0435 \\u043C\\u043E\\u0436\\u0435 \\u0434\\u0430 \\u0431\\u044A\\u0434\\u0435 \\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D \\u043F\\u043E\\u0440\\u0430\\u0434\\u0438 \\u0441\\u044A\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0432\\u0430\\u0449\\u0430 \\u0433\\u0440\\u0435\\u0448\\u043A\\u0430.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u0423\\u0447\\u0430\\u0441\\u0442\\u043D\\u0438\\u0446\\u0438\nSUBMIT_REASON_LABEL=\\u041F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0430 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u043B\\u0438\\u043A\\u0430\nSAVE_MSG=\\u0420\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438\\u044F\\u0442 \\u0432\\u0438 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0435 \\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D\nBREAKFAST=\\u0417\\u0430\\u043A\\u0443\\u0441\\u043A\\u0430\nRECEIPT_WIZARD_SPLIT_DATA=\\u0414\\u0430\\u043D\\u043D\\u0438 \\u0440\\u0430\\u0437\\u0434.\\u0440\\u0430\\u0437\\u0445.\\u0434\\u043E\\u043A.\nPER_DIEM_ACCOMODATIONS=\\u041D\\u0430\\u0441\\u0442\\u0430\\u043D\\u044F\\u0432\\u0430\\u043D\\u0435\nCREATE_PENDING_TRIP=\\u041D\\u0430\\u043B\\u0438\\u0447\\u043D\\u0438 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0438/\\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u0435 \\u0437\\u0430 \\u043F\\u044A\\u0442\\u0443\\u0432\\u0430\\u043D\\u0435\nRECEIPT_WIZARD_STEP2=\\u0421\\u0442\\u044A\\u043F\\u043A\\u0430 2\nPDF_ERROR=\\u0412\\u0430\\u0448\\u0438\\u044F\\u0442 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043D\\u0435 \\u043C\\u043E\\u0436\\u0435 \\u0434\\u0430 \\u0431\\u044A\\u0434\\u0435 \\u0435\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0440\\u0430\\u043D \\u043A\\u0430\\u0442\\u043E PDF.\nCREATE=\\u0421\\u044A\\u0437\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435\nTRAVEL_EXPENSE=\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u044A\\u0447\\u0435\\u043D \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\nCREDIT_CARD_BUTTON=\\u0414\\u043E\\u0441\\u0442\\u044A\\u043F \\u0434\\u043E \\u0431\\u0443\\u0444\\u0435\\u0440 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\nDINNER=\\u0412\\u0435\\u0447\\u0435\\u0440\\u044F\nPER_DIEM_APPLY_DESC=\\u0421\\u0438\\u043D\\u0445\\u0440\\u043E\\u043D\\u0438\\u0437\\u0438\\u0440\\u0430\\u043D\\u0435 \\u043D\\u0430 \\u0447\\u0430\\u043A\\u0430\\u0449\\u0438\\u0442\\u0435 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438 \\u0441 \\u0431\\u0435\\u043A\\u0435\\u043D\\u0434\nCOUPONS=\\u041A\\u0443\\u043F\\u043E\\u043D\\u0438 \\u0437\\u0430 \\u0445\\u0440\\u0430\\u043D\\u0430\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u0437\\u0430 \\u0434\\u043E\\u043F\\u044A\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u0435\\u043D \\u0431\\u0443\\u0442\\u043E\\u043D\nSUBMIT=\\u0418\\u0437\\u043F\\u0440\\u0430\\u0449\\u0430\\u043D\\u0435\nBREAKFAST_PK=\\u041D\\u0430\\u0442\\u0443\\u0440\\u0430\\u043B\\u043D\\u043E \\u043F\\u043B\\u0430\\u0449\\u0430\\u043D\\u0435 \\u0417\\u0430\\u043A\\u0443\\u0441\\u043A\\u0430\nPercentage=\\u041F\\u0440\\u043E\\u0446\\u0435\\u043D\\u0442\nNUMBER_FOR_SPLITTING=\\u0411\\u0440\\u043E\\u0439 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u043D\\u0438 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438 \\u0437\\u0430 \\u0441\\u044A\\u0437\\u0434\\u0430\\u0432\\u0430\\u043D\\u0435\nDINNER_PK=\\u041D\\u0430\\u0442\\u0443\\u0440\\u0430\\u043B\\u043D\\u043E \\u043F\\u043B\\u0430\\u0449\\u0430\\u043D\\u0435 \\u0412\\u0435\\u0447\\u0435\\u0440\\u044F\nUNSAVED_OBJECT_POPOVER_TEXT=\\u0422\\u043E\\u0437\\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0435\\u043D \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0438\\u043C\\u0430 \\u043D\\u0435\\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D\\u0438 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438 \\u043E\\u0442 {0}.\nappTitle=\\u041C\\u043E\\u0438\\u0442\\u0435 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438 \\u0438 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438 V2\nDRAFT_WARNING=\\u0418\\u043C\\u0430 \\u043D\\u0435\\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D\\u0430 \\u0432\\u0435\\u0440\\u0441\\u0438\\u044F \\u043D\\u0430 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u0437\\u0430 \\u0440\\u0430\\u0437\\u0445\\u043E\\u0434\\u0438\\u0442\\u0435 "{0}". \\u041C\\u043E\\u043B\\u044F, \\u0437\\u0430\\u0431\\u0435\\u043B\\u0435\\u0436\\u0435\\u0442\\u0435, \\u0447\\u0435 \\u043D\\u0435\\u0437\\u0430\\u043F\\u0430\\u0437\\u0435\\u043D\\u0438\\u0442\\u0435 \\u043F\\u0440\\u043E\\u043C\\u0435\\u043D\\u0438 \\u0449\\u0435 \\u0431\\u044A\\u0434\\u0430\\u0442 \\u0438\\u0437\\u0433\\u0443\\u0431\\u0435\\u043D\\u0438.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_cs.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dal\\u0161\\u00ED c\\u00EDl\nPD_VIEW_DEDUCTION=Zobrazit sr\\u00E1\\u017Eky\nSUBMIT_MANDATORY_ERROR_MSG=Zadejte hodnotu.\nCLOSE=Zav\\u0159\\u00EDt\nCREDIT_CARD_STEP2_TITLE=P\\u0159i\\u0159adit k nov\\u00E9mu v\\u00FDkazu v\\u00FDdaj\\u016F\nADJUST_RECEIPT_DATE=Upravte datum p\\u0159\\u00EDjmu\nIS_ITEMIZED=Rozeps\\u00E1no do polo\\u017Eek\nSUBMITTED_MSG=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdaj\\u016F byl odesl\\u00E1n va\\u0161emu schvalovateli {0}.\nRESET_DEDUCTION=Resetovat\nMERGE_RECEIPT_BUTTON=Slou\\u010Dit stvrzenky\nRECEIPT_WIZARD_CHECK_ERROR=Nepoda\\u0159ilo se rozd\\u011Blit stvrzenku. Chyb\\u011Bj\\u00ED povinn\\u00E1 pole.\nSELECT_SCHEMA=V\\u00FDb\\u011Br sch\\u00E9matu\nPERDIEM_EXPLANATION=Zru\\u0161te v\\u00FDb\\u011Br kliknut\\u00EDm na odpov\\u00EDdaj\\u00EDc\\u00ED ikonu\nSUBMIT_DISCLAIMER=Ulo\\u017Eit a odeslat\nLUNCH=Ob\\u011Bd\nCREATE_EXPENSE=Vytvo\\u0159it v\\u00FDkaz v\\u00FDdaj\\u016F\nMILEAGE=Ujet\\u00E1 vzd\\u00E1lenost\nCOST_ASSIGNMENT=P\\u0159i\\u0159azen\\u00ED n\\u00E1klad\\u016F\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategorie\nOBJECT_TYPE=Cestovn\\u00ED v\\u00FDdaje\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produkty\nLODGING_NIGHT=P\\u0159es noc\nDRAFT_WARNING_UNKNOWN=Ji\\u017E existuje n\\u00E1vrh v\\u00FDkazu v\\u00FDdaj\\u016F. Upozor\\u0148ujeme, \\u017Ee neulo\\u017Een\\u00E9 zm\\u011Bny se ztrat\\u00ED.\nSUBMITTED_MSG_NO_APPROVER=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdaj\\u016F byl odesl\\u00E1n.\nPD_ENTER_DEDUCTION=Zadat sr\\u00E1\\u017Eky\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Typ v\\u00FDdaje\nappDescription=Popis aplikace\nSPLIT_RECEIPT=Rozd\\u011Blen\\u00ED stvrzenky\nPER_DIEM_DEDUCTIONS=Stravn\\u00E9\nDRAFT_LOCKED_BY_USER=Jin\\u00FD u\\u017Eivatel upravil cestu \\u201E{0}\\u201C, ani\\u017E by ulo\\u017Eil zm\\u011Bny\\: {1} \\n\\nBudete-li pokra\\u010Dovat, zm\\u011Bny se ztrat\\u00ED.\nLUNCH_PK=Nepen\\u011B\\u017E.p\\u0159\\u00EDj.\\u2013ob\\u011Bd\nPER_DIEM_MEALS=J\\u00EDdla\nADJUST_FROM_DATE_TO_DATE=Upravte Datum od a Datum do\nSUBMIT_DATE=Datum\nCREDIT_CARD_RECEIPT_HEADER=Dostupn\\u00E9 stvrzenky\nASSIGN_BUTTON=P\\u0159i\\u0159adit\nCREDIT_CARD_STEP2_BUTTON=P\\u0159i\\u0159adit k nov\\u00E9mu v\\u00FDkazu v\\u00FDdaj\\u016F\nSCHEMA_MISSING_FIELD_ALERT=Pole Sch\\u00E9ma cesty je povinn\\u00E9\nWIZARD_SPLIT_RECEIPT=Rozd\\u011Blen\\u00ED stvrzenky\nHAS_ATTACHMENT=V\\u010Detn\\u011B p\\u0159\\u00EDloh\\: {0}\nSUBMIT_REASON=D\\u016Fvod p\\u0159ekro\\u010Den\\u00ED maxim\\u00E1ln\\u00EDho rozd\\u00EDlu\nEXPENSE_REPORT=V\\u00FDkaz v\\u00FDdaj\\u016F\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informace o stvrzence\nNO_CREDIT_CARD_RECEIPT=Nejsou dostupn\\u00E9 \\u017E\\u00E1dn\\u00E9 stvrzenky\nCREDIT_CARD_RECEIPT_TITLE=Zobrazit z\\u00E1sobu stvrzenek\nSUBMIT_APPROVER=Schvalovatel\nCANCEL=Zru\\u0161it\nWIZARD_SPLIT_RECEIPT_SUCCESS=Bylo vytvo\\u0159eno rozd\\u011Blen\\u00ED stvrzenky\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detaily stvrzenky\nPER_DIEM_RESET_DESC=Reset nevy\\u0159\\u00EDzen\\u00FDch zm\\u011Bn (do posledn\\u00EDho potvrzen\\u00ED)\nRECEIPT=Stvrzenka\nRECEIPT_WIZARD_VENDOR_DETAILS=Detaily dodavatele\nRECEIPT_COLUMN_ATTACHMENTS=P\\u0159\\u00EDlohy\nEXPENSE_SUBMIT_DISCLAIMER=\\u010Cetl(a) jsem firemn\\u00ED z\\u00E1sady, porozum\\u011Bl(a) jsem ji a dodr\\u017Euji je. Prohla\\u0161uji, \\u017Ee \\u010D\\u00E1stky a p\\u0159\\u00EDslu\\u0161n\\u00E9 detaily jsou \\u00FApln\\u00E9 a p\\u0159esn\\u00E9 podle m\\u00E9ho nejlep\\u0161\\u00EDho v\\u011Bdom\\u00ED.\nRECEIPT_WIZARD_VAT_DETAILS=Detaily DPH\nAbsolute=Absolutn\\u00ED\nPER_DIEM_DATE=Datum\nCREATE_TRIP_BREAK_BUTTON=Vytvo\\u0159it p\\u0159eru\\u0161en\\u00ED cesty\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detaily rezervace\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Typ v\\u00FDdaje je povinn\\u00FD\nPER_DIEM_TITLE=Diety\nSUBMIT_ERROR_MSG=V\\u00FDkaz v\\u00FDdaj\\u016F se nepoda\\u0159ilo ulo\\u017Eit, proto\\u017Ee do\\u0161lo k chyb\\u00E1m.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u00DA\\u010Dastn\\u00EDci\nSUBMIT_REASON_LABEL=D\\u016Fvod rozd\\u00EDlu\nSAVE_MSG=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdaj\\u016F byl ulo\\u017Een\nBREAKFAST=Sn\\u00EDdan\\u011B\nRECEIPT_WIZARD_SPLIT_DATA=Data rozd\\u011Blen\\u00ED stvrzenky\nPER_DIEM_ACCOMODATIONS=Ubytov\\u00E1n\\u00ED\nCREATE_PENDING_TRIP=Dostupn\\u00E9 \\u017E\\u00E1dosti o slu\\u017Eebn\\u00ED cestu / pl\\u00E1ny\nRECEIPT_WIZARD_STEP2=Krok 2\nPDF_ERROR=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdaj\\u016F nelze exportovat jako PDF.\nCREATE=Vytvo\\u0159it\nTRAVEL_EXPENSE=Cestovn\\u00ED v\\u00FDdaje\nCREDIT_CARD_BUTTON=Zobrazit z\\u00E1sobu stvrzenek\nDINNER=Ve\\u010De\\u0159e\nPER_DIEM_APPLY_DESC=Synchronizujte nevy\\u0159\\u00EDzen\\u00E9 zm\\u011Bny s back-endem\nCOUPONS=Stravenky\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Dal\\u0161\\u00ED informace o tla\\u010D\\u00EDtku\nSUBMIT=Odeslat\nBREAKFAST_PK=Nepen.p\\u0159\\u00EDj.\\u2013sn\\u00EDdan\\u011B\nPercentage=Procenta\nNUMBER_FOR_SPLITTING=Po\\u010Det stvrzenek k vytvo\\u0159en\\u00ED\nDINNER_PK=Nepen\\u011B\\u017E.p\\u0159\\u00EDj.\\u2013ve\\u010De\\u0159e\nUNSAVED_OBJECT_POPOVER_TEXT=Tento v\\u00FDkaz v\\u00FDdaj\\u016F obsahuje neulo\\u017Een\\u00E9 zm\\u011Bny u\\u017Eivatele {0}.\nappTitle=Moje cesta a v\\u00FDdaje V2\nDRAFT_WARNING=Existuje neulo\\u017Een\\u00E1 verze v\\u00FDkazu v\\u00FDdaj\\u016F \\u201E{0}\\u201C. Upozor\\u0148ujeme, \\u017Ee neulo\\u017Een\\u00E9 zm\\u011Bny se ztrat\\u00ED.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_de.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Zus\\u00E4tzliches Reiseziel\nPD_VIEW_DEDUCTION=Abz\\u00FCge anzeigen\nSUBMIT_MANDATORY_ERROR_MSG=Geben Sie einen Wert ein.\nCLOSE=Schlie\\u00DFen\nCREDIT_CARD_STEP2_TITLE=Einer neuen Spesenabrechnung zuordnen\nADJUST_RECEIPT_DATE=Belegdatum anpassen\nIS_ITEMIZED=Einzelnachweis\nSUBMITTED_MSG=Ihre Spesenabrechnung wird an Ihren Genehmigenden {0} gesendet.\nRESET_DEDUCTION=Zur\\u00FCcksetzen\nMERGE_RECEIPT_BUTTON=Belege zusammenf\\u00FChren\nRECEIPT_WIZARD_CHECK_ERROR=Der Beleg kann nicht aufgeteilt werden. Es fehlen Pflichtfelder.\nSELECT_SCHEMA=Schemaauswahl\nPERDIEM_EXPLANATION=Heben Sie die Markierung auf, indem Sie auf das relevante Symbol klicken.\nSUBMIT_DISCLAIMER=Sichern und senden\nLUNCH=Mittagessen\nCREATE_EXPENSE=Spesenabrechnung anlegen\nMILEAGE=Fahrtstrecke\nCOST_ASSIGNMENT=Kostenzuordnung\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategorie\nOBJECT_TYPE=Reisekosten\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produkte\nLODGING_NIGHT=\\u00DCbernachtung\nDRAFT_WARNING_UNKNOWN=Eine Entwurfsspesenabrechnung ist bereits vorhanden. Beachten Sie, dass ungesicherte \\u00C4nderungen verlorengehen.\nSUBMITTED_MSG_NO_APPROVER=Ihre Spesenabrechnung wird gesendet.\nPD_ENTER_DEDUCTION=Abz\\u00FCge eingeben\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Spesenart\nappDescription=App-Beschreibung\nSPLIT_RECEIPT=Beleg aufteilen\nPER_DIEM_DEDUCTIONS=Pauschalabz\\u00FCge\nDRAFT_LOCKED_BY_USER=Ein Benutzer hat "{0}" ohne Sichern ge\\u00E4ndert\\: {1} \\n\\nWenn Sie fortfahren, gehen die \\u00C4nderungen verloren.\nLUNCH_PK=Sachbezug Mittagess.\nPER_DIEM_MEALS=Mahlzeiten\nADJUST_FROM_DATE_TO_DATE=Startdatum und Enddatum anpassen\nSUBMIT_DATE=Datum\nCREDIT_CARD_RECEIPT_HEADER=Verf\\u00FCgbare Belege\nASSIGN_BUTTON=Zuordnen\nCREDIT_CARD_STEP2_BUTTON=Einer neuen Spesenabrechnung zuordnen\nSCHEMA_MISSING_FIELD_ALERT=Feld "Reiseschema" ist obligatorisch\nWIZARD_SPLIT_RECEIPT=Beleg aufteilen\nHAS_ATTACHMENT=Enth\\u00E4lt {0} Anlage(n)\nSUBMIT_REASON=Grund f\\u00FCr \\u00DCberschreitung der maximalen Differenz\nEXPENSE_REPORT=Spesenabrechnung\nRECEIPT_WIZARD_RECEIPT_DETAILS=Beleginformationen\nNO_CREDIT_CARD_RECEIPT=Keine Belege verf\\u00FCgbar\nCREDIT_CARD_RECEIPT_TITLE=Auf Belegpuffer zugreifen\nSUBMIT_APPROVER=Genehmigender\nCANCEL=Abbrechen\nWIZARD_SPLIT_RECEIPT_SUCCESS=Aufgeteilten Beleg angelegt\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Belegdetails\nPER_DIEM_RESET_DESC=Setzen Sie Ihre ausstehenden \\u00C4nderungen zur\\u00FCck (auf Ihre letzte Best\\u00E4tigung)\nRECEIPT=Beleg\nRECEIPT_WIZARD_VENDOR_DETAILS=Lieferantendetails\nRECEIPT_COLUMN_ATTACHMENTS=Anlagen\nEXPENSE_SUBMIT_DISCLAIMER=Ich habe die Unternehmensgrunds\\u00E4tze gelesen, verstanden und diese eingehalten. Ich erkl\\u00E4re, dass die Betr\\u00E4ge und zugeh\\u00F6rigen Belege nach meinem besten Wissen vollst\\u00E4ndig und korrekt sind.\nRECEIPT_WIZARD_VAT_DETAILS=MwSt.-Details\nAbsolute=Absolut\nPER_DIEM_DATE=Datum\nCREATE_TRIP_BREAK_BUTTON=Reiseunterbrechung anlegen\nRECEIPT_WIZARD_FLIGHT_DETAILS=Buchungsdetails\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Spesenart ist obligatorisch\nPER_DIEM_TITLE=Pauschale\nSUBMIT_ERROR_MSG=Ihre Spesenabrechnung konnte aufgrund eines vorhandenen Fehlers nicht gesichert werden.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Teilnehmer\nSUBMIT_REASON_LABEL=Grund f\\u00FCr Differenz\nSAVE_MSG=Ihre Spesenabrechnung wurde gesichert\nBREAKFAST=Fr\\u00FChst\\u00FCck\nRECEIPT_WIZARD_SPLIT_DATA=Belegaufteilungsdat.\nPER_DIEM_ACCOMODATIONS=Unterkunft\nCREATE_PENDING_TRIP=Verf\\u00FCgbare Reiseantr\\u00E4ge/-pl\\u00E4ne\nRECEIPT_WIZARD_STEP2=Schritt 2\nPDF_ERROR=Ihre Spesenabrechnung kann nicht als PDF exportiert werden.\nCREATE=Anlegen\nTRAVEL_EXPENSE=Reisekosten\nCREDIT_CARD_BUTTON=Auf Belegpuffer zugreifen\nDINNER=Abendessen\nPER_DIEM_APPLY_DESC=Synchronisieren Sie Ihre ausstehenden \\u00C4nderungen mit dem Backend\nCOUPONS=Essensbons\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Zus\\u00E4tzliche Schaltfl\\u00E4cheninformation\nSUBMIT=Einreichen\nBREAKFAST_PK=Sachbezug Fr\\u00FChst\\u00FCck\nPercentage=Prozentsatz\nNUMBER_FOR_SPLITTING=Anzahl an anzulegenden Belegen\nDINNER_PK=Sachbezug Abendessen\nUNSAVED_OBJECT_POPOVER_TEXT=Diese Spesenabrechnung hat \\u00C4nderungen von {0}, die nicht gesichert sind.\nappTitle=Meine Spesenabrechnungen V2\nDRAFT_WARNING=Es ist eine ungesicherte Version der Spesenabrechnung "{0}" vorhanden. Beachten Sie, dass ungesicherte \\u00C4nderungen verloren gehen.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_en.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Additional Destination\nPD_VIEW_DEDUCTION=View Deductions\nSUBMIT_MANDATORY_ERROR_MSG=Enter a value.\nCLOSE=Close\nCREDIT_CARD_STEP2_TITLE=Assign to a new Expense Report\nADJUST_RECEIPT_DATE=Adjust Receipt Date\nIS_ITEMIZED=Itemized\nSUBMITTED_MSG=Your expense report is submitted to your approver {0}.\nRESET_DEDUCTION=Reset\nMERGE_RECEIPT_BUTTON=Merge Receipts\nRECEIPT_WIZARD_CHECK_ERROR=Unable to split the receipt. Mandatory fields are missing.\nSELECT_SCHEMA=Schema Selection\nPERDIEM_EXPLANATION=Deselect by clicking on the relevant icon\nSUBMIT_DISCLAIMER=Save & Submit\nLUNCH=Lunch\nCREATE_EXPENSE=Create Expense Report\nMILEAGE=Mileage\nCOST_ASSIGNMENT=Cost Assignment\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Category\nOBJECT_TYPE=Travel Expense\nRECEIPT_WIZARD_STEP4_PRODUCTS=Products\nLODGING_NIGHT=Overnight\nDRAFT_WARNING_UNKNOWN=A draft expense report already exists. Please note that unsaved changes will be lost.\nSUBMITTED_MSG_NO_APPROVER=Your expense report is submitted.\nPD_ENTER_DEDUCTION=Enter Deductions\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Expense Type\nappDescription=App Description\nSPLIT_RECEIPT=Split Receipt\nPER_DIEM_DEDUCTIONS=Per-Diem Deductions\nDRAFT_LOCKED_BY_USER=Another user edited trip "{0}" without saving the changes\\: {1} \\n\\nChanges will be lost if you continue.\nLUNCH_PK=Payment in Kind Lunch\nPER_DIEM_MEALS=Meals\nADJUST_FROM_DATE_TO_DATE=Adjust From Date and To Date\nSUBMIT_DATE=Date\nCREDIT_CARD_RECEIPT_HEADER=Available Receipts\nASSIGN_BUTTON=Assign\nCREDIT_CARD_STEP2_BUTTON=Assign to a new Expense Report\nSCHEMA_MISSING_FIELD_ALERT=Trip schema field is mandatory\nWIZARD_SPLIT_RECEIPT=Split Receipt\nHAS_ATTACHMENT=Includes {0} Attachment(s)\nSUBMIT_REASON=Reason for exceeding maximum difference\nEXPENSE_REPORT=Expense Report\nRECEIPT_WIZARD_RECEIPT_DETAILS=Receipt Information\nNO_CREDIT_CARD_RECEIPT=No receipts available\nCREDIT_CARD_RECEIPT_TITLE=Access Receipt Buffer\nSUBMIT_APPROVER=Approver\nCANCEL=Cancel\nWIZARD_SPLIT_RECEIPT_SUCCESS=Split receipt created\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Receipt Details\nPER_DIEM_RESET_DESC=Reset pending changes (to your last confirmation)\nRECEIPT=Receipt\nRECEIPT_WIZARD_VENDOR_DETAILS=Vendor Details\nRECEIPT_COLUMN_ATTACHMENTS=Attachments\nEXPENSE_SUBMIT_DISCLAIMER=I have read, understood, and complied with the company\'s policy. I declare amounts and supporting details are complete and accurate to the best of my knowledge.\nRECEIPT_WIZARD_VAT_DETAILS=VAT Details\nAbsolute=Absolute\nPER_DIEM_DATE=Date\nCREATE_TRIP_BREAK_BUTTON=Create Trip Break\nRECEIPT_WIZARD_FLIGHT_DETAILS=Booking Details\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Expense type is mandatory\nPER_DIEM_TITLE=Per Diem\nSUBMIT_ERROR_MSG=Your Expense Report could not be saved because an error exists.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participants\nSUBMIT_REASON_LABEL=Reason for difference\nSAVE_MSG=Your expense report has been saved\nBREAKFAST=Breakfast\nRECEIPT_WIZARD_SPLIT_DATA=Receipt Split Data\nPER_DIEM_ACCOMODATIONS=Accommodation\nCREATE_PENDING_TRIP=Available Travel Requests/Plans\nRECEIPT_WIZARD_STEP2=Step 2\nPDF_ERROR=Your expense report cannot be exported as PDF.\nCREATE=Create\nTRAVEL_EXPENSE=Travel Expense\nCREDIT_CARD_BUTTON=Access Receipt Buffer\nDINNER=Dinner\nPER_DIEM_APPLY_DESC=Sync your pending changes with the back end\nCOUPONS=Meal Coupons\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Additional Button Information\nSUBMIT=Submit\nBREAKFAST_PK=Payment in Kind Breakfast\nPercentage=Percentage\nNUMBER_FOR_SPLITTING=Number of Receipts to Create\nDINNER_PK=Payment in Kind Dinner\nUNSAVED_OBJECT_POPOVER_TEXT=This expense report has unsaved changes by {0}.\nappTitle=My Travel and Expenses V2\nDRAFT_WARNING=There is an unsaved version of expense report "{0}". Please note that unsaved changes will be lost.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_en_US_sappsd.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=[[[\\u0100\\u018C\\u018C\\u012F\\u0163\\u012F\\u014F\\u014B\\u0105\\u013A \\u010E\\u0113\\u015F\\u0163\\u012F\\u014B\\u0105\\u0163\\u012F\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPD_VIEW_DEDUCTION=[[[\\u01B2\\u012F\\u0113\\u0175 \\u018C\\u0113\\u018C\\u0171\\u010B\\u0163\\u012F\\u014F\\u014B\\u015F\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_MANDATORY_ERROR_MSG=[[[\\u0114\\u014B\\u0163\\u0113\\u0157 \\u0105 \\u028B\\u0105\\u013A\\u0171\\u0113.\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCLOSE=[[[\\u0108\\u013A\\u014F\\u015F\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREDIT_CARD_STEP2_TITLE=[[[\\u0100\\u015F\\u015F\\u012F\\u011F\\u014B \\u0163\\u014F \\u0105 \\u014B\\u0113\\u0175 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nADJUST_RECEIPT_DATE=[[[\\u0100\\u018C\\u0135\\u0171\\u015F\\u0163 \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u010E\\u0105\\u0163\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nIS_ITEMIZED=[[[\\u012C\\u0163\\u0113\\u0271\\u012F\\u017E\\u0113\\u018C\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMITTED_MSG=[[[\\u0176\\u014F\\u0171\\u0157 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u0125\\u0105\\u015F \\u0183\\u0113\\u0113\\u014B \\u015F\\u0171\\u0183\\u0271\\u012F\\u0163\\u0163\\u0113\\u018C \\u0163\\u014F \\u0177\\u014F\\u0171\\u0157 \\u0105\\u03C1\\u03C1\\u0157\\u014F\\u028B\\u0113\\u0157 {0}]]]\nRESET_DEDUCTION=[[[\\u0158\\u0113\\u015F\\u0113\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nMERGE_RECEIPT_BUTTON=[[[\\u039C\\u0113\\u0157\\u011F\\u0113 \\u0157\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_CHECK_ERROR=[[[\\u0108\\u014F\\u0171\\u013A\\u018C \\u014B\\u014F\\u0163 \\u015F\\u03C1\\u013A\\u012F\\u0163 \\u0163\\u0125\\u0113 \\u0157\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163. \\u039C\\u0105\\u014B\\u018C\\u0105\\u0163\\u014F\\u0157\\u0177 \\u0192\\u012F\\u0113\\u013A\\u018C\\u015F \\u0105\\u0157\\u0113 \\u0271\\u012F\\u015F\\u015F\\u012F\\u014B\\u011F.\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSELECT_SCHEMA=[[[\\u015C\\u010B\\u0125\\u0113\\u0271\\u0105 \\u015F\\u0113\\u013A\\u0113\\u010B\\u0163\\u012F\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPERDIEM_EXPLANATION=[[[\\u010E\\u0113\\u015F\\u0113\\u013A\\u0113\\u010B\\u0163 \\u0183\\u0177 \\u010B\\u013A\\u012F\\u010B\\u0137\\u012F\\u014B\\u011F \\u014F\\u014B \\u0163\\u0125\\u0113 \\u0157\\u0113\\u015F\\u03C1\\u0113\\u010B\\u0163\\u012F\\u028B\\u0113 \\u012F\\u010B\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_DISCLAIMER=[[[\\u015C\\u0105\\u028B\\u0113 & \\u015C\\u0171\\u0183\\u0271\\u012F\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nLUNCH=[[[\\u013B\\u0171\\u014B\\u010B\\u0125\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREATE_EXPENSE=[[[\\u0108\\u0157\\u0113\\u0105\\u0163\\u0113 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nMILEAGE=[[[\\u039C\\u012F\\u013A\\u0113\\u0105\\u011F\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCOST_ASSIGNMENT=[[[\\u0108\\u014F\\u015F\\u0163 \\u0100\\u015F\\u015F\\u012F\\u011F\\u014B\\u0271\\u0113\\u014B\\u0163\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_COLUMN_EXPENSE_CATEGORY=[[[\\u0108\\u0105\\u0163\\u0113\\u011F\\u014F\\u0157\\u0177\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nOBJECT_TYPE=[[[\\u0162\\u0157\\u0105\\u028B\\u0113\\u013A \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_STEP4_PRODUCTS=[[[\\u01A4\\u0157\\u014F\\u018C\\u0171\\u010B\\u0163\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nLODGING_NIGHT=[[[\\u014E\\u028B\\u0113\\u0157\\u014B\\u012F\\u011F\\u0125\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nDRAFT_WARNING_UNKNOWN=[[[\\u0100 \\u018C\\u0157\\u0105\\u0192\\u0163 \\u0113\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0157\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u0105\\u013A\\u0157\\u0113\\u0105\\u018C\\u0177 \\u0113\\u03C7\\u012F\\u015F\\u0163\\u015F. \\u01A4\\u013A\\u0113\\u0105\\u015F\\u0113 \\u014B\\u014F\\u0163\\u0113 \\u0171\\u014B\\u015F\\u0105\\u028B\\u0113\\u018C \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F \\u0175\\u012F\\u013A\\u013A \\u0183\\u0113 \\u013A\\u014F\\u015F\\u0163.\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMITTED_MSG_NO_APPROVER=[[[\\u0176\\u014F\\u0171\\u0157 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u0125\\u0105\\u015F \\u0183\\u0113\\u0113\\u014B \\u015F\\u0171\\u0183\\u0271\\u012F\\u0163\\u0163\\u0113\\u018C\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPD_ENTER_DEDUCTION=[[[\\u0114\\u014B\\u0163\\u0113\\u0157 \\u018C\\u0113\\u018C\\u0171\\u010B\\u0163\\u012F\\u014F\\u014B\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=[[[\\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0162\\u0177\\u03C1\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nappDescription=[[[\\u0100\\u03C1\\u03C1 \\u010E\\u0113\\u015F\\u010B\\u0157\\u012F\\u03C1\\u0163\\u012F\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219]]]\nSPLIT_RECEIPT=[[[\\u015C\\u013A\\u012F\\u03C1\\u0163 \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPER_DIEM_DEDUCTIONS=[[[\\u01A4\\u0113\\u0157-\\u010E\\u012F\\u0113\\u0271 \\u018C\\u0113\\u018C\\u0171\\u010B\\u0163\\u012F\\u014F\\u014B\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nDRAFT_LOCKED_BY_USER=[[[\\u0100\\u014B\\u014F\\u0163\\u0125\\u0113\\u0157 \\u0171\\u015F\\u0113\\u0157 \\u0113\\u018C\\u012F\\u0163\\u0113\\u018C \\u0163\\u0157\\u012F\\u03C1 \\u014B\\u0171\\u0271\\u0183\\u0113\\u0157 "{0}" \\u0175\\u012F\\u0163\\u0125\\u014F\\u0171\\u0163 \\u015F\\u0105\\u028B\\u012F\\u014B\\u011F \\u0163\\u0125\\u0113 \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F\\: {1} \\n\\n\\u012C\\u0192 \\u0177\\u014F\\u0171 \\u03C1\\u0171\\u0157\\u015F\\u0171\\u0113, \\u0105\\u014B\\u0177 \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F \\u0175\\u012F\\u013A\\u013A \\u0183\\u0113 \\u013A\\u014F\\u015F\\u0163.]]]\nLUNCH_PK=[[[\\!\\!\\!\\u01A4\\u0105\\u0177\\u0271\\u0113\\u014B\\u0163 \\u012F\\u014B \\u0136\\u012F\\u014B\\u018C \\u013B\\u0171\\u014B\\u010B\\u0125]]]\nPER_DIEM_MEALS=[[[\\u039C\\u0113\\u0105\\u013A\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nADJUST_FROM_DATE_TO_DATE=[[[\\u0100\\u018C\\u0135\\u0171\\u015F\\u0163 \\u0191\\u0157\\u014F\\u0271 \\u010E\\u0105\\u0163\\u0113 \\u0105\\u014B\\u018C \\u0162\\u014F \\u010E\\u0105\\u0163\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_DATE=[[[\\u010E\\u0105\\u0163\\u0113]]]\nCREDIT_CARD_RECEIPT_HEADER=[[[\\u0100\\u028B\\u0105\\u012F\\u013A\\u0105\\u0183\\u013A\\u0113 \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nASSIGN_BUTTON=[[[\\u0100\\u015F\\u015F\\u012F\\u011F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREDIT_CARD_STEP2_BUTTON=[[[\\u0100\\u015F\\u015F\\u012F\\u011F\\u014B \\u0163\\u014F \\u0105 \\u014B\\u0113\\u0175 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSCHEMA_MISSING_FIELD_ALERT=[[[\\u0162\\u0157\\u012F\\u03C1 \\u015C\\u010B\\u0125\\u0113\\u0271\\u0105 \\u0192\\u012F\\u0113\\u013A\\u018C \\u012F\\u015F \\u0271\\u0105\\u014B\\u018C\\u0105\\u0163\\u014F\\u0157\\u0177\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nWIZARD_SPLIT_RECEIPT=[[[\\u015C\\u03C1\\u013A\\u012F\\u0163 \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nHAS_ATTACHMENT=[[[\\u012C\\u014B\\u010B\\u013A\\u0171\\u018C\\u0113\\u015F {0} \\u0105\\u0163\\u0163\\u0105\\u010B\\u0125\\u0271\\u0113\\u014B\\u0163(\\u015F)]]]\nSUBMIT_REASON=[[[\\u0158\\u0113\\u0105\\u015F\\u014F\\u014B \\u0192\\u014F\\u0157 \\u0114\\u03C7\\u010B\\u0113\\u0113\\u018C\\u012F\\u014B\\u011F \\u039C\\u0105\\u03C7\\u012F\\u0271\\u0171\\u0271 \\u010E\\u012F\\u0192\\u0192\\u0113\\u0157\\u0113\\u014B\\u010B\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nEXPENSE_REPORT=[[[\\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_RECEIPT_DETAILS=[[[\\!\\!\\!\\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u012C\\u014B\\u0192\\u014F\\u0157\\u0271\\u0105\\u0163\\u012F\\u014F\\u014B]]]\nNO_CREDIT_CARD_RECEIPT=[[[\\u0143\\u014F \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u015F \\u0105\\u028B\\u0105\\u012F\\u013A\\u0105\\u0183\\u013A\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREDIT_CARD_RECEIPT_TITLE=[[[\\u0100\\u010B\\u010B\\u0113\\u015F\\u015F \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u0181\\u0171\\u0192\\u0192\\u0113\\u0157\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_APPROVER=[[[\\u0100\\u03C1\\u03C1\\u0157\\u014F\\u028B\\u0113\\u0157\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCANCEL=[[[\\u0108\\u0105\\u014B\\u010B\\u0113\\u013A\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nWIZARD_SPLIT_RECEIPT_SUCCESS=[[[\\u015C\\u03C1\\u013A\\u012F\\u0163 \\u0157\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u010B\\u0157\\u0113\\u0105\\u0163\\u0113\\u018C\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=[[[\\!\\!\\!\\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u018C\\u0113\\u0163\\u0105\\u012F\\u013A\\u015F]]]\nPER_DIEM_RESET_DESC=[[[\\u0158\\u0113\\u015F\\u0113\\u0163 \\u0163\\u0125\\u0113 \\u03C1\\u0113\\u014B\\u018C\\u012F\\u014B\\u011F \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F (\\u0163\\u012F\\u013A\\u013A \\u0177\\u014F\\u0171\\u0157 \\u013A\\u0105\\u015F\\u0163 \\u0105\\u03C1\\u03C1\\u013A\\u0177)\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT=[[[\\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_VENDOR_DETAILS=[[[\\u01B2\\u0113\\u014B\\u018C\\u014F\\u0157 \\u018C\\u0113\\u0163\\u0105\\u012F\\u013A\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_COLUMN_ATTACHMENTS=[[[\\u0100\\u0163\\u0163\\u0105\\u010B\\u0125\\u0271\\u0113\\u014B\\u0163\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nEXPENSE_SUBMIT_DISCLAIMER=[[[\\u012C \\u0125\\u0105\\u028B\\u0113 \\u0157\\u0113\\u0105\\u018C, \\u0171\\u014B\\u018C\\u0113\\u0157\\u015F\\u0163\\u014F\\u014F\\u018C, \\u0105\\u014B\\u018C \\u010B\\u014F\\u0271\\u03C1\\u013A\\u012F\\u0113\\u018C \\u0175\\u012F\\u0163\\u0125 \\u0163\\u0125\\u0113 \\u010B\\u014F\\u0271\\u03C1\\u0105\\u014B\\u0177\'\\u015F \\u03C1\\u014F\\u013A\\u012F\\u010B\\u0177. \\u012C \\u018C\\u0113\\u010B\\u013A\\u0105\\u0157\\u0113 \\u0105\\u0271\\u014F\\u0171\\u014B\\u0163\\u015F \\u0105\\u014B\\u018C \\u015F\\u0171\\u03C1\\u03C1\\u014F\\u0157\\u0163\\u012F\\u014B\\u011F \\u018C\\u0113\\u0163\\u0105\\u012F\\u013A\\u015F \\u0105\\u0157\\u0113 \\u010B\\u014F\\u0271\\u03C1\\u013A\\u0113\\u0163\\u0113 \\u0105\\u014B\\u018C \\u0105\\u010B\\u010B\\u0171\\u0157\\u0105\\u0163\\u0113 \\u0163\\u014F \\u0163\\u0125\\u0113 \\u0183\\u0113\\u015F\\u0163 \\u014F\\u0192 \\u0271\\u0177 \\u0137\\u014B\\u014F\\u0175\\u013A\\u0113\\u018C\\u011F\\u0113.\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_VAT_DETAILS=[[[\\u01B2\\u0100\\u0162 \\u010E\\u0113\\u0163\\u0105\\u012F\\u013A\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nAbsolute=[[[\\u0100\\u0183\\u015F\\u014F\\u013A\\u0171\\u0163\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPER_DIEM_DATE=[[[\\u010E\\u0105\\u0163\\u0113]]]\nCREATE_TRIP_BREAK_BUTTON=[[[\\u0108\\u0157\\u0113\\u0105\\u0163\\u0113 \\u0162\\u0157\\u012F\\u03C1 \\u0181\\u0157\\u0113\\u0105\\u0137\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_FLIGHT_DETAILS=[[[\\!\\!\\!\\u0181\\u014F\\u014F\\u0137\\u012F\\u014B\\u011F \\u018C\\u0113\\u0163\\u0105\\u012F\\u013A\\u015F]]]\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=[[[\\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0163\\u0177\\u03C1\\u0113 \\u012F\\u015F \\u0271\\u0105\\u014B\\u018C\\u0105\\u0163\\u014F\\u0157\\u0177\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPER_DIEM_TITLE=[[[\\u01A4\\u0113\\u0157-\\u010E\\u012F\\u0113\\u0271\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_ERROR_MSG=[[[\\u0176\\u014F\\u0171\\u0157 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u010B\\u014F\\u0171\\u013A\\u018C \\u014B\\u014F\\u0163 \\u0183\\u0113 \\u015F\\u0105\\u028B\\u0113\\u018C \\u0183\\u0113\\u010B\\u0105\\u0171\\u015F\\u0113 \\u0105\\u014B \\u0113\\u0157\\u0157\\u014F\\u0157 \\u0113\\u03C7\\u012F\\u015F\\u0163\\u015F.\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_STEP3_ATTENDEES=[[[\\u01A4\\u0105\\u0157\\u0163\\u012F\\u010B\\u012F\\u03C1\\u0105\\u014B\\u0163\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT_REASON_LABEL=[[[\\u0158\\u0113\\u0105\\u015F\\u014F\\u014B \\u0192\\u014F\\u0157 \\u010E\\u012F\\u0192\\u0192\\u0113\\u0157\\u0113\\u014B\\u010B\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSAVE_MSG=[[[\\u0176\\u014F\\u0171\\u0157 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u0125\\u0105\\u015F \\u0183\\u0113\\u0113\\u014B \\u015F\\u0105\\u028B\\u0113\\u018C\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nBREAKFAST=[[[\\u0181\\u0157\\u0113\\u0105\\u0137\\u0192\\u0105\\u015F\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_SPLIT_DATA=[[[\\!\\!\\!\\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u015C\\u03C1\\u013A\\u012F\\u0163 \\u010E\\u0105\\u0163\\u0105]]]\nPER_DIEM_ACCOMODATIONS=[[[\\u0100\\u010B\\u010B\\u014F\\u0271\\u014F\\u018C\\u0105\\u0163\\u012F\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREATE_PENDING_TRIP=[[[\\u0100\\u028B\\u0105\\u012F\\u013A\\u0105\\u0183\\u013A\\u0113 \\u0162\\u0157\\u0105\\u028B\\u0113\\u013A \\u0158\\u0113\\u01A3\\u0171\\u0113\\u015F\\u0163\\u015F / \\u01A4\\u013A\\u0105\\u014B\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_WIZARD_STEP2=[[[\\u015C\\u0163\\u0113\\u03C1 2\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPDF_ERROR=[[[\\u0176\\u014F\\u0171\\u0157 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u010B\\u0105\\u014B\\u014B\\u014F\\u0163 \\u0183\\u0113 \\u0113\\u03C7\\u03C1\\u014F\\u0157\\u0163\\u0113\\u018C \\u0105\\u015F \\u01A4\\u010E\\u0191.\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREATE=[[[\\u0108\\u0157\\u0113\\u0105\\u0163\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nTRAVEL_EXPENSE=[[[\\u0162\\u0157\\u0105\\u028B\\u0113\\u013A \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCREDIT_CARD_BUTTON=[[[\\u0100\\u010B\\u010B\\u0113\\u015F\\u015F \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163 \\u0181\\u0171\\u0192\\u0192\\u0113\\u0157\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nDINNER=[[[\\u010E\\u012F\\u014B\\u014B\\u0113\\u0157\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nPER_DIEM_APPLY_DESC=[[[\\u015C\\u0177\\u014B\\u010B \\u0177\\u014F\\u0171\\u0157 \\u03C1\\u0113\\u014B\\u018C\\u012F\\u014B\\u011F \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F \\u0175\\u012F\\u0163\\u0125 \\u0163\\u0125\\u0113 \\u0183\\u0105\\u010B\\u0137\\u0113\\u014B\\u018C\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nCOUPONS=[[[\\u039C\\u0113\\u0105\\u013A \\u0108\\u014F\\u0171\\u03C1\\u014F\\u014B\\u015F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=[[[\\u0100\\u018C\\u018C\\u012F\\u0163\\u012F\\u014F\\u014B\\u0105\\u013A \\u0183\\u0171\\u0163\\u0163\\u014F\\u014B \\u012F\\u014B\\u0192\\u014F\\u0157\\u0271\\u0105\\u0163\\u012F\\u014F\\u014B\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nSUBMIT=[[[\\u015C\\u0171\\u0183\\u0271\\u012F\\u0163\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nBREAKFAST_PK=[[[\\!\\!\\!\\u01A4\\u0105\\u0177\\u0271\\u0113\\u014B\\u0163 \\u012F\\u014B \\u0136\\u012F\\u014B\\u018C \\u0181\\u0157\\u0113\\u0105\\u0137\\u0192\\u0105\\u015F\\u0163]]]\nPercentage=[[[\\u01A4\\u0113\\u0157\\u010B\\u0113\\u014B\\u0163\\u0105\\u011F\\u0113\\u2219\\u2219\\u2219\\u2219]]]\nNUMBER_FOR_SPLITTING=[[[\\u0143\\u0171\\u0271\\u0183\\u0113\\u0157 \\u014F\\u0192 \\u0158\\u0113\\u010B\\u0113\\u012F\\u03C1\\u0163\\u015F \\u0163\\u014F \\u0108\\u0157\\u0113\\u0105\\u0163\\u0113\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nDINNER_PK=[[[\\!\\!\\!\\u01A4\\u0105\\u0177\\u0271\\u0113\\u014B\\u0163 \\u012F\\u014B \\u0136\\u012F\\u014B\\u018C \\u010E\\u012F\\u014B\\u014B\\u0113\\u0157]]]\nUNSAVED_OBJECT_POPOVER_TEXT=[[[\\u0162\\u0125\\u012F\\u015F \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 \\u0125\\u0105\\u015F \\u0171\\u014B\\u015F\\u0105\\u028B\\u0113\\u018C \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F \\u0183\\u0177 {0}.]]]\nappTitle=[[[\\u039C\\u0177 \\u0162\\u0157\\u0105\\u028B\\u0113\\u013A \\u0105\\u014B\\u018C \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113\\u015F \\u01B22\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\nDRAFT_WARNING=[[[\\u0162\\u0125\\u0113\\u0157\\u0113 \\u012F\\u015F \\u0105\\u014B \\u0171\\u014B\\u015F\\u0105\\u028B\\u0113\\u018C \\u028B\\u0113\\u0157\\u015F\\u012F\\u014F\\u014B \\u014F\\u0192 \\u0114\\u03C7\\u03C1\\u0113\\u014B\\u015F\\u0113 \\u0158\\u0113\\u03C1\\u014F\\u0157\\u0163 "{0}". \\u01A4\\u013A\\u0113\\u0105\\u015F\\u0113 \\u0183\\u0113 \\u0105\\u0175\\u0105\\u0157\\u0113 \\u0163\\u0125\\u0105\\u0163 \\u0171\\u015F\\u0105\\u028B\\u0113\\u018C \\u010B\\u0125\\u0105\\u014B\\u011F\\u0113\\u015F \\u0175\\u012F\\u013A\\u013A \\u0183\\u0113 \\u013A\\u014F\\u015F\\u0163.]]]\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_en_US_saptrc.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=yP1Kc/+IxRuBhObEN5LVZw_Additional Destination\nPD_VIEW_DEDUCTION=ZQBt3f6w6GI6BsKj2kwxCg_View deductions\nSUBMIT_MANDATORY_ERROR_MSG=yVh1YTMLWC0TVNl8+MEhzg_Enter a value.\nCLOSE=E7vDPRAANtPmV2szT11X3w_Close\nCREDIT_CARD_STEP2_TITLE=BAXOayQ0coYwxnEfZslicQ_Assign to a new Expense Report\nADJUST_RECEIPT_DATE=8lA9KBppHtbn2vTabC9XJA_Adjust Receipt Date\nIS_ITEMIZED=9snIFCBPJpR0IkPAAg4NCA_Itemized\nSUBMITTED_MSG=FKNcpckRKsYMK5QXhGcjAg_Your Expense Report has been submitted to your approver {0}\nRESET_DEDUCTION=3DlWTfufVagMk/fT7jdFsQ_Reset\nMERGE_RECEIPT_BUTTON=ofoQkcBEat4IfsQwcjlTzA_Merge receipts\nRECEIPT_WIZARD_CHECK_ERROR=boCfCBd71UX24FDQ+lX1hg_Could not split the receipt. Mandatory fields are missing.\nSELECT_SCHEMA=xezVLrG41Zm5z/e/R5n+ag_Schema selection\nPERDIEM_EXPLANATION=QXjQepGRA3z9WqmVyYdyEA_Deselect by clicking on the respective icon\nSUBMIT_DISCLAIMER=rOTEdNYt/iyYGT6QtHYG9A_Save & Submit\nLUNCH=ZZVRkhk16CHs0jKjBKwHQA_Lunch\nCREATE_EXPENSE=A+jxjJ8AkoqeoELBWqQVsA_Create Expense Report\nMILEAGE=e36QqYv6gZnQwFVQ4fpa3g_Mileage\nCOST_ASSIGNMENT=tiWjLqanhJgrF4quxfLu4w_Cost Assignment\nRECEIPT_COLUMN_EXPENSE_CATEGORY=M301jb6Ry9Nd+oy0qHwjxg_Category\nOBJECT_TYPE=XfRTUWu5sPnbJu0tJMao4A_Travel Expense\nRECEIPT_WIZARD_STEP4_PRODUCTS=Hr5n2+akP3ZrQZsZQb4vQA_Products\nLODGING_NIGHT=AZ/sStfLijKxcUQPvE+r6Q_Overnight\nDRAFT_WARNING_UNKNOWN=FXwf6G+UhdaxfKya7feJow_A draft expense report already exists. Please note unsaved changes will be lost.\nSUBMITTED_MSG_NO_APPROVER=RhU+zmoQyqah0HpiCldKdQ_Your Expense Report has been submitted\nPD_ENTER_DEDUCTION=yLnZ/2HKf4Bdyg6t2RaZqQ_Enter deductions\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=n8q7uBESnK8z6QSFOEFRkA_Expense Type\nappDescription=pvYwHOJmw8O8rVZ9c8EadA_App Description\nSPLIT_RECEIPT=wgscCt7slvoI4kqK6Vy7dA_Slipt Receipt\nPER_DIEM_DEDUCTIONS=htwl3MqrHFrwDyZw5bIvTA_Per-Diem deductions\nDRAFT_LOCKED_BY_USER=Z7MEiaQhqPHKalTleWsgKA_Another user edited trip number "{0}" without saving the changes\\: {1} \\n\\nIf you pursue, any changes will be lost.\nLUNCH_PK=GACRHLo70yskSdF1RGVIvw_Payment in Kind Lunch\nPER_DIEM_MEALS=LMTdZ2CvbuRIuwlKyCHQdQ_Meals\nADJUST_FROM_DATE_TO_DATE=7DTfnAXJcNSRhlvb3T44Gw_Adjust From Date and To Date\nSUBMIT_DATE=6QMR+vY6qVXgE/5C+nhKMA_Date\nCREDIT_CARD_RECEIPT_HEADER=Z9N7rI/YAOC8eJT5fzv1ow_Available Receipts\nASSIGN_BUTTON=vS3/eXHsj4lnUrvYib2Sjw_Assign\nCREDIT_CARD_STEP2_BUTTON=2fJCOlXSjrhFzSy4LfemCA_Assign to a new Expense Report\nSCHEMA_MISSING_FIELD_ALERT=6Ev44EzIh1N+eI0af4rS6A_Trip Schema field is mandatory\nWIZARD_SPLIT_RECEIPT=nR0OyyR8pnOePE0s7D/jQQ_Split Receipt\nHAS_ATTACHMENT=buRJGP7f0CH66yu/Svo4Zg_Includes {0} attachment(s)\nSUBMIT_REASON=FA31nGCrbbotTaPwTLUriQ_Reason for Exceeding Maximum Difference\nEXPENSE_REPORT=SQB60Lvqr+N4fHJ0Xu5Wmg_Expense Report\nRECEIPT_WIZARD_RECEIPT_DETAILS=+4eeS4kC0QqHBP5oPPRPXQ_Receipt Information\nNO_CREDIT_CARD_RECEIPT=+4UQ9p1dt/O3t/OEOOgZ2A_No Receipts available\nCREDIT_CARD_RECEIPT_TITLE=+sxCyWD6I/AulWG3IAyDQA_Access Receipt Buffer\nSUBMIT_APPROVER=Bde6ys1ltWYZOlGxzXprLw_Approver\nCANCEL=OhU/ORdivZa96ehkNmgLEQ_Cancel\nWIZARD_SPLIT_RECEIPT_SUCCESS=siVxNQMrWz7hSVqu4aVQPg_Split receipt created\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=BrTVSoXT+owgueTV9mD4+g_Receipt details\nPER_DIEM_RESET_DESC=fdUcb3wMS9PBZ8Lst4evuw_Reset the pending changes (till your last apply)\nRECEIPT=4m69q7t4kPQZDmtq1YVMAQ_Receipt\nRECEIPT_WIZARD_VENDOR_DETAILS=g13RHWzfNnT8ID9NipF9Mg_Vendor details\nRECEIPT_COLUMN_ATTACHMENTS=ZpY3qtTEC4WbLfi40iElhQ_Attachments\nEXPENSE_SUBMIT_DISCLAIMER=aGB+HFa2Wl/Z30qyR7JW4A_I have read, understood, and complied with the company\'s policy. I declare amounts and supporting details are complete and accurate to the best of my knowledge.\nRECEIPT_WIZARD_VAT_DETAILS=CpILtmxIJWm/DAdsJ0Bgtw_VAT Details\nAbsolute=OML6d3dPbuPTzJ+nVP3c3w_Absolute\nPER_DIEM_DATE=+gF1nMJ0oRVJzH5+BQOOMw_Date\nCREATE_TRIP_BREAK_BUTTON=YzVzz2YQmSD+z/PRadhLSg_Create Trip Break\nRECEIPT_WIZARD_FLIGHT_DETAILS=4EaIB94wh5aBbiLyHPUGag_Booking details\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=S2yjJ7ZTAbNnOvopTEXjXw_Expense type is mandatory\nPER_DIEM_TITLE=Ny/8tbGp7/0JyoUSoFcPqA_Per-Diem\nSUBMIT_ERROR_MSG=hyq1JbsBllJPrN77ejTwVw_Your Expense Report could not be saved because an error exists.\nRECEIPT_WIZARD_STEP3_ATTENDEES=yP39vnEbhkfPyI2IiYmMyg_Participants\nSUBMIT_REASON_LABEL=z5Pp5rOWtc+tuQN2qIqwDQ_Reason for Difference\nSAVE_MSG=eGRYer6VZ4HN1tCWONsxvw_Your Expense Report has been saved\nBREAKFAST=1mkT79LsRxgKHasbUpTGQQ_Breakfast\nRECEIPT_WIZARD_SPLIT_DATA=OSvO6j43jWi3ufOqtxX5fg_Receipt Split Data\nPER_DIEM_ACCOMODATIONS=9VXZtSWOU2RExqsWSkAT4g_Accomodation\nCREATE_PENDING_TRIP=uVMEQyHiAJtYoLCzH6Amxw_Available Travel Requests / Plans\nRECEIPT_WIZARD_STEP2=SJIL8+9H7QIk7xBnAgr1xQ_Step 2\nPDF_ERROR=Ka+0G0Zzga54fiNLROvSQA_Your Expense Report cannot be exported as PDF.\nCREATE=NX7dMiUmofpi9viyH9sWlg_Create\nTRAVEL_EXPENSE=5x/+QFK8tLI35kENqWFyjQ_Travel Expense\nCREDIT_CARD_BUTTON=p6pfC78C1KAOH60WkPAujQ_Access Receipt Buffer\nDINNER=U/wPGGNP+31Lrn25h7lDFw_Dinner\nPER_DIEM_APPLY_DESC=0STCMqI4zglsbkX1YEMn0g_Sync your pending changes with the backend\nCOUPONS=9MGEmj82RtRSDmQ8+LZc6w_Meal Coupons\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=JkjJic/sqwmmPANQ6vS6Ag_Additional button information\nSUBMIT=L5xl6JNgtLLzT4I9V1vENg_Submit\nBREAKFAST_PK=ijwqAh/+LtZc9BPObii5dA_Payment in Kind Breakfast\nPercentage=o3Mi9neAF1nhMd24Mf04/Q_Percentage\nNUMBER_FOR_SPLITTING=ifx8ZmdMov9cisPU0p5G7g_Number of Receipts to Create\nDINNER_PK=is1/ju+0l9ynBE9bD1oZAg_Payment in Kind Dinner\nUNSAVED_OBJECT_POPOVER_TEXT=KzH8i5j4kiKFYm0cr9+bog_This Expense Report has unsaved changes by {0}.\nappTitle=7HLO77DqYcxqcQ2tDWMRgA_My Travel and Expenses V2\nDRAFT_WARNING=1i5Wv0uiQ/oB8B40sHFPBA_There is an unsaved version of Expense Report "{0}". Please be aware that usaved changes will be lost.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_es.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Destino adicional\nPD_VIEW_DEDUCTION=Ver deducciones\nSUBMIT_MANDATORY_ERROR_MSG=Introduzca un valor.\nCLOSE=Cerrar\nCREDIT_CARD_STEP2_TITLE=Asignar a un nuevo informe de gastos\nADJUST_RECEIPT_DATE=Ajustar fecha de recibo\nIS_ITEMIZED=Detallado\nSUBMITTED_MSG=El informe de gastos se env\\u00EDa a su aprobador {0}.\nRESET_DEDUCTION=Restablecer\nMERGE_RECEIPT_BUTTON=Combinar recibos\nRECEIPT_WIZARD_CHECK_ERROR=No se puede dividir la receta. Faltan campos obligatorios.\nSELECT_SCHEMA=Selecci\\u00F3n de esquema\nPERDIEM_EXPLANATION=Anule la selecci\\u00F3n haciendo clic en el icono relevante\nSUBMIT_DISCLAIMER=Guardar y enviar\nLUNCH=Comida\nCREATE_EXPENSE=Crear informe de gastos\nMILEAGE=Kilometraje\nCOST_ASSIGNMENT=Asignaci\\u00F3n de costes\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Categor\\u00EDa\nOBJECT_TYPE=Gastos de viajes\nRECEIPT_WIZARD_STEP4_PRODUCTS=Productos\nLODGING_NIGHT=A un d\\u00EDa\nDRAFT_WARNING_UNKNOWN=Ya existe un informe de gastos en estado borrador. Tenga en cuenta que los cambios no guardados se perder\\u00E1n.\nSUBMITTED_MSG_NO_APPROVER=El informe de gastos ha sido enviado.\nPD_ENTER_DEDUCTION=Introducir deducciones\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tipo de gasto\nappDescription=Descripci\\u00F3n de aplicaci\\u00F3n\nSPLIT_RECEIPT=Dividir recibo\nPER_DIEM_DEDUCTIONS=Deducciones de reembolso diario\nDRAFT_LOCKED_BY_USER=Otro usuario ha editado el viaje "{0}" sin guardar los cambios\\: {1} \\n\\nSe perd.cambios si continua.\nLUNCH_PK=Pago en especie, comida\nPER_DIEM_MEALS=Comidas\nADJUST_FROM_DATE_TO_DATE=Ajustar fecha de inicio y fecha de fin\nSUBMIT_DATE=Fecha\nCREDIT_CARD_RECEIPT_HEADER=Recibos disponibles\nASSIGN_BUTTON=Asignar\nCREDIT_CARD_STEP2_BUTTON=Asignar a un nuevo informe de gastos\nSCHEMA_MISSING_FIELD_ALERT=El campo de esquema de viaje es obligatorio\nWIZARD_SPLIT_RECEIPT=Dividir recibo\nHAS_ATTACHMENT=Incluye {0} archivos adjuntos\nSUBMIT_REASON=Motivo para superar la diferencia m\\u00E1xima\nEXPENSE_REPORT=Informe de gastos\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informaci\\u00F3n de recibo\nNO_CREDIT_CARD_RECEIPT=No hay recibos disponibles\nCREDIT_CARD_RECEIPT_TITLE=Acceder a la memoria intermedia del recibo\nSUBMIT_APPROVER=Autorizador\nCANCEL=Cancelar\nWIZARD_SPLIT_RECEIPT_SUCCESS=Se ha creado la divisi\\u00F3n del recibo\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detalles de recibo\nPER_DIEM_RESET_DESC=Reinicie cambios pendientes (con su \\u00FAltima confirmaci\\u00F3n)\nRECEIPT=Recibo\nRECEIPT_WIZARD_VENDOR_DETAILS=Detalles de proveedor\nRECEIPT_COLUMN_ATTACHMENTS=Anexos\nEXPENSE_SUBMIT_DISCLAIMER=He le\\u00EDdo, entendido y cumplido con la pol\\u00EDtica de la empresa. Declaro que los importes y los detalles complementarios son completos y exactos a mi leal saber y entender.\nRECEIPT_WIZARD_VAT_DETAILS=Detalles de IVA\nAbsolute=Absoluto\nPER_DIEM_DATE=Fecha\nCREATE_TRIP_BREAK_BUTTON=Crear interrupci\\u00F3n del viaje\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detalles de reserva\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=El tipo de gasto es obligatorio\nPER_DIEM_TITLE=Per Diem\nSUBMIT_ERROR_MSG=No se ha podido guardar el informe de gastos porque existe un error.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participantes\nSUBMIT_REASON_LABEL=Motivo de diferencia\nSAVE_MSG=Se ha guardado su informe de gastos\nBREAKFAST=Desayuno\nRECEIPT_WIZARD_SPLIT_DATA=Datos divididos de receta\nPER_DIEM_ACCOMODATIONS=Alojamiento\nCREATE_PENDING_TRIP=planes/solicitudes de viaje disponibles\nRECEIPT_WIZARD_STEP2=Paso 2\nPDF_ERROR=No se puede exportar el informe de gastos como PDF.\nCREATE=Crear\nTRAVEL_EXPENSE=Gastos de viajes\nCREDIT_CARD_BUTTON=Acceder a la memoria intermedia del recibo\nDINNER=Cena\nPER_DIEM_APPLY_DESC=Sincronice sus cambios pendientes con el back end\nCOUPONS=Vales de dietas\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Informaci\\u00F3n de bot\\u00F3n adicional\nSUBMIT=Enviar\nBREAKFAST_PK=Pago en especie, desayuno\nPercentage=Porcentaje\nNUMBER_FOR_SPLITTING=N\\u00FAmero de recibos por crear\nDINNER_PK=Pago en especie, cena\nUNSAVED_OBJECT_POPOVER_TEXT=Este informe de gastos tiene cambios sin guardar por {0}.\nappTitle=Mis viajes y gastos V2\nDRAFT_WARNING=Hay una versi\\u00F3n sin guardar del informe de gastos "{0}". Tenga en cuenta que los cambios no guardados se perder\\u00E1n.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_fr.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Destination suppl\\u00E9mentaire\nPD_VIEW_DEDUCTION=Afficher retenues\nSUBMIT_MANDATORY_ERROR_MSG=Saisissez une valeur.\nCLOSE=Fermer\nCREDIT_CARD_STEP2_TITLE=Affectation \\u00E0 un nouveau d\\u00E9compte des frais\nADJUST_RECEIPT_DATE=Corriger la date du justificatif\nIS_ITEMIZED=D\\u00E9taill\\u00E9\nSUBMITTED_MSG=Votre d\\u00E9compte des frais a \\u00E9t\\u00E9 envoy\\u00E9 \\u00E0 votre approbateur {0}.\nRESET_DEDUCTION=R\\u00E9initialiser\nMERGE_RECEIPT_BUTTON=Fusionner justificatifs\nRECEIPT_WIZARD_CHECK_ERROR=Impossible de fractionner le justificatif. Des zones obligatoires sont manquantes.\nSELECT_SCHEMA=S\\u00E9lection de sch\\u00E9ma\nPERDIEM_EXPLANATION=D\\u00E9s\\u00E9lectionnez en cliquant sur l\'ic\\u00F4ne pertinente.\nSUBMIT_DISCLAIMER=Sauvegarder et Envoyer\nLUNCH=D\\u00E9jeuner\nCREATE_EXPENSE=Cr\\u00E9ation de d\\u00E9compte des frais\nMILEAGE=Kilom\\u00E9trage\nCOST_ASSIGNMENT=Affectation des co\\u00FBts\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Cat\\u00E9gorie\nOBJECT_TYPE=Frais de d\\u00E9placement\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produits\nLODGING_NIGHT=Nuit\\u00E9e\nDRAFT_WARNING_UNKNOWN=Une version pr\\u00E9liminaire du d\\u00E9compte des frais existe d\\u00E9j\\u00E0. Notez que les modifications non sauvegard\\u00E9es seront perdues.\nSUBMITTED_MSG_NO_APPROVER=Votre d\\u00E9compte des frais a \\u00E9t\\u00E9 envoy\\u00E9.\nPD_ENTER_DEDUCTION=Saisir retenues\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Cat\\u00E9gorie de frais\nappDescription=Description de l\'application\nSPLIT_RECEIPT=Fractionner justificatif\nPER_DIEM_DEDUCTIONS=Retenues forfaitaires\nDRAFT_LOCKED_BY_USER=Modificat. du d\\u00E9placem. "{0}" sans sauveg. des modif.\\u00A0\\: {1} \\n\\nPerte des modif. si vous continuez.\nLUNCH_PK=Prest. nature d\\u00E9j.\nPER_DIEM_MEALS=Repas\nADJUST_FROM_DATE_TO_DATE=Corriger la date de d\\u00E9but et la date de fin\nSUBMIT_DATE=Date\nCREDIT_CARD_RECEIPT_HEADER=Justificatifs disponibles\nASSIGN_BUTTON=Affecter\nCREDIT_CARD_STEP2_BUTTON=Affectation \\u00E0 un nouveau d\\u00E9compte des frais\nSCHEMA_MISSING_FIELD_ALERT=La zone Sch\\u00E9ma de d\\u00E9placement est obligatoire.\nWIZARD_SPLIT_RECEIPT=Fractionner justificatif\nHAS_ATTACHMENT=Inclut {0} pi\\u00E8ce(s) jointe(s)\nSUBMIT_REASON=Motif de d\\u00E9passement de l\'\\u00E9cart maximal\nEXPENSE_REPORT=D\\u00E9compte des frais\nRECEIPT_WIZARD_RECEIPT_DETAILS=Infos justificatif\nNO_CREDIT_CARD_RECEIPT=Aucun justificatif disponible\nCREDIT_CARD_RECEIPT_TITLE=Acc\\u00E9der \\u00E0 la m\\u00E9moire tampon du justificatif\nSUBMIT_APPROVER=Approbateur\nCANCEL=Annuler\nWIZARD_SPLIT_RECEIPT_SUCCESS=Justificatif fractionn\\u00E9 cr\\u00E9\\u00E9\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=D\\u00E9tails justificatif\nPER_DIEM_RESET_DESC=R\\u00E9initialisez les modifications en attente (pour revenir \\u00E0 votre derni\\u00E8re confirmation).\nRECEIPT=Justificatif\nRECEIPT_WIZARD_VENDOR_DETAILS=D\\u00E9tails fournisseur\nRECEIPT_COLUMN_ATTACHMENTS=Pi\\u00E8ces jointes\nEXPENSE_SUBMIT_DISCLAIMER=J\'ai lu et compris la politique de l\'entreprise, et je m\'y suis conform\\u00E9(e). Je d\\u00E9clare que, \\u00E0 ma connaissance, les montants ainsi que les d\\u00E9tails aff\\u00E9rents sont complets et exacts.\nRECEIPT_WIZARD_VAT_DETAILS=D\\u00E9tails TVA\nAbsolute=Absolu\nPER_DIEM_DATE=Date\nCREATE_TRIP_BREAK_BUTTON=Cr\\u00E9er interruption d\\u00E9pl. professionnel\nRECEIPT_WIZARD_FLIGHT_DETAILS=D\\u00E9tails r\\u00E9servation\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=La cat\\u00E9gorie de frais est obligatoire.\nPER_DIEM_TITLE=Forfait\nSUBMIT_ERROR_MSG=Impossible de sauvegarder votre d\\u00E9compte des frais car une erreur persiste.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participants\nSUBMIT_REASON_LABEL=Motif de l\'\\u00E9cart\nSAVE_MSG=Le d\\u00E9compte des frais a \\u00E9t\\u00E9 sauvegard\\u00E9.\nBREAKFAST=Petit-d\\u00E9jeuner\nRECEIPT_WIZARD_SPLIT_DATA=Donn\\u00E9es fract. just.\nPER_DIEM_ACCOMODATIONS=H\\u00E9bergement\nCREATE_PENDING_TRIP=Demandes/Plans de d\\u00E9placements disponibles\nRECEIPT_WIZARD_STEP2=\\u00C9tape 2\nPDF_ERROR=Impossible d\'exporter votre d\\u00E9compte des frais au format PDF.\nCREATE=Cr\\u00E9er\nTRAVEL_EXPENSE=Frais de d\\u00E9placement\nCREDIT_CARD_BUTTON=Acc\\u00E9der \\u00E0 la m\\u00E9moire tampon du justificatif\nDINNER=D\\u00EEner\nPER_DIEM_APPLY_DESC=Synchronisez les modifications en attente avec le backend.\nCOUPONS=Titres de repas\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Boutons d\'information suppl\\u00E9mentaires\nSUBMIT=Envoyer\nBREAKFAST_PK=Prest. nat. pt-d\\u00E9j.\nPercentage=Pourcentage\nNUMBER_FOR_SPLITTING=Nombre de justificatifs \\u00E0 cr\\u00E9er\nDINNER_PK=Prest. nature d\\u00EEner\nUNSAVED_OBJECT_POPOVER_TEXT=Ce d\\u00E9compte des frais a des modif. non sauvegard\\u00E9es apport\\u00E9es par {0}.\nappTitle=Mes d\\u00E9placements et frais V2\nDRAFT_WARNING=Une version non sauvegard\\u00E9e du d\\u00E9compte des frais "{0}" existe. Notez que les modifications non sauvegard\\u00E9es seront perdues.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_hr.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dodatno odredi\\u0161te\nPD_VIEW_DEDUCTION=Prika\\u017Ei odbitke\nSUBMIT_MANDATORY_ERROR_MSG=Unesite vrijednost.\nCLOSE=Zatvori\nCREDIT_CARD_STEP2_TITLE=Dodijelite novom obra\\u010Dunu tro\\u0161kova\nADJUST_RECEIPT_DATE=Uskladi datum priznanice\nIS_ITEMIZED=Specifikacija stavki\nSUBMITTED_MSG=Va\\u0161e izvje\\u0161\\u0107e o tro\\u0161kovima podneseno je va\\u0161em odobravatelju {0}.\nRESET_DEDUCTION=Ponovo postavi\nMERGE_RECEIPT_BUTTON=Spoji priznanice\nRECEIPT_WIZARD_CHECK_ERROR=Nije mogu\\u0107e razdijeliti priznanicu. Nedostaju obavezna polja.\nSELECT_SCHEMA=Odabir sheme\nPERDIEM_EXPLANATION=Poni\\u0161ti odabir pritiskom na odgovaraju\\u0107u ikonu\nSUBMIT_DISCLAIMER=Snimi i podnesi\nLUNCH=Ru\\u010Dak\nCREATE_EXPENSE=Kreiraj obra\\u010Dun tro\\u0161kova\nMILEAGE=Kilometra\\u017Ea\nCOST_ASSIGNMENT=Dodjela tro\\u0161kova\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategorija\nOBJECT_TYPE=Putni tro\\u0161kovi\nRECEIPT_WIZARD_STEP4_PRODUCTS=Proizvodi\nLODGING_NIGHT=No\\u0107enje\nDRAFT_WARNING_UNKNOWN=Nacrt obra\\u010Duna tro\\u0161kova ve\\u0107 postoji. Uzmite u obzir da \\u0107e se nesnimljene promjene izgubiti.\nSUBMITTED_MSG_NO_APPROVER=Va\\u0161e izvje\\u0161\\u0107e o tro\\u0161kovima podneseno je.\nPD_ENTER_DEDUCTION=Unesi odbitke\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tip tro\\u0161ka\nappDescription=Opis aplikacije\nSPLIT_RECEIPT=Razdijeli priznanicu\nPER_DIEM_DEDUCTIONS=Pau\\u0161alni odbici\nDRAFT_LOCKED_BY_USER=Drugi koris.uredio je putovanje "{0}" bez snimanja promjena\\: {1} \\n\\nAko nastavite, prom.\\u0107e se izgubiti.\nLUNCH_PK=PlUNaturi - ru\\u010Dak\nPER_DIEM_MEALS=Obroci\nADJUST_FROM_DATE_TO_DATE=Uskladi datum po\\u010Detka i datum zavr\\u0161etka\nSUBMIT_DATE=Datum\nCREDIT_CARD_RECEIPT_HEADER=Raspolo\\u017Eive priznanice\nASSIGN_BUTTON=Dodijeli\nCREDIT_CARD_STEP2_BUTTON=Dodijelite novom obra\\u010Dunu tro\\u0161kova\nSCHEMA_MISSING_FIELD_ALERT=Polje sheme putovanja obavezno\nWIZARD_SPLIT_RECEIPT=Razdijeli priznanicu\nHAS_ATTACHMENT=Uklju\\u010Duje br. priloga\\: {0}\nSUBMIT_REASON=Razlog za prekora\\u010Denje maksimalne razlike\nEXPENSE_REPORT=Obra\\u010Dun tro\\u0161kova\nRECEIPT_WIZARD_RECEIPT_DETAILS=Info. priznanice\nNO_CREDIT_CARD_RECEIPT=Priznanice nisu raspolo\\u017Eive\nCREDIT_CARD_RECEIPT_TITLE=Pristupi me\\u0111uspremniku priznanice\nSUBMIT_APPROVER=Odobravatelj\nCANCEL=Otka\\u017Ei\nWIZARD_SPLIT_RECEIPT_SUCCESS=Razdijeljena priznanica kreirana\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detalji priznanice\nPER_DIEM_RESET_DESC=Ponovo postavite promjene na \\u010Dekanju (prema svojoj zadnjoj potvrdi)\nRECEIPT=Priznanica\nRECEIPT_WIZARD_VENDOR_DETAILS=Detalji dobavlja\\u010Da\nRECEIPT_COLUMN_ATTACHMENTS=Prilozi\nEXPENSE_SUBMIT_DISCLAIMER=Pro\\u010Ditao sam, razumio i sla\\u017Eem se sa smjernicama poduze\\u0107a. Izjavljujem da su iznosi i popratni detalji potpuni i to\\u010Dni prema mom najboljem znanju i uvjerenju.\nRECEIPT_WIZARD_VAT_DETAILS=Detalji PDVa\nAbsolute=Apsolutno\nPER_DIEM_DATE=Datum\nCREATE_TRIP_BREAK_BUTTON=Kreiraj prekid putovanja\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detalji rezervacije\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Tip tro\\u0161ka obavezan\nPER_DIEM_TITLE=Pau\\u0161al\nSUBMIT_ERROR_MSG=Va\\u0161e izvje\\u0161\\u0107e o tro\\u0161kovima nije mogu\\u0107e snimiti jer postoji gre\\u0161ka.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Sudionici\nSUBMIT_REASON_LABEL=Razlog za razliku\nSAVE_MSG=Va\\u0161 obra\\u010Dun tro\\u0161kova snimljen\nBREAKFAST=Doru\\u010Dak\nRECEIPT_WIZARD_SPLIT_DATA=PodRazdiobe priznan.\nPER_DIEM_ACCOMODATIONS=Smje\\u0161taj\nCREATE_PENDING_TRIP=Raspolo\\u017Eivi zahtjevi za putovanje/planovi\nRECEIPT_WIZARD_STEP2=Korak 2\nPDF_ERROR=Va\\u0161e izvje\\u0161\\u0107e o tro\\u0161kovima ne mo\\u017Ee se eksportirati kao PDF.\nCREATE=Kreiraj\nTRAVEL_EXPENSE=Putni tro\\u0161kovi\nCREDIT_CARD_BUTTON=Pristupi me\\u0111uspremniku priznanice\nDINNER=Ve\\u010Dera\nPER_DIEM_APPLY_DESC=Sinkronizirajte svoje promjene na \\u010Dekanju s backendom\nCOUPONS=Bonovi za hranu\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Dodatne informacije o gumbu\nSUBMIT=Podnesi\nBREAKFAST_PK=PlUNaturi - doru\\u010Dak\nPercentage=Postotak\nNUMBER_FOR_SPLITTING=Broj priznanica za kreiranje\nDINNER_PK=PlUNaturi - ve\\u010Dera\nUNSAVED_OBJECT_POPOVER_TEXT=Ovo izvje\\u0161\\u0107e o tro\\u0161kovima ima nesnimljene promjene koje je unio {0}.\nappTitle=Moja putovanja i tro\\u0161kovi V2\nDRAFT_WARNING=Postoji nesnimljena verzija obra\\u010Duna tro\\u0161kova "{0}". Uzmite u obzir da \\u0107e se nesnimljene promjene izgubiti.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_hu.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Tov\\u00E1bbi \\u00FAti c\\u00E9l\nPD_VIEW_DEDUCTION=Levon\\u00E1sok megtekint\\u00E9se\nSUBMIT_MANDATORY_ERROR_MSG=Adjon meg \\u00E9rt\\u00E9ket.\nCLOSE=Bez\\u00E1r\\u00E1s\nCREDIT_CARD_STEP2_TITLE=Hozz\\u00E1rendel\\u00E9s \\u00FAj k\\u00F6lts\\u00E9gjelent\\u00E9shez\nADJUST_RECEIPT_DATE=Bizonylat d\\u00E1tum\\u00E1nak kiigaz\\u00EDt\\u00E1sa\nIS_ITEMIZED=Egyedi kimutat\\u00E1s\nSUBMITTED_MSG=A k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1s el lett k\\u00FCldve a(z) {0} enged\\u00E9lyez\\u0151nek.\nRESET_DEDUCTION=Vissza\\u00E1ll\\u00EDt\\u00E1s\nMERGE_RECEIPT_BUTTON=Bizonylatok \\u00F6sszek\\u00F6t\\u00E9se\nRECEIPT_WIZARD_CHECK_ERROR=A bizonylat nem bonthat\\u00F3 meg. K\\u00F6telez\\u0151 mez\\u0151k hi\\u00E1nyoznak.\nSELECT_SCHEMA=S\\u00E9ma - kijel\\u00F6l\\u00E9s\nPERDIEM_EXPLANATION=Kiv\\u00E1laszt\\u00E1s megsz\\u00FCntet\\u00E9se a megfelel\\u0151 ikonra kattint\\u00E1ssal\nSUBMIT_DISCLAIMER=Ment\\u00E9s \\u00E9s k\\u00FCld\\u00E9s\nLUNCH=Eb\\u00E9d\nCREATE_EXPENSE=K\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1s l\\u00E9trehoz\\u00E1sa\nMILEAGE=\\u00DAtszakasz\nCOST_ASSIGNMENT=K\\u00F6lts\\u00E9g-hozz\\u00E1rendel\\u00E9s\nRECEIPT_COLUMN_EXPENSE_CATEGORY=T\\u00EDpus\nOBJECT_TYPE=Utaz\\u00E1si kiad\\u00E1sok\nRECEIPT_WIZARD_STEP4_PRODUCTS=Term\\u00E9kek\nLODGING_NIGHT=\\u00C9jszak\\u00E1z\\u00E1s\nDRAFT_WARNING_UNKNOWN=M\\u00E1r van egy tervezet k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1s. Figyelem\\: az el nem mentett m\\u00F3dos\\u00EDt\\u00E1sok el fognak veszni.\nSUBMITTED_MSG_NO_APPROVER=A k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1s el lett k\\u00FCldve.\nPD_ENTER_DEDUCTION=Levon\\u00E1sok megad\\u00E1sa\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Kiad\\u00E1st\\u00EDpus\nappDescription=Alkalmaz\\u00E1s le\\u00EDr\\u00E1sa\nSPLIT_RECEIPT=Bizonylat megbont\\u00E1sa\nPER_DIEM_DEDUCTIONS=Napi levon\\u00E1sok\nDRAFT_LOCKED_BY_USER=M\\u00E1sik felh. ment\\u00E9s n\\u00E9lk\\u00FCl szerkesztette "{0}" utaz\\u00E1st\\: {1} \\n\\nHa folytatja, a m\\u00F3dos\\u00EDt\\u00E1sok elvesznek.\nLUNCH_PK=Term. jutt.\\: eb\\u00E9d\nPER_DIEM_MEALS=\\u00C9tkez\\u00E9sek\nADJUST_FROM_DATE_TO_DATE=Kezd\\u0151 \\u00E9s z\\u00E1r\\u00F3 d\\u00E1tum kiigaz\\u00EDt\\u00E1sa\nSUBMIT_DATE=D\\u00E1tum\nCREDIT_CARD_RECEIPT_HEADER=El\\u00E9rhet\\u0151 bizonylatok\nASSIGN_BUTTON=Hozz\\u00E1rendel\\u00E9s\nCREDIT_CARD_STEP2_BUTTON=Hozz\\u00E1rendel\\u00E9s \\u00FAj k\\u00F6lts\\u00E9gjelent\\u00E9shez\nSCHEMA_MISSING_FIELD_ALERT=Az utaz\\u00E1si s\\u00E9ma k\\u00F6telez\\u0151 mez\\u0151\nWIZARD_SPLIT_RECEIPT=Bizonylat megbont\\u00E1sa\nHAS_ATTACHMENT=Tartalmazza {0} mell\\u00E9klet(ek)et\nSUBMIT_REASON=A maxim\\u00E1lis elt\\u00E9r\\u00E9s t\\u00FAll\\u00E9p\\u00E9s\\u00E9nek az oka\nEXPENSE_REPORT=Kiad\\u00E1si besz\\u00E1mol\\u00F3\nRECEIPT_WIZARD_RECEIPT_DETAILS=Bizonylatinform\\u00E1ci\\u00F3k\nNO_CREDIT_CARD_RECEIPT=Nincsenek el\\u00E9rhet\\u0151 bizonylatok\nCREDIT_CARD_RECEIPT_TITLE=Bizonylatpuffer el\\u00E9r\\u00E9se\nSUBMIT_APPROVER=Enged\\u00E9lyez\\u0151\nCANCEL=Megszak\\u00EDt\\u00E1s\nWIZARD_SPLIT_RECEIPT_SUCCESS=Megosztott bizonylat l\\u00E9trehozva\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Bizonylat r\\u00E9szletei\nPER_DIEM_RESET_DESC=F\\u00FCgg\\u0151ben l\\u00E9v\\u0151 m\\u00F3dos\\u00EDt\\u00E1sok vissza\\u00E1ll\\u00EDt\\u00E1sa (az utols\\u00F3 j\\u00F3v\\u00E1hagy\\u00E1sra)\nRECEIPT=Bizonylat\nRECEIPT_WIZARD_VENDOR_DETAILS=Sz\\u00E1ll\\u00EDt\\u00F3i r\\u00E9szletek\nRECEIPT_COLUMN_ATTACHMENTS=Mell\\u00E9kletek\nEXPENSE_SUBMIT_DISCLAIMER=A v\\u00E1llalati szab\\u00E1lyzatot elolvastam, meg\\u00E9rtettem \\u00E9s azzal egyet\\u00E9rtek. Kijelentem, hogy az \\u00F6sszegeket \\u00E9s a t\\u00E1mogat\\u00E1s r\\u00E9szleteit hi\\u00E1nytalanul \\u00E9s a legjobb tud\\u00E1som szerint adtam meg.\nRECEIPT_WIZARD_VAT_DETAILS=\\u00C1fa r\\u00E9szletei\nAbsolute=Abszol\\u00FAt\nPER_DIEM_DATE=D\\u00E1tum\nCREATE_TRIP_BREAK_BUTTON=Utaz\\u00E1smegszak\\u00EDt\\u00E1s l\\u00E9trehoz\\u00E1sa\nRECEIPT_WIZARD_FLIGHT_DETAILS=Foglal\\u00E1s r\\u00E9szletei\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=A kiad\\u00E1st\\u00EDpus k\\u00F6telez\\u0151\nPER_DIEM_TITLE=Napi utaz\\u00E1si k\\u00F6lts\\u00E9gt\\u00E9r\\u00EDt\\u00E9s\nSUBMIT_ERROR_MSG=A k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1st nem lehetett elmenteni, mert hiba fordul el\\u0151.\nRECEIPT_WIZARD_STEP3_ATTENDEES=R\\u00E9sztvev\\u0151k\nSUBMIT_REASON_LABEL=Elt\\u00E9r\\u00E9s oka\nSAVE_MSG=A kiad\\u00E1sbesz\\u00E1mol\\u00F3 el lett mentve\nBREAKFAST=Reggeli\nRECEIPT_WIZARD_SPLIT_DATA=Biz. megoszt. adatai\nPER_DIEM_ACCOMODATIONS=Sz\\u00E1ll\\u00E1s\nCREATE_PENDING_TRIP=El\\u00E9rhet\\u0151 utaz\\u00E1si k\\u00E9relmek/tervek\nRECEIPT_WIZARD_STEP2=2. l\\u00E9p\\u00E9s\nPDF_ERROR=A k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1s nem export\\u00E1lhat\\u00F3 PDF-k\\u00E9nt.\nCREATE=L\\u00E9trehoz\\u00E1s\nTRAVEL_EXPENSE=Utaz\\u00E1si kiad\\u00E1sok\nCREDIT_CARD_BUTTON=Bizonylatpuffer el\\u00E9r\\u00E9se\nDINNER=Vacsora\nPER_DIEM_APPLY_DESC=F\\u00FCgg\\u0151ben l\\u00E9v\\u0151 m\\u00F3dos\\u00EDt\\u00E1sok szinkroniz\\u00E1l\\u00E1sa a back enddel\nCOUPONS=\\u00C9tkez\\u00E9si kuponok\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Kieg\\u00E9sz\\u00EDt\\u0151 gombinform\\u00E1ci\\u00F3k\nSUBMIT=Elk\\u00FCld\\u00E9s\nBREAKFAST_PK=Term. jutt.\\: reggeli\nPercentage=Sz\\u00E1zal\\u00E9k\nNUMBER_FOR_SPLITTING=L\\u00E9trehozand\\u00F3 bizonylatok sz\\u00E1ma\nDINNER_PK=Term. jutt.\\: vacsora\nUNSAVED_OBJECT_POPOVER_TEXT=Ezt a k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1st {0} ment\\u00E9s n\\u00E9lk\\u00FCl m\\u00F3dos\\u00EDtotta.\nappTitle=Saj\\u00E1t utaz\\u00E1s \\u00E9s kiad\\u00E1sok V2\nDRAFT_WARNING=A(z) "{0}" k\\u00F6lts\\u00E9gelsz\\u00E1mol\\u00E1snak van egy el nem mentett verzi\\u00F3ja. Figyelem\\: az el nem mentett m\\u00F3dos\\u00EDt\\u00E1sok el fognak veszni.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_it.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Destinazione supplementare\nPD_VIEW_DEDUCTION=Visualizza detrazioni\nSUBMIT_MANDATORY_ERROR_MSG=Inserisci un valore.\nCLOSE=Chiudi\nCREDIT_CARD_STEP2_TITLE=Attribuisci ad un nuovo report spese\nADJUST_RECEIPT_DATE=Rettifica la data di entrata\nIS_ITEMIZED=Dettagliato\nSUBMITTED_MSG=Il tuo report spese viene inviato al tuo approvatore {0}.\nRESET_DEDUCTION=Resetta\nMERGE_RECEIPT_BUTTON=Unisci ricevute\nRECEIPT_WIZARD_CHECK_ERROR=Impossibile suddividere la ricevuta. Mancano i campi obbligatori.\nSELECT_SCHEMA=Selezione struttura\nPERDIEM_EXPLANATION=Deseleziona facendo clic sull\'icona rilevante\nSUBMIT_DISCLAIMER=Salva e invia\nLUNCH=Pranzo\nCREATE_EXPENSE=Crea report spese\nMILEAGE=Chilometraggio\nCOST_ASSIGNMENT=Attribuzione costi\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Categoria\nOBJECT_TYPE=Spese di trasferta \nRECEIPT_WIZARD_STEP4_PRODUCTS=Prodotti\nLODGING_NIGHT=Pernottamento\nDRAFT_WARNING_UNKNOWN=Esiste gi\\u00E0 un report spese in bozza. Considera che le modifiche non salvate andranno perse.\nSUBMITTED_MSG_NO_APPROVER=Il tuo report spese \\u00E8 stato inviato.\nPD_ENTER_DEDUCTION=Inserisci detrazioni\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tipo di spesa\nappDescription=Descrizione app\nSPLIT_RECEIPT=Specificazione giustificativo\nPER_DIEM_DEDUCTIONS=Detrazioni giornaliere\nDRAFT_LOCKED_BY_USER=Trasferta "{0}" gi\\u00E0 elaborata senza salvare le modifiche\\: {1} \\n\\nSe continui le modifiche andranno perse.\nLUNCH_PK=Benefit pranzo\nPER_DIEM_MEALS=Vitto\nADJUST_FROM_DATE_TO_DATE=Rettifica la data di inizio e di fine\nSUBMIT_DATE=Data\nCREDIT_CARD_RECEIPT_HEADER=Ricevute disponibili\nASSIGN_BUTTON=Attribuisci\nCREDIT_CARD_STEP2_BUTTON=Attribuisci ad un nuovo report spese\nSCHEMA_MISSING_FIELD_ALERT=Il campo Struttura della trasferta \\u00E8 obbligatorio\nWIZARD_SPLIT_RECEIPT=Suddividi entrata\nHAS_ATTACHMENT=Include {0} allegati\nSUBMIT_REASON=Motivo per superamento differenza massima\nEXPENSE_REPORT=Report spese\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informazioni ricevuta\nNO_CREDIT_CARD_RECEIPT=Nessuna ricevuta disponibile\nCREDIT_CARD_RECEIPT_TITLE=Accedi buffer ricevute\nSUBMIT_APPROVER=Approvatore\nCANCEL=Annulla\nWIZARD_SPLIT_RECEIPT_SUCCESS=Ricevuta con suddivisione creata\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Dettagli ricevuta\nPER_DIEM_RESET_DESC=Annulla modifiche in sospeso (alla tua ultima conferma)\nRECEIPT=Scontrino\nRECEIPT_WIZARD_VENDOR_DETAILS=Dettagli fornitore\nRECEIPT_COLUMN_ATTACHMENTS=Allegati\nEXPENSE_SUBMIT_DISCLAIMER=Ho letto, compreso e aderito alla direttiva della societ\\u00E0. Dichiaro che gli importi e i dettagli correlati sono completi e accurati, per quanto sono a conoscenza.\nRECEIPT_WIZARD_VAT_DETAILS=Dettagli IVA\nAbsolute=Assoluto\nPER_DIEM_DATE=Data\nCREATE_TRIP_BREAK_BUTTON=Crea sosta durante la trasferta\nRECEIPT_WIZARD_FLIGHT_DETAILS=Dettagli di prenotazione\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Tipo spesa obbligatorio\nPER_DIEM_TITLE=Indennit\\u00E0 giornaliera\nSUBMIT_ERROR_MSG=Impossibile salvare il tuo report spese perch\\u00E9 \\u00E8 presente un errore.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Partecipanti\nSUBMIT_REASON_LABEL=Motivo per differenza\nSAVE_MSG=Il tuo report spese \\u00E8 stato salvato\nBREAKFAST=Colazione\nRECEIPT_WIZARD_SPLIT_DATA=Dati suddivisione ricevuta\nPER_DIEM_ACCOMODATIONS=Alloggio\nCREATE_PENDING_TRIP=Piani/Richieste di trasferta disponibili\nRECEIPT_WIZARD_STEP2=Fase 2\nPDF_ERROR=Il tuo report spese non pu\\u00F2 essere esportato come PDF.\nCREATE=Crea\nTRAVEL_EXPENSE=Spese di trasferta\nCREDIT_CARD_BUTTON=Accedi buffer ricevute\nDINNER=Cena\nPER_DIEM_APPLY_DESC=Sincr. le tue modifiche in sospeso con il back-end\nCOUPONS=Buoni pasto\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Informazioni supplementari pulsante\nSUBMIT=Invia\nBREAKFAST_PK=Benefit colazione\nPercentage=Percentuale\nNUMBER_FOR_SPLITTING=Numero di entrate da creare\nDINNER_PK=Benefit cena\nUNSAVED_OBJECT_POPOVER_TEXT=Questo report spese ha modifiche non salvate da parte di {0}.\nappTitle=La mia gestione trasferte V2\nDRAFT_WARNING=Esiste una versione non salvata del report spese \\u201C{0}\\u201D. Considera che le modifiche non salvate andranno perse.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_iw.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u05D9\\u05E2\\u05D3 \\u05E0\\u05D5\\u05E1\\u05E3\nPD_VIEW_DEDUCTION=\\u05D4\\u05E6\\u05D2 \\u05E0\\u05D9\\u05DB\\u05D5\\u05D9\\u05D9\\u05DD\nSUBMIT_MANDATORY_ERROR_MSG=\\u05D4\\u05D6\\u05DF \\u05E2\\u05E8\\u05DA.\nCLOSE=\\u05E1\\u05D2\\u05D5\\u05E8\nCREDIT_CARD_STEP2_TITLE=\\u05D4\\u05E7\\u05E6\\u05D4 \\u05DC\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05D7\\u05D3\\u05E9.\nADJUST_RECEIPT_DATE=\\u05D4\\u05EA\\u05D0\\u05DD \\u05EA\\u05D0\\u05E8\\u05D9\\u05DA \\u05E7\\u05D1\\u05DC\\u05D4\nIS_ITEMIZED=\\u05DE\\u05E4\\u05D5\\u05E8\\u05D8\nSUBMITTED_MSG=\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E9\\u05DC\\u05DA \\u05E0\\u05E9\\u05DC\\u05D7 \\u05DC\\u05DE\\u05D0\\u05E9\\u05E8 {0}.\nRESET_DEDUCTION=\\u05D0\\u05E4\\u05E1\nMERGE_RECEIPT_BUTTON=\\u05DE\\u05D6\\u05D2 \\u05E7\\u05D1\\u05DC\\u05D5\\u05EA\nRECEIPT_WIZARD_CHECK_ERROR=\\u05DC\\u05D0 \\u05E0\\u05D9\\u05EA\\u05DF \\u05DC\\u05E4\\u05E6\\u05DC \\u05D0\\u05EA \\u05D4\\u05E7\\u05D1\\u05DC\\u05D4. \\u05E9\\u05D3\\u05D5\\u05EA \\u05D7\\u05D5\\u05D1\\u05D4 \\u05D7\\u05E1\\u05E8\\u05D9\\u05DD.\nSELECT_SCHEMA=\\u05D1\\u05D7\\u05D9\\u05E8\\u05EA \\u05EA\\u05E8\\u05E9\\u05D9\\u05DD\nPERDIEM_EXPLANATION=\\u05D1\\u05D8\\u05DC \\u05D1\\u05D7\\u05D9\\u05E8\\u05D4 \\u05E2\\u05DC-\\u05D9\\u05D3\\u05D9 \\u05DC\\u05D7\\u05D9\\u05E6\\u05D4 \\u05E2\\u05DC \\u05D4\\u05E1\\u05DE\\u05DC \\u05D4\\u05E8\\u05DC\\u05D5\\u05D5\\u05E0\\u05D8\\u05D9\nSUBMIT_DISCLAIMER=\\u05E9\\u05DE\\u05D5\\u05E8 \\u05D5\\u05D4\\u05D2\\u05E9\nLUNCH=\\u05D0\\u05E8\\u05D5\\u05D7\\u05EA \\u05E6\\u05D4\\u05E8\\u05D9\\u05D9\\u05DD\nCREATE_EXPENSE=\\u05E6\\u05D5\\u05E8 \\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA\nMILEAGE=\\u05DE\\u05D9\\u05D9\\u05DC\\u05D9\\u05DD\nCOST_ASSIGNMENT=\\u05D4\\u05E7\\u05E6\\u05D0\\u05EA \\u05E2\\u05DC\\u05D5\\u05D9\\u05D5\\u05EA\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u05E7\\u05D8\\u05D2\\u05D5\\u05E8\\u05D9\\u05D4\nOBJECT_TYPE=\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E0\\u05E1\\u05D9\\u05E2\\u05D4\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u05DE\\u05D5\\u05E6\\u05E8\\u05D9\\u05DD\nLODGING_NIGHT=\\u05E9\\u05D4\\u05D9\\u05D9\\u05EA \\u05DC\\u05D9\\u05DC\\u05D4\nDRAFT_WARNING_UNKNOWN=\\u05D8\\u05D9\\u05D5\\u05D8\\u05D4 \\u05E9\\u05DC \\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05DB\\u05D1\\u05E8 \\u05E7\\u05D9\\u05D9\\u05DE\\u05EA. \\u05E9\\u05D9\\u05DD \\u05DC\\u05D1, \\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05DC\\u05D0 \\u05E0\\u05E9\\u05DE\\u05E8\\u05D5 \\u05D9\\u05D0\\u05D1\\u05D3\\u05D5.\nSUBMITTED_MSG_NO_APPROVER=\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E9\\u05DC\\u05DA \\u05E0\\u05E9\\u05DC\\u05D7.\nPD_ENTER_DEDUCTION=\\u05D4\\u05D6\\u05DF \\u05E0\\u05D9\\u05DB\\u05D5\\u05D9\\u05D9\\u05DD\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u05E1\\u05D5\\u05D2 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D4\nappDescription=\\u05EA\\u05D9\\u05D0\\u05D5\\u05E8 \\u05D9\\u05D9\\u05E9\\u05D5\\u05DD\nSPLIT_RECEIPT=\\u05E4\\u05E6\\u05DC \\u05E7\\u05D1\\u05DC\\u05D4\nPER_DIEM_DEDUCTIONS=\\u05E0\\u05D9\\u05DB\\u05D5\\u05D9\\u05D9 \\u05E1\\u05DB\\u05D5\\u05DD \\u05E7\\u05D1\\u05D5\\u05E2 \\u05DC\\u05D9\\u05D5\\u05DD\nDRAFT_LOCKED_BY_USER=\\u05DE\\u05E9\\u05EA\\u05DE\\u05E9 \\u05D0\\u05D7\\u05E8 \\u05E2\\u05E8\\u05DA \\u05D0\\u05EA \\u05E0\\u05E1\\u05D9\\u05E2\\u05D4 "{0}" \\u05D1\\u05DC\\u05D9 \\u05DC\\u05E9\\u05DE\\u05D5\\u05E8 \\u05D0\\u05EA \\u05D4\\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD\\: {1} \\n\\n\\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05D9\\u05D0\\u05D1\\u05D3\\u05D5 \\u05D0\\u05DD \\u05EA\\u05DE\\u05E9\\u05D9\\u05DA.\nLUNCH_PK=\\u05D0\\u05E8.\\u05E6\\u05D4\\u05E8. - \\u05EA\\u05E9\\u05DC\\u05D5\\u05DD \\u05D1\\u05E2\\u05D9\\u05DF\nPER_DIEM_MEALS=\\u05D0\\u05E8\\u05D5\\u05D7\\u05D5\\u05EA\nADJUST_FROM_DATE_TO_DATE=\\u05D4\\u05EA\\u05D0\\u05DD \\u05EA\\u05D0\\u05E8\\u05D9\\u05DA \\u05EA\\u05D7\\u05D9\\u05DC\\u05EA \\u05EA\\u05D5\\u05E7\\u05E3 \\u05D5\\u05EA\\u05D0\\u05E8\\u05D9\\u05DA \\u05E1\\u05D9\\u05D5\\u05DD \\u05EA\\u05D5\\u05E7\\u05E3\nSUBMIT_DATE=\\u05EA\\u05D0\\u05E8\\u05D9\\u05DA\nCREDIT_CARD_RECEIPT_HEADER=\\u05E7\\u05D1\\u05DC\\u05D5\\u05EA \\u05D6\\u05DE\\u05D9\\u05E0\\u05D5\\u05EA\nASSIGN_BUTTON=\\u05D4\\u05E7\\u05E6\\u05D4\nCREDIT_CARD_STEP2_BUTTON=\\u05D4\\u05E7\\u05E6\\u05D4 \\u05DC\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05D7\\u05D3\\u05E9.\nSCHEMA_MISSING_FIELD_ALERT=\\u05E9\\u05D3\\u05D4 \\u05EA\\u05E8\\u05E9\\u05D9\\u05DD \\u05E0\\u05E1\\u05D9\\u05E2\\u05D4 \\u05D4\\u05D5\\u05D0 \\u05D4\\u05DB\\u05E8\\u05D7\\u05D9\nWIZARD_SPLIT_RECEIPT=\\u05E4\\u05E6\\u05DC \\u05E7\\u05D1\\u05DC\\u05D4\nHAS_ATTACHMENT=\\u05DE\\u05DB\\u05D9\\u05DC {0} \\u05E7\\u05D1\\u05E6\\u05D9\\u05DD \\u05DE\\u05E6\\u05D5\\u05E8\\u05E4\\u05D9\\u05DD\nSUBMIT_REASON=\\u05E1\\u05D9\\u05D1\\u05D4 \\u05E2\\u05D1\\u05D5\\u05E8 \\u05D4\\u05E4\\u05E8\\u05E9 \\u05DE\\u05E7\\u05E1\\u05D9\\u05DE\\u05DC\\u05D9 \\u05D7\\u05D5\\u05E8\\u05D2\nEXPENSE_REPORT=\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u05E4\\u05E8\\u05D8\\u05D9 \\u05E7\\u05D1\\u05DC\\u05D4\nNO_CREDIT_CARD_RECEIPT=\\u05D0\\u05D9\\u05DF \\u05E7\\u05D1\\u05DC\\u05D5\\u05EA \\u05D6\\u05DE\\u05D9\\u05E0\\u05D5\\u05EA\nCREDIT_CARD_RECEIPT_TITLE=\\u05E7\\u05D1\\u05DC \\u05D2\\u05D9\\u05E9\\u05D4 \\u05DC\\u05DE\\u05D0\\u05D2\\u05E8 \\u05E7\\u05D1\\u05DC\\u05D5\\u05EA\nSUBMIT_APPROVER=\\u05DE\\u05D0\\u05E9\\u05E8\nCANCEL=\\u05D1\\u05D8\\u05DC\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u05E7\\u05D1\\u05DC\\u05D4 \\u05DE\\u05E4\\u05D5\\u05E6\\u05DC\\u05EA \\u05E0\\u05D5\\u05E6\\u05E8\\u05D4\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u05E4\\u05E8\\u05D8\\u05D9 \\u05E7\\u05D1\\u05DC\\u05D4\nPER_DIEM_RESET_DESC=\\u05D0\\u05E4\\u05E1 \\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05DE\\u05DE\\u05EA\\u05D9\\u05E0\\u05D9\\u05DD (\\u05DC\\u05D0\\u05D9\\u05E9\\u05D5\\u05E8 \\u05D4\\u05D0\\u05D7\\u05E8\\u05D5\\u05DF \\u05E9\\u05DC\\u05DA)\nRECEIPT=\\u05E7\\u05D1\\u05DC\\u05D4\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u05E4\\u05E8\\u05D8\\u05D9 \\u05E1\\u05E4\\u05E7\nRECEIPT_COLUMN_ATTACHMENTS=\\u05E7\\u05D1\\u05E6\\u05D9\\u05DD \\u05DE\\u05E6\\u05D5\\u05E8\\u05E4\\u05D9\\u05DD\nEXPENSE_SUBMIT_DISCLAIMER=\\u05E7\\u05E8\\u05D0\\u05EA\\u05D9, \\u05D4\\u05D1\\u05E0\\u05EA\\u05D9 \\u05D5\\u05D4\\u05E1\\u05DB\\u05DE\\u05EA\\u05D9 \\u05DC\\u05DE\\u05D3\\u05D9\\u05E0\\u05D9\\u05D5\\u05EA \\u05D4\\u05D7\\u05D1\\u05E8\\u05D4. \\u05D0\\u05E0\\u05D9 \\u05DE\\u05E6\\u05D4\\u05D9\\u05E8 \\u05DB\\u05D9 \\u05D4\\u05E1\\u05DB\\u05D5\\u05DE\\u05D9\\u05DD \\u05D5\\u05D4\\u05E4\\u05E8\\u05D8\\u05D9\\u05DD \\u05D4\\u05EA\\u05D5\\u05DE\\u05DB\\u05D9\\u05DD \\u05DE\\u05DC\\u05D0\\u05D9\\u05DD \\u05D5\\u05DE\\u05D3\\u05D5\\u05D9\\u05E7\\u05D9\\u05DD, \\u05DC\\u05DE\\u05D9\\u05D8\\u05D1 \\u05D9\\u05D3\\u05D9\\u05E2\\u05EA\\u05D9.\nRECEIPT_WIZARD_VAT_DETAILS=\\u05E4\\u05E8\\u05D8\\u05D9 \\u05DE\\u05E2"\\u05DE\nAbsolute=\\u05DE\\u05D5\\u05D7\\u05DC\\u05D8\nPER_DIEM_DATE=\\u05EA\\u05D0\\u05E8\\u05D9\\u05DA\nCREATE_TRIP_BREAK_BUTTON=\\u05E6\\u05D5\\u05E8 \\u05D4\\u05E4\\u05E1\\u05E7\\u05D4 \\u05D1\\u05E0\\u05E1\\u05D9\\u05E2\\u05D4\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u05E4\\u05E8\\u05D8\\u05D9 \\u05D4\\u05E8\\u05E9\\u05DE\\u05D4\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u05E1\\u05D5\\u05D2 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D4 \\u05D4\\u05D5\\u05D0 \\u05E2\\u05E8\\u05DA \\u05D7\\u05D5\\u05D1\\u05D4\nPER_DIEM_TITLE=\\u05DC\\u05DB\\u05DC \\u05D9\\u05D5\\u05DD\nSUBMIT_ERROR_MSG=\\u05DC\\u05D0 \\u05E0\\u05D9\\u05EA\\u05DF \\u05D4\\u05D9\\u05D4 \\u05DC\\u05E9\\u05DE\\u05D5\\u05E8 \\u05D0\\u05EA \\u05D3\\u05D5\\u05D7 \\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E9\\u05DC\\u05DA \\u05DB\\u05D9 \\u05E7\\u05D9\\u05D9\\u05DE\\u05EA \\u05E9\\u05D2\\u05D9\\u05D0\\u05D4.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u05DE\\u05E9\\u05EA\\u05EA\\u05E4\\u05D9\\u05DD\nSUBMIT_REASON_LABEL=\\u05E1\\u05D9\\u05D1\\u05D4 \\u05DC\\u05D4\\u05E4\\u05E8\\u05E9.\nSAVE_MSG=\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E9\\u05DC\\u05DA \\u05E0\\u05E9\\u05DE\\u05E8\nBREAKFAST=\\u05D0\\u05E8\\u05D5\\u05D7\\u05EA \\u05D1\\u05D5\\u05E7\\u05E8\nRECEIPT_WIZARD_SPLIT_DATA=\\u05E0\\u05EA\\u05D5\\u05E0\\u05D9 \\u05E4\\u05D9\\u05E6\\u05D5\\u05DC \\u05E7\\u05D1\\u05DC\\u05D4\nPER_DIEM_ACCOMODATIONS=\\u05DC\\u05D9\\u05E0\\u05D4\nCREATE_PENDING_TRIP=\\u05EA\\u05D5\\u05DB\\u05E0\\u05D9\\u05D5\\u05EA/\\u05D1\\u05E7\\u05E9\\u05D5\\u05EA \\u05E0\\u05E1\\u05D9\\u05E2\\u05D4 \\u05D6\\u05DE\\u05D9\\u05E0\\u05D5\\u05EA\nRECEIPT_WIZARD_STEP2=\\u05E9\\u05DC\\u05D1 2\nPDF_ERROR=\\u05DC\\u05D0 \\u05E0\\u05D9\\u05EA\\u05DF \\u05DC\\u05D9\\u05D9\\u05E6\\u05D0 \\u05D0\\u05EA \\u05D3\\u05D5\\u05D7 \\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E9\\u05DC\\u05DA \\u05DB\\u05E7\\u05D5\\u05D1\\u05E5 PDF.\nCREATE=\\u05E6\\u05D5\\u05E8\nTRAVEL_EXPENSE=\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05E0\\u05E1\\u05D9\\u05E2\\u05D4\nCREDIT_CARD_BUTTON=\\u05E7\\u05D1\\u05DC \\u05D2\\u05D9\\u05E9\\u05D4 \\u05DC\\u05DE\\u05D0\\u05D2\\u05E8 \\u05E7\\u05D1\\u05DC\\u05D5\\u05EA\nDINNER=\\u05D0\\u05E8\\u05D5\\u05D7\\u05EA \\u05E2\\u05E8\\u05D1\nPER_DIEM_APPLY_DESC=\\u05E1\\u05E0\\u05DB\\u05E8\\u05DF \\u05D0\\u05EA \\u05D4\\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05D4\\u05DE\\u05DE\\u05EA\\u05D9\\u05E0\\u05D9\\u05DD \\u05E9\\u05DC\\u05DA \\u05E2\\u05DD \\u05D4-Back-End\nCOUPONS=\\u05EA\\u05DC\\u05D5\\u05E9\\u05D9 \\u05D0\\u05E8\\u05D5\\u05D7\\u05D5\\u05EA\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u05DE\\u05D9\\u05D3\\u05E2 \\u05DC\\u05D7\\u05E6\\u05DF \\u05E0\\u05D5\\u05E1\\u05E3\nSUBMIT=\\u05D4\\u05D2\\u05E9\nBREAKFAST_PK=\\u05D0\\u05E8.\\u05D1\\u05D5\\u05E7\\u05E8 - \\u05EA\\u05E9\\u05DC\\u05D5\\u05DD \\u05D1\\u05E2\\u05D9\\u05DF\nPercentage=\\u05D0\\u05D7\\u05D5\\u05D6\nNUMBER_FOR_SPLITTING=\\u05DE\\u05E1\\u05E4\\u05E8 \\u05D4\\u05E7\\u05D1\\u05DC\\u05D5\\u05EA \\u05E9\\u05D9\\u05E9 \\u05DC\\u05D9\\u05E6\\u05D5\\u05E8\nDINNER_PK=\\u05D0\\u05E8\\u05D5.\\u05E2\\u05E8\\u05D1 - \\u05EA\\u05E9\\u05DC\\u05D5\\u05DD \\u05D1\\u05E2\\u05D9\\u05DF\nUNSAVED_OBJECT_POPOVER_TEXT=\\u05D3\\u05D5\\u05D7 \\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05D6\\u05D4 \\u05DE\\u05DB\\u05D9\\u05DC \\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05DC\\u05D0 \\u05E0\\u05E9\\u05DE\\u05E8\\u05D5 \\u05E2\\u05DC-\\u05D9\\u05D3\\u05D9 {0}.\nappTitle=\\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA \\u05D5\\u05D4\\u05E0\\u05E1\\u05D9\\u05E2\\u05D5\\u05EA \\u05E9\\u05DC\\u05D9 V2\nDRAFT_WARNING=\\u05E7\\u05D9\\u05D9\\u05DE\\u05EA \\u05D2\\u05E8\\u05E1\\u05D4 \\u05E9\\u05DC\\u05D0 \\u05E0\\u05E9\\u05DE\\u05E8\\u05D4 \\u05E9\\u05DC \\u05D3\\u05D5\\u05D7 \\u05D4\\u05D4\\u05D5\\u05E6\\u05D0\\u05D5\\u05EA "{0}". \\u05E9\\u05D9\\u05DD \\u05DC\\u05D1 \\u05E9\\u05D4\\u05E9\\u05D9\\u05E0\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05DC\\u05D0 \\u05E0\\u05E9\\u05DE\\u05E8\\u05D5 \\u05D9\\u05D0\\u05D1\\u05D3\\u05D5.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_ja.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u8FFD\\u52A0\\u306E\\u51FA\\u5F35\\u5148\nPD_VIEW_DEDUCTION=\\u63A7\\u9664\\u7167\\u4F1A\nSUBMIT_MANDATORY_ERROR_MSG=\\u5024\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\\u3002\nCLOSE=\\u7D42\\u4E86\nCREDIT_CARD_STEP2_TITLE=\\u65B0\\u3057\\u3044\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u3078\\u306E\\u5272\\u5F53\nADJUST_RECEIPT_DATE=\\u9818\\u53CE\\u66F8\\u65E5\\u4ED8\\u306E\\u8ABF\\u6574\nIS_ITEMIZED=\\u660E\\u7D30\\u5316\nSUBMITTED_MSG=\\u3042\\u306A\\u305F\\u306E\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u304C\\u627F\\u8A8D\\u8005 {0} \\u306B\\u9001\\u4FE1\\u3055\\u308C\\u307E\\u3057\\u305F\\u3002\nRESET_DEDUCTION=\\u30EA\\u30BB\\u30C3\\u30C8\nMERGE_RECEIPT_BUTTON=\\u9818\\u53CE\\u66F8\\u30DE\\u30FC\\u30B8\nRECEIPT_WIZARD_CHECK_ERROR=\\u9818\\u53CE\\u66F8\\u3092\\u5206\\u5272\\u3067\\u304D\\u307E\\u305B\\u3093\\u3002\\u5165\\u529B\\u5FC5\\u9808\\u9805\\u76EE\\u304C\\u5165\\u529B\\u3055\\u308C\\u3066\\u3044\\u307E\\u305B\\u3093\\u3002\nSELECT_SCHEMA=\\u30B9\\u30AD\\u30FC\\u30DE\\u9078\\u629E\nPERDIEM_EXPLANATION=\\u95A2\\u9023\\u30A2\\u30A4\\u30B3\\u30F3\\u3092\\u30AF\\u30EA\\u30C3\\u30AF\\u3057\\u3066\\u9078\\u629E\\u3092\\u89E3\\u9664\\u3057\\u307E\\u3059\nSUBMIT_DISCLAIMER=\\u4FDD\\u5B58\\u3057\\u3066\\u9001\\u4FE1\nLUNCH=\\u663C\\u98DF\nCREATE_EXPENSE=\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u767B\\u9332\nMILEAGE=\\u8D70\\u884C\\u8DDD\\u96E2\nCOST_ASSIGNMENT=\\u539F\\u4FA1\\u8CA0\\u62C5\\u914D\\u5206\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u30AB\\u30C6\\u30B4\\u30EA\nOBJECT_TYPE=\\u7D4C\\u8CBB\\u7CBE\\u7B97\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u88FD\\u54C1\nLODGING_NIGHT=\\u5BBF\\u6CCA\nDRAFT_WARNING_UNKNOWN=\\u30C9\\u30E9\\u30D5\\u30C8\\u306E\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u304C\\u3059\\u3067\\u306B\\u5B58\\u5728\\u3057\\u307E\\u3059\\u3002\\u672A\\u4FDD\\u5B58\\u306E\\u5909\\u66F4\\u306F\\u5931\\u308F\\u308C\\u307E\\u3059\\u306E\\u3067\\u3054\\u6CE8\\u610F\\u304F\\u3060\\u3055\\u3044\\u3002\nSUBMITTED_MSG_NO_APPROVER=\\u3042\\u306A\\u305F\\u306E\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u304C\\u9001\\u4FE1\\u3055\\u308C\\u307E\\u3057\\u305F\\u3002\nPD_ENTER_DEDUCTION=\\u63A7\\u9664\\u5165\\u529B\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u7D4C\\u8CBB\\u30BF\\u30A4\\u30D7\nappDescription=\\u30A2\\u30D7\\u30EA\\u5185\\u5BB9\\u8AAC\\u660E\nSPLIT_RECEIPT=\\u9818\\u53CE\\u66F8\\u3092\\u5206\\u5272\\u3059\\u308B\nPER_DIEM_DEDUCTIONS=\\u624B\\u5F53\\u306E\\u63A7\\u9664\nDRAFT_LOCKED_BY_USER=\\u5225\\u306E\\u30E6\\u30FC\\u30B6\\u304C\\u51FA\\u5F35 "{0}" \\u3092\\u7DE8\\u96C6\\u3057\\u307E\\u3057\\u305F\\u304C\\u3001\\u5909\\u66F4\\u3092\\u4FDD\\u5B58\\u3057\\u3066\\u3044\\u307E\\u305B\\u3093\\u3002{1} \\n\\n\\u7D9A\\u884C\\u3059\\u308B\\u3068\\u3001\\u5909\\u66F4\\u306F\\u5931\\u308F\\u308C\\u307E\\u3059\\u3002\nLUNCH_PK=\\u663C\\u98DF\\u306E\\u73FE\\u7269\\u652F\\u7D66\nPER_DIEM_MEALS=\\u98DF\\u4E8B\nADJUST_FROM_DATE_TO_DATE=\\u958B\\u59CB\\u65E5\\u4ED8\\u304A\\u3088\\u3073\\u7D42\\u4E86\\u65E5\\u4ED8\\u306E\\u8ABF\\u6574\nSUBMIT_DATE=\\u65E5\\u4ED8\nCREDIT_CARD_RECEIPT_HEADER=\\u5229\\u7528\\u3067\\u304D\\u308B\\u9818\\u53CE\\u66F8\nASSIGN_BUTTON=\\u5272\\u5F53\nCREDIT_CARD_STEP2_BUTTON=\\u65B0\\u3057\\u3044\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u3078\\u306E\\u5272\\u5F53\nSCHEMA_MISSING_FIELD_ALERT=\\u51FA\\u5F35\\u30B9\\u30AD\\u30FC\\u30DE\\u9805\\u76EE\\u306F\\u5FC5\\u9808\\u3067\\u3059\nWIZARD_SPLIT_RECEIPT=\\u9818\\u53CE\\u66F8\\u3092\\u5206\\u5272\\u3059\\u308B\nHAS_ATTACHMENT={0} \\u4EF6\\u306E\\u6DFB\\u4ED8\\u6587\\u66F8\\u3092\\u542B\\u3080\nSUBMIT_REASON=\\u6700\\u5927\\u5DEE\\u7570\\u306E\\u8D85\\u904E\\u7406\\u7531\nEXPENSE_REPORT=\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u9818\\u53CE\\u66F8\\u60C5\\u5831\nNO_CREDIT_CARD_RECEIPT=\\u5229\\u7528\\u3067\\u304D\\u308B\\u9818\\u53CE\\u66F8\\u306F\\u3042\\u308A\\u307E\\u305B\\u3093\nCREDIT_CARD_RECEIPT_TITLE=\\u9818\\u53CE\\u66F8\\u30D0\\u30C3\\u30D5\\u30A1\\u306B\\u30A2\\u30AF\\u30BB\\u30B9\nSUBMIT_APPROVER=\\u627F\\u8A8D\\u8005\nCANCEL=\\u4E2D\\u6B62\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u5206\\u5272\\u6E08\\u9818\\u53CE\\u66F8\\u304C\\u767B\\u9332\\u3055\\u308C\\u307E\\u3057\\u305F\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u9818\\u53CE\\u66F8\\u8A73\\u7D30\nPER_DIEM_RESET_DESC=\\u4FDD\\u7559\\u5909\\u66F4\\u3092\\u524D\\u56DE\\u306E\\u78BA\\u8A8D\\u306B\\u30EA\\u30BB\\u30C3\\u30C8\\u3059\\u308B\nRECEIPT=\\u9818\\u53CE\\u66F8\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u4ED5\\u5165\\u5148\\u8A73\\u7D30\nRECEIPT_COLUMN_ATTACHMENTS=\\u6DFB\\u4ED8\\u6587\\u66F8\nEXPENSE_SUBMIT_DISCLAIMER=\\u4F1A\\u793E\\u306E\\u65B9\\u91DD\\u3092\\u8AAD\\u307F\\u3001\\u7406\\u89E3\\u3057\\u305F\\u4E0A\\u3067\\u3001\\u3053\\u308C\\u306B\\u6E96\\u62E0\\u3044\\u305F\\u3057\\u307E\\u3059\\u3002 \\u91D1\\u984D\\u304A\\u3088\\u3073\\u6DFB\\u4ED8\\u8A73\\u7D30\\u304C\\u5B8C\\u5168\\u304B\\u3064\\u6B63\\u78BA\\u3067\\u3042\\u308B\\u3053\\u3068\\u3092\\u5BA3\\u8A00\\u3057\\u307E\\u3059\\u3002\nRECEIPT_WIZARD_VAT_DETAILS=\\u6D88\\u8CBB\\u7A0E\\u8A73\\u7D30\nAbsolute=\\u7D76\\u5BFE\nPER_DIEM_DATE=\\u65E5\\u4ED8\nCREATE_TRIP_BREAK_BUTTON=\\u51FA\\u5F35\\u4E2D\\u306E\\u4F11\\u65E5\\u306E\\u767B\\u9332\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u4E88\\u7D04\\u8A73\\u7D30\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u7D4C\\u8CBB\\u30BF\\u30A4\\u30D7\\u306F\\u5FC5\\u9808\\u3067\\u3059\nPER_DIEM_TITLE=\\u624B\\u5F53\nSUBMIT_ERROR_MSG=\\u30A8\\u30E9\\u30FC\\u304C\\u3042\\u308B\\u305F\\u3081\\u3001\\u7D4C\\u8CBB\\u30EA\\u30DD\\u30FC\\u30C8\\u306F\\u4FDD\\u5B58\\u3055\\u308C\\u307E\\u305B\\u3093\\u3067\\u3057\\u305F\\u3002\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u53C2\\u52A0\\u8005\nSUBMIT_REASON_LABEL=\\u5DEE\\u7570\\u306E\\u7406\\u7531\nSAVE_MSG=\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u304C\\u4FDD\\u5B58\\u3055\\u308C\\u307E\\u3057\\u305F\nBREAKFAST=\\u671D\\u98DF\nRECEIPT_WIZARD_SPLIT_DATA=\\u9818\\u53CE\\u66F8\\u5206\\u5272\\u30C7\\u30FC\\u30BF\nPER_DIEM_ACCOMODATIONS=\\u5BBF\\u6CCA\nCREATE_PENDING_TRIP=\\u5229\\u7528\\u53EF\\u80FD\\u306A\\u51FA\\u5F35\\u7533\\u8ACB/\\u8A08\\u753B\nRECEIPT_WIZARD_STEP2=\\u30B9\\u30C6\\u30C3\\u30D7 2\nPDF_ERROR=\\u3042\\u306A\\u305F\\u306E\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u3092 PDF \\u3067\\u30A8\\u30AF\\u30B9\\u30DD\\u30FC\\u30C8\\u3059\\u308B\\u3053\\u3068\\u306F\\u3067\\u304D\\u307E\\u305B\\u3093\\u3002\nCREATE=\\u767B\\u9332\nTRAVEL_EXPENSE=\\u7D4C\\u8CBB\\u7CBE\\u7B97\nCREDIT_CARD_BUTTON=\\u9818\\u53CE\\u66F8\\u30D0\\u30C3\\u30D5\\u30A1\\u306B\\u30A2\\u30AF\\u30BB\\u30B9\nDINNER=\\u5915\\u98DF\nPER_DIEM_APPLY_DESC=\\u30D0\\u30C3\\u30AF\\u30A8\\u30F3\\u30C9\\u3068\\u306E\\u4FDD\\u7559\\u5909\\u66F4\\u306E\\u540C\\u671F\nCOUPONS=\\u98DF\\u4E8B\\u5238\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u8FFD\\u52A0\\u30DC\\u30BF\\u30F3\\u60C5\\u5831\nSUBMIT=\\u9001\\u4FE1\nBREAKFAST_PK=\\u671D\\u98DF\\u306E\\u73FE\\u7269\\u652F\\u7D66\nPercentage=\\u5272\\u5408 (%)\nNUMBER_FOR_SPLITTING=\\u4F5C\\u6210\\u3059\\u308B\\u9818\\u53CE\\u66F8\\u306E\\u6570\nDINNER_PK=\\u5915\\u98DF\\u306E\\u73FE\\u7269\\u652F\\u7D66\nUNSAVED_OBJECT_POPOVER_TEXT=\\u3053\\u306E\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8\\u306B\\u306F\\u3001{0} \\u306B\\u3088\\u308B\\u672A\\u4FDD\\u5B58\\u306E\\u5909\\u66F4\\u304C\\u3042\\u308A\\u307E\\u3059\\u3002\nappTitle=\\u5F93\\u696D\\u54E1\\u7D4C\\u8CBB\\u7BA1\\u7406 V2\nDRAFT_WARNING=\\u7D4C\\u8CBB\\u30EC\\u30DD\\u30FC\\u30C8 "{0}".\\u306E\\u4FDD\\u5B58\\u3055\\u308C\\u3066\\u3044\\u306A\\u3044\\u30D0\\u30FC\\u30B8\\u30E7\\u30F3\\u304C\\u3042\\u308A\\u307E\\u3059\\u3002\\u672A\\u4FDD\\u5B58\\u306E\\u5909\\u66F4\\u306F\\u5931\\u308F\\u308C\\u307E\\u3059\\u306E\\u3067\\u3054\\u6CE8\\u610F\\u304F\\u3060\\u3055\\u3044\\u3002\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_no.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Ytterligere reisem\\u00E5l\nPD_VIEW_DEDUCTION=Vis fradrag\nSUBMIT_MANDATORY_ERROR_MSG=Oppgi en verdi\nCLOSE=Lukk\nCREDIT_CARD_STEP2_TITLE=Tilordne til en ny utgiftsrapport\nADJUST_RECEIPT_DATE=Juster kvitteringsdato\nIS_ITEMIZED=Spesifisert\nSUBMITTED_MSG=Utgiftsrapporten din er sendt til godkjenneren {0}.\nRESET_DEDUCTION=Tilbakestill\nMERGE_RECEIPT_BUTTON=Sl\\u00E5 sammen kvitteringer\nRECEIPT_WIZARD_CHECK_ERROR=Kan ikke splitte opp kvitteringen. Obligatoriske felt mangler.\nSELECT_SCHEMA=Skjemautvalg\nPERDIEM_EXPLANATION=Opphev merking ved \\u00E5 klikke p\\u00E5 relevant ikon\nSUBMIT_DISCLAIMER=Lagre og send\nLUNCH=Lunsj\nCREATE_EXPENSE=Opprett utgiftsrapport\nMILEAGE=Kj\\u00F8relengde\nCOST_ASSIGNMENT=Kostnadstilordning\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategori\nOBJECT_TYPE=Reiseutgift\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produkter\nLODGING_NIGHT=Overnatting\nDRAFT_WARNING_UNKNOWN=Det finnes allerede et utkast av en utgiftsrapport. Du vil miste ulagrede endringer.\nSUBMITTED_MSG_NO_APPROVER=Utgiftsrapporten din er sendt.\nPD_ENTER_DEDUCTION=Oppgi fradrag\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Utgiftstype\nappDescription=Appbeskrivelse\nSPLIT_RECEIPT=Splitt opp kvittering\nPER_DIEM_DEDUCTIONS=Sats fradrag\nDRAFT_LOCKED_BY_USER=En annen bruker redigerte reise "{0}" uten \\u00E5 lagre endr.\\: {1} \\n\\nDu mister endringene hvis du fortsetter.\nLUNCH_PK=Naturalyt. lunsj\nPER_DIEM_MEALS=M\\u00E5ltider\nADJUST_FROM_DATE_TO_DATE=Juster fra-dato og til-dato\nSUBMIT_DATE=Dato\nCREDIT_CARD_RECEIPT_HEADER=Tilgjengelige kvitteringer\nASSIGN_BUTTON=Tilordne\nCREDIT_CARD_STEP2_BUTTON=Tilordne til en ny utgiftsrapport\nSCHEMA_MISSING_FIELD_ALERT=Reiseskjema-feltet er obligatorisk\nWIZARD_SPLIT_RECEIPT=Splitt opp kvittering\nHAS_ATTACHMENT=Inkluderer {0} vedlegg\nSUBMIT_REASON=\\u00C5rsak til overskridelse av maksimumsdifferanse\nEXPENSE_REPORT=Utgiftsrapport\nRECEIPT_WIZARD_RECEIPT_DETAILS=Kvitteringsinfo\nNO_CREDIT_CARD_RECEIPT=Ingen kvitteringer tilgjengelig\nCREDIT_CARD_RECEIPT_TITLE=G\\u00E5 til kvitteringsbuffer\nSUBMIT_APPROVER=Godkjenner\nCANCEL=Avbryt\nWIZARD_SPLIT_RECEIPT_SUCCESS=Oppsplittet kvittering opprettet\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Kvitteringsdetaljer\nPER_DIEM_RESET_DESC=Tilbakestill forest\\u00E5ende endringer (til din siste bekr.)\nRECEIPT=Kvittering\nRECEIPT_WIZARD_VENDOR_DETAILS=Leverand\\u00F8rdetaljer\nRECEIPT_COLUMN_ATTACHMENTS=Vedlegg\nEXPENSE_SUBMIT_DISCLAIMER=Jeg har lest og forst\\u00E5tt firmaets retningslinjer, og samtykker i disse. Jeg erkl\\u00E6rer herved at bel\\u00F8p og tilleggsdetaljer er fullstendige og riktige s\\u00E5 vidt meg bekjent.\nRECEIPT_WIZARD_VAT_DETAILS=Mva.-detaljer\nAbsolute=Absolutt\nPER_DIEM_DATE=Dato\nCREATE_TRIP_BREAK_BUTTON=Opprett reiseavbrudd\nRECEIPT_WIZARD_FLIGHT_DETAILS=Reserveringsdetaljer\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Ugiftstypen er obligatorisk\nPER_DIEM_TITLE=Sats\nSUBMIT_ERROR_MSG=Utgiftsrapporten din kan ikke lagres fordi det har oppst\\u00E5tt en feil.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Deltakere\nSUBMIT_REASON_LABEL=\\u00C5rsak til differanse\nSAVE_MSG=Utgiftsrapporten er lagret\nBREAKFAST=Frokost\nRECEIPT_WIZARD_SPLIT_DATA=Kvitt.oppspl.data\nPER_DIEM_ACCOMODATIONS=Nattillegg\nCREATE_PENDING_TRIP=Tilgjengelige reises\\u00F8knader/-planer\nRECEIPT_WIZARD_STEP2=Trinn 2\nPDF_ERROR=Utgiftsrapporten din kan ikke eksporteres som PDF.\nCREATE=Opprett\nTRAVEL_EXPENSE=Reiseutgift\nCREDIT_CARD_BUTTON=G\\u00E5 til kvitteringsbuffer\nDINNER=Middag\nPER_DIEM_APPLY_DESC=Synk. dine forest\\u00E5ende endringer med backend\nCOUPONS=Matkuponger\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Informasjon om ytterligere knapper\nSUBMIT=Send\nBREAKFAST_PK=Naturalyt. frokost\nPercentage=Prosentandel\nNUMBER_FOR_SPLITTING=Antall kvitteringer som skal opprettes\nDINNER_PK=Naturalytelse middag\nUNSAVED_OBJECT_POPOVER_TEXT=Denne utgiftsrapporten har ulagrede endringer av {0}.\nappTitle=Min reiseadministrasjon V2\nDRAFT_WARNING=Det finnes en ulagret versjon av utgiftsrapport "{0}". Du vil miste ulagrede endringer.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_pl.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dodatkowe miejsce przeznaczenia\nPD_VIEW_DEDUCTION=Wy\\u015Bwietl potr\\u0105cenia\nSUBMIT_MANDATORY_ERROR_MSG=Wprowad\\u017A warto\\u015B\\u0107.\nCLOSE=Zamknij\nCREDIT_CARD_STEP2_TITLE=Przypisanie do nowego raport z wydatk\\u00F3w\nADJUST_RECEIPT_DATE=Dostosuj dat\\u0119 rachunku\nIS_ITEMIZED=Wyszczeg\\u00F3lnione\nSUBMITTED_MSG=Raport z wydatk\\u00F3w przes\\u0142ano do osoby zatwierdzaj\\u0105cej {0}.\nRESET_DEDUCTION=Ustaw ponownie\nMERGE_RECEIPT_BUTTON=Po\\u0142\\u0105cz rachunki\nRECEIPT_WIZARD_CHECK_ERROR=Nie mo\\u017Cna podzieli\\u0107 rachunku. Brak p\\u00F3l obowi\\u0105zkowych.\nSELECT_SCHEMA=Wyb\\u00F3r schematu\nPERDIEM_EXPLANATION=Anuluj zaznaczenie poprzez klikni\\u0119cie odpowiedniej ikony\nSUBMIT_DISCLAIMER=Zapisz i prze\\u015Blij\nLUNCH=Obiad\nCREATE_EXPENSE=Tworzenie raportu wydatk\\u00F3w\nMILEAGE=Przebieg\nCOST_ASSIGNMENT=Przypisanie koszt\\u00F3w\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Typ\nOBJECT_TYPE=Wydatki na podr\\u00F3\\u017C s\\u0142u\\u017Cbow\\u0105\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produkty\nLODGING_NIGHT=Nocleg\nDRAFT_WARNING_UNKNOWN=Istnieje ju\\u017C wersja robocza raportu wydatk\\u00F3w. Zwr\\u00F3\\u0107 uwag\\u0119 na to, \\u017Ce niezapisane zmiany zostan\\u0105 utracone.\nSUBMITTED_MSG_NO_APPROVER=Przes\\u0142ano raport z wydatk\\u00F3w.\nPD_ENTER_DEDUCTION=Wprowad\\u017A potr\\u0105cenia\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Rodzaj wydatku\nappDescription=Opis aplikacji\nSPLIT_RECEIPT=Podzia\\u0142 rachunku\nPER_DIEM_DEDUCTIONS=Potr\\u0105cenia rycza\\u0142towe\nDRAFT_LOCKED_BY_USER=Inny u\\u017Cytkownik edytowa\\u0142 wyjazd "{0}" bez zapisywania zmian\\: {1} \\n\\nW przypadku kontynuacji zmiany zostan\\u0105 utracone.\nLUNCH_PK=Obiad - \\u015Bwiadcz. w naturze\nPER_DIEM_MEALS=Posi\\u0142ki\nADJUST_FROM_DATE_TO_DATE=Dostosuj dat\\u0119 rozpocz\\u0119cia i dat\\u0119 zako\\u0144czenia\nSUBMIT_DATE=Data\nCREDIT_CARD_RECEIPT_HEADER=Dost\\u0119pne rachunki\nASSIGN_BUTTON=Przypisz\nCREDIT_CARD_STEP2_BUTTON=Przypisanie do nowego raport z wydatk\\u00F3w\nSCHEMA_MISSING_FIELD_ALERT=Pole schematu podr\\u00F3\\u017Cy jest obowi\\u0105zkowe\nWIZARD_SPLIT_RECEIPT=Podziel rachunek\nHAS_ATTACHMENT=Zawiera nast\\u0119puj\\u0105c\\u0105 liczb\\u0119 za\\u0142\\u0105cznik\\u00F3w\\: {0}\nSUBMIT_REASON=Przyczyna przekroczenia masymalnej r\\u00F3\\u017Cnicy\nEXPENSE_REPORT=Raport wydatk\\u00F3w\nRECEIPT_WIZARD_RECEIPT_DETAILS=Info. dot. rachunku\nNO_CREDIT_CARD_RECEIPT=Brak dost\\u0119pnych rachunk\\u00F3w\nCREDIT_CARD_RECEIPT_TITLE=Uzyskaj dost\\u0119p do bufora rachunk\\u00F3w\nSUBMIT_APPROVER=Osoba zatwierdzaj\\u0105ca\nCANCEL=Anuluj\nWIZARD_SPLIT_RECEIPT_SUCCESS=Utworzono podzielony rachunek\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Szczeg\\u00F3\\u0142y rachunku\nPER_DIEM_RESET_DESC=Ponownie ustaw oczekuj\\u0105ce zmiany (do ostatniego potwierdzenia)\nRECEIPT=Rachunek\nRECEIPT_WIZARD_VENDOR_DETAILS=Szczeg\\u00F3\\u0142y dostawcy\nRECEIPT_COLUMN_ATTACHMENTS=Za\\u0142\\u0105czniki\nEXPENSE_SUBMIT_DISCLAIMER=Przeczyta\\u0142em, zrozumia\\u0142em i akceptuj\\u0119 polityk\\u0119 firmy. O\\u015Bwiadczam, \\u017Ce zgodnie z moj\\u0105 najlepsz\\u0105 wiedz\\u0105 kwoty oraz powi\\u0105zane szczeg\\u00F3\\u0142y s\\u0105 kompletne i dok\\u0142adne.\nRECEIPT_WIZARD_VAT_DETAILS=Szczeg\\u00F3\\u0142y dot. VATu\nAbsolute=Bezwzgl\\u0119dne\nPER_DIEM_DATE=Data\nCREATE_TRIP_BREAK_BUTTON=Utw\\u00F3rz przerw\\u0119 w podr\\u00F3\\u017Cy\nRECEIPT_WIZARD_FLIGHT_DETAILS=Szczeg\\u00F3\\u0142y rezerwacji\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Rodzaj wydatk\\u00F3w jest obowi\\u0105zkowy\nPER_DIEM_TITLE=Rycza\\u0142t\nSUBMIT_ERROR_MSG=Z powodu b\\u0142\\u0119du nie mo\\u017Cna by\\u0142o zapisa\\u0107 raportu wydatk\\u00F3w.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Uczestnicy\nSUBMIT_REASON_LABEL=Przyczyna r\\u00F3\\u017Cnicy\nSAVE_MSG=Zapisano raport wydatk\\u00F3w\nBREAKFAST=\\u015Aniadanie\nRECEIPT_WIZARD_SPLIT_DATA=Dane podzia\\u0142.rachun.\nPER_DIEM_ACCOMODATIONS=Zakwaterowanie\nCREATE_PENDING_TRIP=Dost\\u0119pne \\u017C\\u0105danie/plany podr\\u00F3\\u017Cy\nRECEIPT_WIZARD_STEP2=Krok 2\nPDF_ERROR=Raportu z wydatk\\u00F3w nie mo\\u017Cna wyeksportowa\\u0107 jako pliku PDF.\nCREATE=Utw\\u00F3rz\nTRAVEL_EXPENSE=Wydatki na podr\\u00F3\\u017C s\\u0142u\\u017Cbow\\u0105\nCREDIT_CARD_BUTTON=Uzyskaj dost\\u0119p do bufora rachunk\\u00F3w\nDINNER=Kolacja\nPER_DIEM_APPLY_DESC=Zsynchronizuj oczekuj\\u0105ce zmiany z systemem back end\nCOUPONS=Bony \\u017Cywno\\u015Bciowe\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Dodatkowe informacje dot. przycisku\nSUBMIT=Prze\\u015Blij\nBREAKFAST_PK=\\u015Aniadanie - \\u015Bwiadcz. w naturze\nPercentage=Procent\nNUMBER_FOR_SPLITTING=Liczba rachunk\\u00F3w do utworzenia\nDINNER_PK=Kolacja - \\u015Bwiadcz. w naturze\nUNSAVED_OBJECT_POPOVER_TEXT=Ten raport z wydatk\\u00F3w zawiera niezapisane zmiany wprowadzone przez {0}.\nappTitle=Moje podr\\u00F3\\u017Ce i wydatki V2\nDRAFT_WARNING=Istnieje niezapisana wersja raportu wydatk\\u00F3w "{0}". Zwr\\u00F3\\u0107 uwag\\u0119 na to, \\u017Ce niezapisane zmiany zostan\\u0105 utracone.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_pt.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Destino adicional\nPD_VIEW_DEDUCTION=Visualizar dedu\\u00E7\\u00F5es\nSUBMIT_MANDATORY_ERROR_MSG=Inserir um valor.\nCLOSE=Fechar\nCREDIT_CARD_STEP2_TITLE=Atribuir a um novo relat\\u00F3rio de despesas\nADJUST_RECEIPT_DATE=Ajustar data de recibo\nIS_ITEMIZED=Detalhado\nSUBMITTED_MSG=Seu relat\\u00F3rio de despesas \\u00E9 enviado ao seu autorizador {0}.\nRESET_DEDUCTION=Reinicializar\nMERGE_RECEIPT_BUTTON=Ligar recibos\nRECEIPT_WIZARD_CHECK_ERROR=Imposs\\u00EDvel dividir o recibo. Faltam campos obrigat\\u00F3rios.\nSELECT_SCHEMA=Sele\\u00E7\\u00E3o de esquema\nPERDIEM_EXPLANATION=Desmarcar clicando no \\u00EDcone relevante\nSUBMIT_DISCLAIMER=Gravar e enviar\nLUNCH=Almo\\u00E7o\nCREATE_EXPENSE=Criar relat\\u00F3rio de despesas\nMILEAGE=Quilometragem\nCOST_ASSIGNMENT=Atribui\\u00E7\\u00E3o de custos\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Categoria\nOBJECT_TYPE=Despesa de viagem\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produtos\nLODGING_NIGHT=Pernoite\nDRAFT_WARNING_UNKNOWN=J\\u00E1 existe um relat\\u00F3rio de despesas de esbo\\u00E7o. Observe que as modifica\\u00E7\\u00F5es n\\u00E3o gravadas se perder\\u00E3o.\nSUBMITTED_MSG_NO_APPROVER=Seu relat\\u00F3rio de despesas \\u00E9 enviado.\nPD_ENTER_DEDUCTION=Inserir dedu\\u00E7\\u00F5es\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tipo de despesa\nappDescription=Descri\\u00E7\\u00E3o do app\nSPLIT_RECEIPT=Dividir recibo\nPER_DIEM_DEDUCTIONS=Dedu\\u00E7\\u00F5es di\\u00E1rias\nDRAFT_LOCKED_BY_USER=Outro usu\\u00E1rio editou a viagem "{0}" s/gravar modifica\\u00E7\\u00F5es\\: {1} \\n\\nAs modifs.se perder\\u00E3o se voc\\u00EA cont.\nLUNCH_PK=Pgto.esp\\u00E9cie Almo\\u00E7o\nPER_DIEM_MEALS=Refei\\u00E7\\u00F5es\nADJUST_FROM_DATE_TO_DATE=Ajustar Data de e Data at\\u00E9\nSUBMIT_DATE=Data\nCREDIT_CARD_RECEIPT_HEADER=Recibos dispon\\u00EDveis\nASSIGN_BUTTON=Atribuir\nCREDIT_CARD_STEP2_BUTTON=Atribuir a um novo relat\\u00F3rio de despesas\nSCHEMA_MISSING_FIELD_ALERT=O campo do esquema de viagem \\u00E9 obrigat\\u00F3rio\nWIZARD_SPLIT_RECEIPT=Dividir recibo\nHAS_ATTACHMENT=Inclui {0} anexo(s)\nSUBMIT_REASON=Motivo para exceder diferen\\u00E7a m\\u00E1xima\nEXPENSE_REPORT=Relat\\u00F3rio de despesas\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informa\\u00E7\\u00F5es recibo\nNO_CREDIT_CARD_RECEIPT=Nenhum recibo dispon\\u00EDvel\nCREDIT_CARD_RECEIPT_TITLE=Acessar buffer de recibos\nSUBMIT_APPROVER=Autorizador\nCANCEL=Anular\nWIZARD_SPLIT_RECEIPT_SUCCESS=Recibo dividido criado\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detalhes do recibo\nPER_DIEM_RESET_DESC=Reinicializar modifica\\u00E7\\u00F5es pendentes (como sua \\u00FAltima confirma\\u00E7\\u00E3o)\nRECEIPT=Recibo\nRECEIPT_WIZARD_VENDOR_DETAILS=Detalhes fornecedor\nRECEIPT_COLUMN_ATTACHMENTS=Anexos\nEXPENSE_SUBMIT_DISCLAIMER=Eu li, compreendi e estou de acordo com a pol\\u00EDtica da empresa. Declaro que os valores e detalhes de suporte est\\u00E3o completos e s\\u00E3o precisos tanto quanto \\u00E9 de meu conhecimento.\nRECEIPT_WIZARD_VAT_DETAILS=Detalhes do IVA\nAbsolute=Absoluto\nPER_DIEM_DATE=Data\nCREATE_TRIP_BREAK_BUTTON=Criar interrup\\u00E7\\u00E3o da viagem\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detalhes da reserva\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Tipo de despesa \\u00E9 obrigat\\u00F3rio\nPER_DIEM_TITLE=Di\\u00E1ria\nSUBMIT_ERROR_MSG=N\\u00E3o foi poss\\u00EDvel gravar seu relat\\u00F3rio de despesas porque existe um erro.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participantes\nSUBMIT_REASON_LABEL=Motivo da diferen\\u00E7a\nSAVE_MSG=Seu relat\\u00F3rio de despesas foi gravado\nBREAKFAST=Caf\\u00E9 da manh\\u00E3\nRECEIPT_WIZARD_SPLIT_DATA=Dados divis\\u00E3o recibo\nPER_DIEM_ACCOMODATIONS=Hospedagem\nCREATE_PENDING_TRIP=Planos/solicita\\u00E7\\u00F5es de viagem dispon\\u00EDveis\nRECEIPT_WIZARD_STEP2=Etapa 2\nPDF_ERROR=Seu relat\\u00F3rio de despesas n\\u00E3o pode ser exportado como PDF.\nCREATE=Criar\nTRAVEL_EXPENSE=Despesa de viagem\nCREDIT_CARD_BUTTON=Acessar buffer de recibos\nDINNER=Jantar\nPER_DIEM_APPLY_DESC=Sincronizar suas modifica\\u00E7\\u00F5es pendentes com o back-end\nCOUPONS=Vales-refei\\u00E7\\u00E3o\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Informa\\u00E7\\u00E3o de bot\\u00E3o adicional\nSUBMIT=Enviar\nBREAKFAST_PK=Pgto.esp.Caf\\u00E9 manh\\u00E3\nPercentage=Percentual\nNUMBER_FOR_SPLITTING=N\\u00BA de recibos a criar\nDINNER_PK=Pgto.esp\\u00E9cie Jantar\nUNSAVED_OBJECT_POPOVER_TEXT=Este relat\\u00F3rio de despesas possui modifica\\u00E7\\u00F5es n\\u00E3o gravadas por {0}.\nappTitle=Minhas viagens e despesas V2\nDRAFT_WARNING=Existe uma vers\\u00E3o n\\u00E3o gravada do relat\\u00F3rio de despesas "{0}". Observe que as modifica\\u00E7\\u00F5es n\\u00E3o gravadas se perder\\u00E3o.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_ro.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Destina\\u021Bie suplimentar\\u0103\nPD_VIEW_DEDUCTION=Vizualizare deduceri\nSUBMIT_MANDATORY_ERROR_MSG=Introduce\\u021Bi o valoare.\nCLOSE=\\u00CEnchidere\nCREDIT_CARD_STEP2_TITLE=Alocare la un raport de cheltuieli nou\nADJUST_RECEIPT_DATE=Ajustare dat\\u0103 chitan\\u021B\\u0103\nIS_ITEMIZED=Detaliat\nSUBMITTED_MSG=Raportul dvs. de cheltuieli a fost transmis la aprobatorul dvs. {0}.\nRESET_DEDUCTION=Resetare\nMERGE_RECEIPT_BUTTON=Concatenare chitan\\u021Be\nRECEIPT_WIZARD_CHECK_ERROR=Imposibil de divizat chitan\\u021B\\u0103. C\\u00E2mpuri obligatorii lipsesc.\nSELECT_SCHEMA=Selec\\u021Bie schem\\u0103\nPERDIEM_EXPLANATION=Deselecta\\u021Bi prin click pe icon-ul relevant\nSUBMIT_DISCLAIMER=Salvare \\u0219i transmitere\nLUNCH=Pr\\u00E2nz\nCREATE_EXPENSE=Creare raport de cheltuieli\nMILEAGE=Kilometraj\nCOST_ASSIGNMENT=Alocare costuri\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Categorie\nOBJECT_TYPE=Cheltuieli de deplasare\nRECEIPT_WIZARD_STEP4_PRODUCTS=Produse\nLODGING_NIGHT=Peste noapte\nDRAFT_WARNING_UNKNOWN=Un raport de cheltuieli \\u00EEn versiune preliminar\\u0103 exist\\u0103 deja. Re\\u021Bine\\u021Bi c\\u0103 modific\\u0103rile nesalvate vor fi pierdute.\nSUBMITTED_MSG_NO_APPROVER=Raportul dvs. de cheltuieli a fost transmis.\nPD_ENTER_DEDUCTION=Introducere deduceri\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tip de cheltuieli\nappDescription=Descriere aplic.\nSPLIT_RECEIPT=Divizare chitan\\u021B\\u0103\nPER_DIEM_DEDUCTIONS=Deduceri diurn\\u0103\nDRAFT_LOCKED_BY_USER=Alt utlz a editat deplasarea "{0}" f\\u0103r\\u0103 a salva modif.\\: {1} \\n\\nModif. vor fi pierdute dac\\u0103 continua\\u021Bi.\nLUNCH_PK=Plata\\u00CEnNat Pr\\u00E2nz\nPER_DIEM_MEALS=Mese\nADJUST_FROM_DATE_TO_DATE=Ajustare Dat\\u0103 de la \\u0219i Dat\\u0103 p\\u00E2n\\u0103 la\nSUBMIT_DATE=Dat\\u0103\nCREDIT_CARD_RECEIPT_HEADER=Chitan\\u021Be disponibile\nASSIGN_BUTTON=Alocare\nCREDIT_CARD_STEP2_BUTTON=Alocare la un raport de cheltuieli nou\nSCHEMA_MISSING_FIELD_ALERT=C\\u00E2mp schem\\u0103 deplasare este obligatoriu\nWIZARD_SPLIT_RECEIPT=Divizare chitan\\u021B\\u0103\nHAS_ATTACHMENT=Include {0} anex\\u0103/anexe\nSUBMIT_REASON=Motiv pentru dep\\u0103\\u0219irea diferen\\u021Bei maxime\nEXPENSE_REPORT=Raport de cheltuieli\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informa\\u021Bii chitan\\u021B\\u0103\nNO_CREDIT_CARD_RECEIPT=Nicio chitan\\u021B\\u0103 disponibil\\u0103\nCREDIT_CARD_RECEIPT_TITLE=Accesare memorie buffer chitan\\u021Be\nSUBMIT_APPROVER=Aprobator\nCANCEL=Anulare\nWIZARD_SPLIT_RECEIPT_SUCCESS=Chitan\\u021B\\u0103 divizat\\u0103 creat\\u0103\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detalii chitan\\u021B\\u0103\nPER_DIEM_RESET_DESC=Resetare modific\\u0103ri \\u00EEn a\\u0219teptare (la ultima dvs. confirmare)\nRECEIPT=Chitan\\u021B\\u0103\nRECEIPT_WIZARD_VENDOR_DETAILS=Detalii furnizor\nRECEIPT_COLUMN_ATTACHMENTS=Anexe\nEXPENSE_SUBMIT_DISCLAIMER=Am citit, am \\u00EEn\\u0163eles \\u015Fi m-am conformat cu politica companiei. Declar pe propria r\\u0103spundere c\\u0103 sumele \\u015Fi detaliile justificative sunt complete \\u015Fi exacte.\nRECEIPT_WIZARD_VAT_DETAILS=Detalii TVA\nAbsolute=Absolut\nPER_DIEM_DATE=Dat\\u0103\nCREATE_TRIP_BREAK_BUTTON=Creare \\u00EEntrerupere deplasare\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detalii rezervare\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Tip cheltuieli este obligatoriu\nPER_DIEM_TITLE=Diurn\\u0103\nSUBMIT_ERROR_MSG=Raportul dvs. de cheltuieli nu a putut fi salvat pentru c\\u0103 exist\\u0103 o eroare.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Participan\\u021Bi\nSUBMIT_REASON_LABEL=Motiv pentru diferen\\u021B\\u0103\nSAVE_MSG=Raportul dvs.de cheltuieli a fost salvat\nBREAKFAST=Mic dejun\nRECEIPT_WIZARD_SPLIT_DATA=Date diviz.chitan\\u021B\\u0103\nPER_DIEM_ACCOMODATIONS=Cazare\nCREATE_PENDING_TRIP=Cereri/planuri de deplasare disponibile\nRECEIPT_WIZARD_STEP2=Etapa 2\nPDF_ERROR=Raportul dvs. de cheltuieli nu poate fi exportat ca PDF.\nCREATE=Creare\nTRAVEL_EXPENSE=Cheltuieli de deplasare\nCREDIT_CARD_BUTTON=Accesare memorie buffer chitan\\u021Be\nDINNER=Cin\\u0103\nPER_DIEM_APPLY_DESC=Se sincronizeaz\\u0103 modific\\u0103rile dvs. \\u00EEn a\\u0219teptare cu backend-ul\nCOUPONS=Cupoane de mese\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Informa\\u021Bii buton suplimentare\nSUBMIT=Transmitere\nBREAKFAST_PK=Plata\\u00CEnNat MicDejun\nPercentage=Procentaj\nNUMBER_FOR_SPLITTING=Num\\u0103r de chitan\\u021Be de creat\nDINNER_PK=Plata\\u00CEnNat Cin\\u0103\nUNSAVED_OBJECT_POPOVER_TEXT=Acest raport de cheltuieli are modific\\u0103ri nesalvate efectuate de {0}.\nappTitle=Deplas\\u0103rile \\u0219i cheltuielile mele V2\nDRAFT_WARNING=Exist\\u0103 o versiune nesalvat\\u0103 a raportului de cheltuieli "{0}". Re\\u021Bine\\u021Bi c\\u0103 modific\\u0103rile nesalvate vor fi pierdute.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_ru.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u0414\\u043E\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439 \\u043F\\u0443\\u043D\\u043A\\u0442 \\u043D\\u0430\\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u044F\nPD_VIEW_DEDUCTION=\\u041F\\u0440\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C \\u0432\\u044B\\u0447\\u0435\\u0442\\u044B\nSUBMIT_MANDATORY_ERROR_MSG=\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435.\nCLOSE=\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\nCREDIT_CARD_STEP2_TITLE=\\u041F\\u0440\\u0438\\u0441\\u0432\\u043E\\u0438\\u0442\\u044C \\u043D\\u043E\\u0432\\u043E\\u043C\\u0443 \\u043E\\u0442\\u0447\\u0435\\u0442\\u0443 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445\nADJUST_RECEIPT_DATE=\\u0421\\u043A\\u043E\\u0440\\u0440\\u0435\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u0434\\u0430\\u0442\\u0443 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430\nIS_ITEMIZED=\\u0421 \\u0434\\u0435\\u0442\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u0435\\u0439\nSUBMITTED_MSG=\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D \\u0443\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0430\\u044E\\u0449\\u0435\\u043C\\u0443 {0}.\nRESET_DEDUCTION=\\u0421\\u0431\\u0440\\u043E\\u0441\\u0438\\u0442\\u044C\nMERGE_RECEIPT_BUTTON=\\u041E\\u0431\\u044A\\u0435\\u0434\\u0438\\u043D\\u0438\\u0442\\u044C \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u044B\nRECEIPT_WIZARD_CHECK_ERROR=\\u041D\\u0435\\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442. \\u041E\\u0442\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0442 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u043F\\u043E\\u043B\\u044F.\nSELECT_SCHEMA=\\u0412\\u044B\\u0431\\u043E\\u0440 \\u0441\\u0445\\u0435\\u043C\\u044B\nPERDIEM_EXPLANATION=\\u041E\\u0442\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u0432\\u044B\\u0431\\u043E\\u0440 \\u0449\\u0435\\u043B\\u0447\\u043A\\u043E\\u043C \\u043F\\u043E \\u0437\\u043D\\u0430\\u0447\\u043A\\u0443\nSUBMIT_DISCLAIMER=\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C \\u0438 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\nLUNCH=\\u041E\\u0431\\u0435\\u0434\nCREATE_EXPENSE=\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445\nMILEAGE=\\u041A\\u0438\\u043B\\u043E\\u043C\\u0435\\u0442\\u0440\\u0430\\u0436\nCOST_ASSIGNMENT=\\u041F\\u0440\\u0438\\u0441\\u0432\\u043E\\u0435\\u043D\\u0438\\u0435 \\u0437\\u0430\\u0442\\u0440\\u0430\\u0442\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F\nOBJECT_TYPE=\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043E\\u0447\\u043D\\u044B\\u0435 \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u044B\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u041F\\u0440\\u043E\\u0434\\u0443\\u043A\\u0442\\u044B\nLODGING_NIGHT=\\u041D\\u043E\\u0447\\u044C\nDRAFT_WARNING_UNKNOWN=\\u0427\\u0435\\u0440\\u043D\\u043E\\u0432\\u0438\\u043A \\u043E\\u0442\\u0447\\u0435\\u0442\\u0430 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u0443\\u0436\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442. \\u041E\\u0431\\u0440\\u0430\\u0442\\u0438\\u0442\\u0435 \\u0432\\u043D\\u0438\\u043C\\u0430\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u044B.\nSUBMITTED_MSG_NO_APPROVER=\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D.\nPD_ENTER_DEDUCTION=\\u0412\\u0432\\u0435\\u0441\\u0442\\u0438 \\u0432\\u044B\\u0447\\u0435\\u0442\\u044B\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u0412\\u0438\\u0434 \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u043E\\u0432\nappDescription=\\u041E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u044F\nSPLIT_RECEIPT=\\u0420\\u0430\\u0437\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nPER_DIEM_DEDUCTIONS=\\u041F\\u0430\\u0443\\u0448\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0432\\u044B\\u0447\\u0435\\u0442\\u044B\nDRAFT_LOCKED_BY_USER=\\u0414\\u0440\\u0443\\u0433\\u043E\\u0439 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C \\u043E\\u0442\\u0440\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043B \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0443 "{0}" \\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u043B \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F\\: {1} \\n\\n\\u0415\\u0441\\u043B\\u0438 \\u043F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C, \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u044B.\nLUNCH_PK=\\u041F\\u043B\\u0430\\u0442\\u0435\\u0436 \\u0437\\u0430 \\u043E\\u0431\\u0435\\u0434\nPER_DIEM_MEALS=\\u041E\\u0431\\u0435\\u0434\\u044B\nADJUST_FROM_DATE_TO_DATE=\\u0421\\u043A\\u043E\\u0440\\u0440\\u0435\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u0434\\u0430\\u0442\\u0443 \\u043D\\u0430\\u0447\\u0430\\u043B\\u0430 \\u0438 \\u0434\\u0430\\u0442\\u0443 \\u043E\\u043A\\u043E\\u043D\\u0447\\u0430\\u043D\\u0438\\u044F\nSUBMIT_DATE=\\u0414\\u0430\\u0442\\u0430\nCREDIT_CARD_RECEIPT_HEADER=\\u0414\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u044B\\u0435 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u044B\nASSIGN_BUTTON=\\u041F\\u0440\\u0438\\u0441\\u0432\\u043E\\u0438\\u0442\\u044C\nCREDIT_CARD_STEP2_BUTTON=\\u041F\\u0440\\u0438\\u0441\\u0432\\u043E\\u0438\\u0442\\u044C \\u043D\\u043E\\u0432\\u043E\\u043C\\u0443 \\u043E\\u0442\\u0447\\u0435\\u0442\\u0443 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445\nSCHEMA_MISSING_FIELD_ALERT=\\u041F\\u043E\\u043B\\u0435 \\u0441\\u0445\\u0435\\u043C\\u044B \\u043F\\u043E\\u0435\\u0437\\u0434\\u043A\\u0438 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\nWIZARD_SPLIT_RECEIPT=\\u0420\\u0430\\u0437\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nHAS_ATTACHMENT=\\u0415\\u0441\\u0442\\u044C \\u0432\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u044F\\: {0}\nSUBMIT_REASON=\\u041F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0430 \\u043F\\u0440\\u0435\\u0432\\u044B\\u0448\\u0435\\u043D\\u0438\\u044F \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0437\\u043D\\u0438\\u0446\\u044B\nEXPENSE_REPORT=\\u041E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430\nNO_CREDIT_CARD_RECEIPT=\\u0414\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u044B \\u043D\\u0435\\u0434\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u044B\nCREDIT_CARD_RECEIPT_TITLE=\\u0414\\u043E\\u0441\\u0442\\u0443\\u043F \\u043A \\u0431\\u0443\\u0444\\u0435\\u0440\\u0443 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432\nSUBMIT_APPROVER=\\u0423\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0430\\u044E\\u0449\\u0438\\u0439\nCANCEL=\\u041E\\u0442\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u0420\\u0430\\u0437\\u0434\\u0435\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u043E\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u0414\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043F\\u043E \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0443\nPER_DIEM_RESET_DESC=\\u0421\\u0431\\u0440\\u043E\\u0441\\u0438\\u0442\\u044C \\u043E\\u0436\\u0438\\u0434\\u0430\\u044E\\u0449\\u0438\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F (\\u043D\\u0430 \\u043F\\u043E\\u0441\\u043B\\u0435\\u0434\\u043D\\u0438\\u0435 \\u043F\\u043E\\u0434\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u043D\\u044B\\u0435)\nRECEIPT=\\u0414\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u0421\\u0432\\u0435\\u0434\\u0435\\u043D\\u0438\\u044F \\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\\u0432\\u0449\\u0438\\u043A\\u0435\nRECEIPT_COLUMN_ATTACHMENTS=\\u0412\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u044F\nEXPENSE_SUBMIT_DISCLAIMER=\\u041C\\u043D\\u043E\\u044E \\u043F\\u0440\\u043E\\u0447\\u0438\\u0442\\u0430\\u043D\\u0430, \\u0443\\u0441\\u0432\\u043E\\u0435\\u043D\\u0430 \\u0438 \\u0441\\u043E\\u0431\\u043B\\u044E\\u0434\\u0435\\u043D\\u0430 \\u043F\\u043E\\u043B\\u0438\\u0442\\u0438\\u043A\\u0430 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438. \\u042F \\u0437\\u0430\\u044F\\u0432\\u043B\\u044F\\u044E, \\u0447\\u0442\\u043E \\u0441\\u0443\\u043C\\u043C\\u044B \\u0438 \\u0441\\u043E\\u043F\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u0437\\u0430\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u044B \\u043F\\u043E\\u043B\\u043D\\u043E\\u0441\\u0442\\u044C\\u044E \\u0438 \\u0442\\u043E\\u0447\\u043D\\u043E.\nRECEIPT_WIZARD_VAT_DETAILS=\\u0421\\u0432\\u0435\\u0434\\u0435\\u043D\\u0438\\u044F \\u043E\\u0431 \\u041D\\u0414\\u0421\nAbsolute=\\u0410\\u0431\\u0441\\u043E\\u043B\\u044E\\u0442\\u043D.\nPER_DIEM_DATE=\\u0414\\u0430\\u0442\\u0430\nCREATE_TRIP_BREAK_BUTTON=\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u043F\\u0440\\u0435\\u0440\\u044B\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u0421\\u0432\\u0435\\u0434\\u0435\\u043D\\u0438\\u044F \\u043E \\u0431\\u0440\\u043E\\u043D\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u0412\\u0438\\u0434 \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u043E\\u0432 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u0435\\u043D\nPER_DIEM_TITLE=\\u0421\\u0443\\u0442\\u043E\\u0447\\u043D\\u044B\\u0435\nSUBMIT_ERROR_MSG=\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u043D\\u0435 \\u0443\\u0434\\u0430\\u043B\\u043E\\u0441\\u044C \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C, \\u0442\\u0430\\u043A \\u043A\\u0430\\u043A \\u0438\\u043C\\u0435\\u0435\\u0442\\u0441\\u044F \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u0423\\u0447\\u0430\\u0441\\u0442\\u043D\\u0438\\u043A\\u0438\nSUBMIT_REASON_LABEL=\\u041F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0430 \\u0440\\u0430\\u0437\\u043D\\u0438\\u0446\\u044B\nSAVE_MSG=\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\nBREAKFAST=\\u0417\\u0430\\u0432\\u0442\\u0440\\u0430\\u043A\nRECEIPT_WIZARD_SPLIT_DATA=\\u0414\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043B\\u0435\\u043D\\u0438\\u044F \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430\nPER_DIEM_ACCOMODATIONS=\\u041F\\u0440\\u043E\\u0436\\u0438\\u0432\\u0430\\u043D\\u0438\\u0435\nCREATE_PENDING_TRIP=\\u0414\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u044B\\u0435 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0438 \\u043D\\u0430 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0443/\\u043F\\u043B\\u0430\\u043D\\u044B\nRECEIPT_WIZARD_STEP2=\\u0428\\u0430\\u0433 2\nPDF_ERROR=\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u043D\\u0435\\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E \\u044D\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u0432 PDF.\nCREATE=\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C\nTRAVEL_EXPENSE=\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043E\\u0447\\u043D\\u044B\\u0435 \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u044B\nCREDIT_CARD_BUTTON=\\u0414\\u043E\\u0441\\u0442\\u0443\\u043F \\u043A \\u0431\\u0443\\u0444\\u0435\\u0440\\u0443 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432\nDINNER=\\u0423\\u0436\\u0438\\u043D\nPER_DIEM_APPLY_DESC=\\u0421\\u0438\\u043D\\u0445\\u0440\\u043E\\u043D\\u0438\\u0437\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043E\\u0436\\u0438\\u0434\\u0430\\u044E\\u0449\\u0438\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F \\u0441 \\u0431\\u044D\\u043A\\u044D\\u043D\\u0434\\u043E\\u043C\nCOUPONS=\\u0422\\u0430\\u043B\\u043E\\u043D\\u044B \\u043D\\u0430 \\u043F\\u0438\\u0442\\u0430\\u043D\\u0438\\u0435\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u043E \\u0434\\u043E\\u043F. \\u043A\\u043D\\u043E\\u043F\\u043A\\u0430\\u0445\nSUBMIT=\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\nBREAKFAST_PK=\\u041F\\u043B\\u0430\\u0442\\u0435\\u0436 \\u0437\\u0430 \\u0437\\u0430\\u0432\\u0442\\u0440\\u0430\\u043A\nPercentage=\\u041F\\u0440\\u043E\\u0446\\u0435\\u043D\\u0442\nNUMBER_FOR_SPLITTING=\\u0427\\u0438\\u0441\\u043B\\u043E \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432 \\u0434\\u043B\\u044F \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0438\\u044F\nDINNER_PK=\\u041F\\u043B\\u0430\\u0442\\u0435\\u0436 \\u0437\\u0430 \\u0443\\u0436\\u0438\\u043D\nUNSAVED_OBJECT_POPOVER_TEXT=\\u042D\\u0442\\u043E\\u0442 \\u043E\\u0442\\u0447\\u0435\\u0442 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F {0}.\nappTitle=\\u041C\\u043E\\u0438 \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438 \\u0438 \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u044B, \\u0432\\u0435\\u0440\\u0441\\u0438\\u044F 2\nDRAFT_WARNING=\\u0421\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u0430\\u044F \\u0432\\u0435\\u0440\\u0441\\u0438\\u044F \\u043E\\u0442\\u0447\\u0435\\u0442\\u0430 \\u043E \\u0440\\u0430\\u0441\\u0445\\u043E\\u0434\\u0430\\u0445 "{0}". \\u041E\\u0431\\u0440\\u0430\\u0442\\u0438\\u0442\\u0435 \\u0432\\u043D\\u0438\\u043C\\u0430\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u043D\\u044B.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_sh.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dodatno odredi\\u0161te\nPD_VIEW_DEDUCTION=Prika\\u017Ei odbitke\nSUBMIT_MANDATORY_ERROR_MSG=Unesite vrednost.\nCLOSE=Zatvori\nCREDIT_CARD_STEP2_TITLE=Dodeli novom izve\\u0161taju o tro\\u0161kovima.\nADJUST_RECEIPT_DATE=Uskladi datum priznanice\nIS_ITEMIZED=Odre\\u0111eno\nSUBMITTED_MSG=Va\\u0161 izve\\u0161taj o tro\\u0161kovima podnet je va\\u0161em davaocu odobrenja {0}.\nRESET_DEDUCTION=Ponovo postavi\nMERGE_RECEIPT_BUTTON=Spoji priznanice\nRECEIPT_WIZARD_CHECK_ERROR=Nije mogu\\u0107e podeliti priznanicu. Obavezna polja nedostaju.\nSELECT_SCHEMA=Odabir \\u0161eme\nPERDIEM_EXPLANATION=Poni\\u0161tite odabir klikom na odgovaraju\\u0107u ikonu\nSUBMIT_DISCLAIMER=Sa\\u010Duvaj i podnesi\nLUNCH=Ru\\u010Dak\nCREATE_EXPENSE=Kreiraj izve\\u0161taj o tro\\u0161kovima\nMILEAGE=Kilometra\\u017Ea\nCOST_ASSIGNMENT=Dodela tro\\u0161kova\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategorija\nOBJECT_TYPE=Putni tro\\u0161kovi\nRECEIPT_WIZARD_STEP4_PRODUCTS=Proizvodi\nLODGING_NIGHT=No\\u0107enje\nDRAFT_WARNING_UNKNOWN=Nacrt izve\\u0161taja o tro\\u0161kovima ve\\u0107 postoji. Imajte u vidu da \\u0107e nesa\\u010Duvane promene biti izgubljene.\nSUBMITTED_MSG_NO_APPROVER=Va\\u0161 izve\\u0161taj o tro\\u0161kovima jr podnet.\nPD_ENTER_DEDUCTION=Unesi odbitke\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Tip tro\\u0161kova\nappDescription=Opis aplikacije\nSPLIT_RECEIPT=Podeli priznanicu\nPER_DIEM_DEDUCTIONS=Dnevni odbici\nDRAFT_LOCKED_BY_USER=Drugi korisnik je uredio putovanje "{0}" bez snimanja promena\\: {1} \\n\\nPromene \\u0107e biti izgubljene ako nastavite.\nLUNCH_PK=Pla\\u0107UNaturi-ru\\u010Dak\nPER_DIEM_MEALS=Hrana\nADJUST_FROM_DATE_TO_DATE=Uskladi datum od i datum do\nSUBMIT_DATE=Datum\nCREDIT_CARD_RECEIPT_HEADER=Dostupne priznanice\nASSIGN_BUTTON=Dodeli\nCREDIT_CARD_STEP2_BUTTON=Dodeli novom izve\\u0161taju o tro\\u0161kovima.\nSCHEMA_MISSING_FIELD_ALERT=Polje \\u0161eme putovanja je obavezno\nWIZARD_SPLIT_RECEIPT=Podeli priznanicu\nHAS_ATTACHMENT=Uklju\\u010Duje {0} dodatak(a)\nSUBMIT_REASON=Razlog za prekora\\u010Denje maksimalne razlike\nEXPENSE_REPORT=Izve\\u0161taj o tro\\u0161kovima\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informacije o priznanici\nNO_CREDIT_CARD_RECEIPT=Priznanice nisu dostupne\nCREDIT_CARD_RECEIPT_TITLE=Pristupi me\\u0111umemoriji priznanice\nSUBMIT_APPROVER=Davalac odobrenja\nCANCEL=Odustani\nWIZARD_SPLIT_RECEIPT_SUCCESS=Podeljena priznanica kreirana\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detalji priznanice\nPER_DIEM_RESET_DESC=Ponovo postavi promene na \\u010Dekanju (na poslednju potvrdu)\nRECEIPT=Priznanica\nRECEIPT_WIZARD_VENDOR_DETAILS=Detalji dobavlja\\u010Da\nRECEIPT_COLUMN_ATTACHMENTS=Dodaci\nEXPENSE_SUBMIT_DISCLAIMER=Pro\\u010Ditao sam, razumeo i saglasan sam s politikom kompanije. Izjavljujem da su iznosi i prate\\u0107i detalji potpuni i ta\\u010Dni prema mom uverenju.\nRECEIPT_WIZARD_VAT_DETAILS=Detalji PDV-a\nAbsolute=Apsolutno\nPER_DIEM_DATE=Datum\nCREATE_TRIP_BREAK_BUTTON=Kreiraj prekid putovanja\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detalji rezervacije\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Tip tro\\u0161kova je obavezan\nPER_DIEM_TITLE=Pau\\u0161alno\nSUBMIT_ERROR_MSG=Va\\u0161 izve\\u0161taj o tro\\u0161kovima nije mogu\\u0107e sa\\u010Duvati zato \\u0161to postoji gre\\u0161ka.\nRECEIPT_WIZARD_STEP3_ATTENDEES=U\\u010Desnici\nSUBMIT_REASON_LABEL=Razlog za razliku\nSAVE_MSG=Va\\u0161 izve\\u0161taj o tro\\u0161kovima je sa\\u010Duvan\nBREAKFAST=Doru\\u010Dak\nRECEIPT_WIZARD_SPLIT_DATA=Podaci podele priznanice\nPER_DIEM_ACCOMODATIONS=Sme\\u0161taj\nCREATE_PENDING_TRIP=Dostupni zahtevi za putovanje/planovi putovanja\nRECEIPT_WIZARD_STEP2=Korak 2\nPDF_ERROR=Va\\u0161 izve\\u0161taj o tro\\u0161kovima ne se mo\\u017Ee izvesti kao PDF.\nCREATE=Kreiraj\nTRAVEL_EXPENSE=Putni tro\\u0161kovi\nCREDIT_CARD_BUTTON=Pristupi me\\u0111umemoriji prijema\nDINNER=Ve\\u010Dera\nPER_DIEM_APPLY_DESC=Sinhronizujte svoje promene na \\u010Dekanju sa back end-om\nCOUPONS=Bonovi za ishranu\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Dodatne informacije o dugmetu\nSUBMIT=Podnesi\nBREAKFAST_PK=Pla\\u0107UNaturi-doru\\u010Dak\nPercentage=Procenat\nNUMBER_FOR_SPLITTING=Beoj priznanica za kreiranje\nDINNER_PK=Pla\\u0107UNaturi-ve\\u010Dera\nUNSAVED_OBJECT_POPOVER_TEXT=Ovaj izve\\u0161taj o tro\\u0161kovima ima nesa\\u010Duvane promene od strane {0}.\nappTitle=Moja putovanja i tro\\u0161kovi V2\nDRAFT_WARNING=Postoji nesa\\u010Duvana verzija izve\\u0161taja o tro\\u0161kovima "{0}". Imajte u vidu da \\u0107e nesa\\u010Duvane promene biti izgubljene.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_sk.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dodato\\u010Dn\\u00E9 miesto ur\\u010Denia\nPD_VIEW_DEDUCTION=Zobrazi\\u0165 zr\\u00E1\\u017Eky\nSUBMIT_MANDATORY_ERROR_MSG=Zadajte hodnotu.\nCLOSE=Zatvori\\u0165\nCREDIT_CARD_STEP2_TITLE=Priradi\\u0165 k nov\\u00E9mu V\\u00FDkazu n\\u00E1kladov\nADJUST_RECEIPT_DATE=Upravi\\u0165 d\\u00E1tum potvrdenky\nIS_ITEMIZED=Polo\\u017Ekovit\\u00FD doklad\nSUBMITTED_MSG=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdavkov sa odovzd\\u00E1 v\\u00E1\\u0161mu schva\\u013Eovate\\u013Eovi {0}.\nRESET_DEDUCTION=Resetova\\u0165\nMERGE_RECEIPT_BUTTON=Zl\\u00FA\\u010Di\\u0165 doklady\nRECEIPT_WIZARD_CHECK_ERROR=Nie je mo\\u017En\\u00E9 potvrdenku rozdeli\\u0165. Ch\\u00FDbaj\\u00FA povinn\\u00E9 polia.\nSELECT_SCHEMA=V\\u00FDber sch\\u00E9my\nPERDIEM_EXPLANATION=Zru\\u0161i\\u0165 v\\u00FDber kliknut\\u00EDm na pr\\u00EDslu\\u0161n\\u00FA ikonu\nSUBMIT_DISCLAIMER=Ulo\\u017Ei\\u0165 a odosla\\u0165\nLUNCH=Obed\nCREATE_EXPENSE=Vytvori\\u0165 z\\u00FA\\u010Dtovanie v\\u00FDdavkov\nMILEAGE=Vzdialenos\\u0165\nCOST_ASSIGNMENT=Priradenie n\\u00E1kladov\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kateg\\u00F3ria\nOBJECT_TYPE=Cestovn\\u00E9 v\\u00FDdavky \nRECEIPT_WIZARD_STEP4_PRODUCTS=Produkty\nLODGING_NIGHT=Prenocovanie\nDRAFT_WARNING_UNKNOWN=N\\u00E1vrh v\\u00FDkazu v\\u00FDdavkov u\\u017E existuje. Nezabudnite, \\u017Ee neulo\\u017Een\\u00E9 zmeny sa stratia.\nSUBMITTED_MSG_NO_APPROVER=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdavkov sa odovzdal.\nPD_ENTER_DEDUCTION=Zada\\u0165 zr\\u00E1\\u017Eky\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Typ v\\u00FDdavkov\nappDescription=Prida\\u0165 popis\nSPLIT_RECEIPT=Rozdeli\\u0165 potvrdenku\nPER_DIEM_DEDUCTIONS=Zr\\u00E1\\u017Eky pau\\u0161\\u00E1lu\nDRAFT_LOCKED_BY_USER=In\\u00FD pou\\u017E. spracoval cestu "{0}" bez ulo\\u017Eenia zmien\\: {1} \\n\\nAk budete pokra\\u010Dova\\u0165, zmeny sa stratia.\nLUNCH_PK=Nepe\\u0148a\\u017En\\u00E9 plnenie obedu\nPER_DIEM_MEALS=Stravovanie\nADJUST_FROM_DATE_TO_DATE=Upravi\\u0165 D\\u00E1tum od a D\\u00E1tum do\nSUBMIT_DATE=D\\u00E1tum\nCREDIT_CARD_RECEIPT_HEADER=Dostupn\\u00E9 doklady\nASSIGN_BUTTON=Priradi\\u0165\nCREDIT_CARD_STEP2_BUTTON=Priradi\\u0165 k nov\\u00E9mu V\\u00FDkazu n\\u00E1kladov\nSCHEMA_MISSING_FIELD_ALERT=Pole sch\\u00E9my cesty je povinn\\u00E9\nWIZARD_SPLIT_RECEIPT=Rozdeli\\u0165 potvrdenku\nHAS_ATTACHMENT=Obsahuje {0} pr\\u00EDloh(y)\nSUBMIT_REASON=D\\u00F4vod na prekro\\u010Denie maxim\\u00E1lneho rozdielu\nEXPENSE_REPORT=Z\\u00FA\\u010Dtovanie v\\u00FDdavkov\nRECEIPT_WIZARD_RECEIPT_DETAILS=Info o potvrdenke\nNO_CREDIT_CARD_RECEIPT=Nie s\\u00FA dostupn\\u00E9 \\u017Eiadne doklady\nCREDIT_CARD_RECEIPT_TITLE=Pr\\u00EDstup do bufera dokladov\nSUBMIT_APPROVER=Schva\\u013Eovate\\u013E\nCANCEL=Zru\\u0161i\\u0165\nWIZARD_SPLIT_RECEIPT_SUCCESS=Rozdelen\\u00FD doklad vytvoren\\u00FD\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detaily potvrdenky\nPER_DIEM_RESET_DESC=Vynulova\\u0165 nevybaven\\u00E9 zmeny (po va\\u0161e posledn\\u00E9 potvrdenie)\nRECEIPT=Potvrdenka\nRECEIPT_WIZARD_VENDOR_DETAILS=Detaily dod\\u00E1vate\\u013Ea\nRECEIPT_COLUMN_ATTACHMENTS=Pr\\u00EDlohy\nEXPENSE_SUBMIT_DISCLAIMER=Pre\\u010D\\u00EDtal som si politiku spolo\\u010Dnosti, porozumel som jej a s\\u00FAhlas\\u00EDm s \\u0148ou. \\u010Cestne prehlasujem, \\u017Ee \\u010Diastky a \\u010Fal\\u0161ie detaily s\\u00FA kompletn\\u00E9 a spr\\u00E1vne.\nRECEIPT_WIZARD_VAT_DETAILS=Detaily DPH\nAbsolute=Absol\\u00FAtne\nPER_DIEM_DATE=D\\u00E1tum\nCREATE_TRIP_BREAK_BUTTON=Vytvori\\u0165 preru\\u0161enie cesty\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detaily rezerv\\u00E1cie\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Druh v\\u00FDdavku je povinn\\u00FD\nPER_DIEM_TITLE=Pau\\u0161\\u00E1l\nSUBMIT_ERROR_MSG=V\\u00E1\\u0161 V\\u00FDkaz n\\u00E1kladov sa kv\\u00F4li chybe nepodarilo ulo\\u017Ei\\u0165.\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u00DA\\u010Dastn\\u00EDci\nSUBMIT_REASON_LABEL=D\\u00F4vod na rozdiel\nSAVE_MSG=Va\\u0161e z\\u00FA\\u010Dtovanie v\\u00FDdavkov bolo ulo\\u017Een\\u00E9\nBREAKFAST=Ra\\u0148ajky\nRECEIPT_WIZARD_SPLIT_DATA=D\\u00E1ta rozd.potvrdenky\nPER_DIEM_ACCOMODATIONS=Ubytovanie\nCREATE_PENDING_TRIP=Dostupn\\u00E9 \\u017Eiadosti o cestu/pl\\u00E1ny\nRECEIPT_WIZARD_STEP2=Krok 2\nPDF_ERROR=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdavkov nie je mo\\u017En\\u00E9 exportova\\u0165 ako PDF.\nCREATE=Vytvori\\u0165\nTRAVEL_EXPENSE=Cestovn\\u00E9 v\\u00FDdavky\nCREDIT_CARD_BUTTON=Pr\\u00EDstup do bufera dokladov\nDINNER=Ve\\u010Dera\nPER_DIEM_APPLY_DESC=Synchronizujte svoje nevybaven\\u00E9 zmeny s backendom\nCOUPONS=Stravn\\u00E9 l\\u00EDstky\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Doplnk.info o tla\\u010Didle\nSUBMIT=Odosla\\u0165\nBREAKFAST_PK=Nepe\\u0148a\\u017En\\u00E9 plnenie ra\\u0148ajok\nPercentage=Percento\nNUMBER_FOR_SPLITTING=Po\\u010Det potvrdeniek na vytvorenie\nDINNER_PK=Nepe\\u0148a\\u017En\\u00E9 plnenie ve\\u010Dere\nUNSAVED_OBJECT_POPOVER_TEXT=V\\u00E1\\u0161 v\\u00FDkaz v\\u00FDdavkov m\\u00E1 neulo\\u017Een\\u00E9 zmeny, ktor\\u00E9 vykonal {0}.\nappTitle=Moje cesty a v\\u00FDdavky V2\nDRAFT_WARNING=Existuje neulo\\u017Een\\u00E1 verzia v\\u00FDkazu v\\u00FDdavkov "{0}". Nezabudnite, \\u017Ee neulo\\u017Een\\u00E9 zmeny sa stratia.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_sl.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Dodatni cilj potovanja\nPD_VIEW_DEDUCTION=Prikaz odbitkov\nSUBMIT_MANDATORY_ERROR_MSG=Vnesite vrednost.\nCLOSE=Zapiranje\nCREDIT_CARD_STEP2_TITLE=Dodelitev novemu obra\\u010Dunu stro\\u0161kov\nADJUST_RECEIPT_DATE=Prilagoditev datuma potrdila\nIS_ITEMIZED=Po postavkah\nSUBMITTED_MSG=Va\\u0161 obra\\u010Dun stro\\u0161kov je bil poslan va\\u0161emu odobritelju {0}.\nRESET_DEDUCTION=Ponastavitev\nMERGE_RECEIPT_BUTTON=Zdru\\u017Eitev dokumentov\nRECEIPT_WIZARD_CHECK_ERROR=Razdelitev potrdila ni mogo\\u010Da. Manjkajo obvezna polja.\nSELECT_SCHEMA=Izbira sheme\nPERDIEM_EXPLANATION=Odstranite izbiro, tako da kliknete na ustrezno ikono\nSUBMIT_DISCLAIMER=Shrani in po\\u0161lji\nLUNCH=Kosilo\nCREATE_EXPENSE=Kreiranje obra\\u010Duna stro\\u0161kov\nMILEAGE=Stanje kilometrine\nCOST_ASSIGNMENT=Dodelitev stro\\u0161kov\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategorija\nOBJECT_TYPE=Potni stro\\u0161ki\nRECEIPT_WIZARD_STEP4_PRODUCTS=Proizvodi\nLODGING_NIGHT=No\\u010Ditev\nDRAFT_WARNING_UNKNOWN=Osnutek obra\\u010Duna stro\\u0161kov \\u017Ee obstaja. Neshranjene spremembe bodo izgubljene.\nSUBMITTED_MSG_NO_APPROVER=Va\\u0161 obra\\u010Dun stro\\u0161kov je bil poslan.\nPD_ENTER_DEDUCTION=Vnos odbitkov\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Vrsta stro\\u0161ka\nappDescription=Opis aplikacije\nSPLIT_RECEIPT=Razdelitev potrdila\nPER_DIEM_DEDUCTIONS=Pav\\u0161alni odbitki\nDRAFT_LOCKED_BY_USER=Drug upor.je uredil potov. "{0}" brez shranj. sprem.\\: {1} \\n\\n\\u010Ce nadaljujete, bodo spremembe izgubljene.\nLUNCH_PK=Kos. - pl. v naravi\nPER_DIEM_MEALS=Prehrana\nADJUST_FROM_DATE_TO_DATE=Prilagoditev datuma za\\u010Detka in datuma konca\nSUBMIT_DATE=Datum\nCREDIT_CARD_RECEIPT_HEADER=Razpolo\\u017Eljiva potrdila\nASSIGN_BUTTON=Dodelitev\nCREDIT_CARD_STEP2_BUTTON=Dodelitev novemu obra\\u010Dunu stro\\u0161kov\nSCHEMA_MISSING_FIELD_ALERT=Polje sheme potovanja je obvezno\nWIZARD_SPLIT_RECEIPT=Razdelitev potrdila\nHAS_ATTACHMENT=Vklju\\u010Duje {0} prilog\nSUBMIT_REASON=Razlog za prekora\\u010Ditev maksimalne razlike\nEXPENSE_REPORT=Obra\\u010Dun stro\\u0161kov\nRECEIPT_WIZARD_RECEIPT_DETAILS=Informacije o potrdilu\nNO_CREDIT_CARD_RECEIPT=Potrdila niso na voljo\nCREDIT_CARD_RECEIPT_TITLE=Dostop do medpomnilnika potrdil\nSUBMIT_APPROVER=Odobritelj\nCANCEL=Preklic\nWIZARD_SPLIT_RECEIPT_SUCCESS=Razdelitev potrdila kreirana\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Detajli potrdila\nPER_DIEM_RESET_DESC=Ponastavitev odprtih sprememb (na va\\u0161o zadnjo potrditev)\nRECEIPT=Potrdilo\nRECEIPT_WIZARD_VENDOR_DETAILS=Detajli ponudnika\nRECEIPT_COLUMN_ATTACHMENTS=Priloge\nEXPENSE_SUBMIT_DISCLAIMER=Prebral sem, razumel in upo\\u0161teval smernice podjetja. Izjavljam, da so zneski in dodatne informacije po moji najbolj\\u0161i vednosti popolne in to\\u010Dne.\nRECEIPT_WIZARD_VAT_DETAILS=DDV-detajli\nAbsolute=Absolutno\nPER_DIEM_DATE=Datum\nCREATE_TRIP_BREAK_BUTTON=Kreiranje prekinitve potovanja\nRECEIPT_WIZARD_FLIGHT_DETAILS=Detajli rezervacije\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Vrsta stro\\u0161kov je obvezna\nPER_DIEM_TITLE=Dnevnica\nSUBMIT_ERROR_MSG=Va\\u0161ega obra\\u010Duna stro\\u0161kov ni bilo mogo\\u010De shraniti, ker obstaja napaka.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Udele\\u017Eenci\nSUBMIT_REASON_LABEL=Razlog za razliko\nSAVE_MSG=Va\\u0161 obra\\u010Dun stro\\u0161kov je bil shranjen\nBREAKFAST=Zajtrk\nRECEIPT_WIZARD_SPLIT_DATA=Podatki o razdelitvi potrdila\nPER_DIEM_ACCOMODATIONS=Nastanitev\nCREATE_PENDING_TRIP=Razpolo\\u017Eljive zahteve za potovanje/plani\nRECEIPT_WIZARD_STEP2=Korak 2\nPDF_ERROR=Va\\u0161ega obra\\u010Duna stro\\u0161kov ni mogo\\u010De izvoziti kot PDF.\nCREATE=Kreiranje\nTRAVEL_EXPENSE=Potni stro\\u0161ki\nCREDIT_CARD_BUTTON=Dostop do medpomnilnika potrdil\nDINNER=Ve\\u010Derja\nPER_DIEM_APPLY_DESC=Sinhronizirajte va\\u0161e odprte spremembe z zalednim sistemom\nCOUPONS=Kuponi za prehrano\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Dodatne informacije o gumbu\nSUBMIT=Po\\u0161iljanje\nBREAKFAST_PK=Zajtrk - pl. v nar.\nPercentage=Odstotek\nNUMBER_FOR_SPLITTING=\\u0160tevilo potrdil za kreiranje\nDINNER_PK=Obrok - pl. v naravi\nUNSAVED_OBJECT_POPOVER_TEXT=Ta obra\\u010Dun stro\\u0161kov ima neshranjene spremembe, ki jih je izvedel {0}.\nappTitle=Moja potovanja in stro\\u0161ki V2\nDRAFT_WARNING=Obstaja neshranjena razli\\u010Dica obra\\u010Duna stro\\u0161kov "{0}". Neshranjene spremembe bodo izgubljene.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_tr.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=Ek hedef\nPD_VIEW_DEDUCTION=Kesintileri g\\u00F6r\\u00FCnt\\u00FCle\nSUBMIT_MANDATORY_ERROR_MSG=De\\u011Fer girin.\nCLOSE=Kapat\nCREDIT_CARD_STEP2_TITLE=Yeni gider raporuna tayin yap\\u0131n\nADJUST_RECEIPT_DATE=Giri\\u015F tarihini ayarla\nIS_ITEMIZED=D\\u00F6k\\u00FCm\\u00FC al\\u0131nd\\u0131\nSUBMITTED_MSG=Gider raporunuz {0} onaylayan\\u0131n\\u0131za g\\u00F6nderildi.\nRESET_DEDUCTION=Geri al\nMERGE_RECEIPT_BUTTON=Belgeleri birle\\u015Ftir\nRECEIPT_WIZARD_CHECK_ERROR=Belge ayr\\u0131\\u015Ft\\u0131r\\u0131lam\\u0131yor. Zorunlu alanlar eksik.\nSELECT_SCHEMA=\\u015Eema se\\u00E7imi\nPERDIEM_EXPLANATION=\\u0130lgili ikona t\\u0131klayarak se\\u00E7imi kald\\u0131r\nSUBMIT_DISCLAIMER=Kaydet ve g\\u00F6nder\nLUNCH=\\u00D6\\u011Fle yeme\\u011Fi\nCREATE_EXPENSE=Gider raporu olu\\u015Ftur\nMILEAGE=Katedilen yol\nCOST_ASSIGNMENT=Masraf tayini\nRECEIPT_COLUMN_EXPENSE_CATEGORY=Kategori\nOBJECT_TYPE=Seyahat gideri\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u00DCr\\u00FCnler\nLODGING_NIGHT=Gecelik\nDRAFT_WARNING_UNKNOWN=Taslak gider raporu zaten var. Kaydedilmeyen de\\u011Fi\\u015Fikliklerin kaybolaca\\u011F\\u0131n\\u0131 unutmay\\u0131n.\nSUBMITTED_MSG_NO_APPROVER=Gider raporunuz g\\u00F6nderildi.\nPD_ENTER_DEDUCTION=Kesintiler ekle\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=Gider t\\u00FCr\\u00FC\nappDescription=Uygulama tan\\u0131m\\u0131\nSPLIT_RECEIPT=Belgeyi ayr\\u0131\\u015Ft\\u0131r\nPER_DIEM_DEDUCTIONS=Harc\\u0131rah kesintileri\nDRAFT_LOCKED_BY_USER=Ba\\u015Fka kullan\\u0131c\\u0131 "{0}" seyahatini d\\u011F\\u015Fk.kaydetmeden d\\u00FCzenledi\\: {1}\\n\\nDevam ederseniz d\\u011F\\u015Fk.kaybolacak.\nLUNCH_PK=Ayni \\u00F6dm.- \\u00F6\\u011Fle ymk.\nPER_DIEM_MEALS=Yemekler\nADJUST_FROM_DATE_TO_DATE=Ba\\u015Flang\\u0131\\u00E7 tarihini ve biti\\u015F tarihini ayarla\nSUBMIT_DATE=Tarih\nCREDIT_CARD_RECEIPT_HEADER=Kullan\\u0131labilir belgeler\nASSIGN_BUTTON=Tayin et\nCREDIT_CARD_STEP2_BUTTON=Yeni gider raporuna tayin yap\\u0131n\nSCHEMA_MISSING_FIELD_ALERT=Seyahat \\u015Femas\\u0131 alan\\u0131 zorunlu\nWIZARD_SPLIT_RECEIPT=Belgeyi ayr\\u0131\\u015Ft\\u0131r\nHAS_ATTACHMENT={0} ek i\\u00E7eriyor\nSUBMIT_REASON=Azami fark\\u0131 a\\u015Fma i\\u00E7in neden\nEXPENSE_REPORT=Gider raporu\nRECEIPT_WIZARD_RECEIPT_DETAILS=Belge bilgileri\nNO_CREDIT_CARD_RECEIPT=Kullan\\u0131labilir belge yok\nCREDIT_CARD_RECEIPT_TITLE=Belge arabelle\\u011Fine eri\\u015F\nSUBMIT_APPROVER=Onaylayan\nCANCEL=\\u0130ptal et\nWIZARD_SPLIT_RECEIPT_SUCCESS=Belgeyi ayr\\u0131\\u015Ft\\u0131r olu\\u015Fturuldu\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=Makbuz ayr\\u0131nt\\u0131lar\\u0131\nPER_DIEM_RESET_DESC=Bekleyen de\\u011Fi\\u015Fiklikleri (son teyidinize) geri al\\u0131n\nRECEIPT=Belge\nRECEIPT_WIZARD_VENDOR_DETAILS=Sat\\u0131c\\u0131 ayr\\u0131nt\\u0131lar\\u0131\nRECEIPT_COLUMN_ATTACHMENTS=Ekler\nEXPENSE_SUBMIT_DISCLAIMER=\\u015Eirket politikas\\u0131n\\u0131 okudum, anlad\\u0131m ve kabul ettim. Tutarlar ve destek ayr\\u0131nt\\u0131lar\\u0131n\\u0131n bildi\\u011Fim kadar\\u0131yla eksiksiz ve do\\u011Fru oldu\\u011Funu beyan ederim.\nRECEIPT_WIZARD_VAT_DETAILS=KDV ayr\\u0131nt\\u0131lar\\u0131\nAbsolute=Mutlak\nPER_DIEM_DATE=Tarih\nCREATE_TRIP_BREAK_BUTTON=Seyahat molas\\u0131 olu\\u015Ftur\nRECEIPT_WIZARD_FLIGHT_DETAILS=Rezervasyon ayrnt.\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=Gider t\\u00FCr\\u00FC zorunludur\nPER_DIEM_TITLE=Harc\\u0131rah\nSUBMIT_ERROR_MSG=Hata mevcut oldu\\u011Fu i\\u00E7in gider raporunuz kaydedilemedi.\nRECEIPT_WIZARD_STEP3_ATTENDEES=Kat\\u0131l\\u0131mc\\u0131lar\nSUBMIT_REASON_LABEL=Fark i\\u00E7in neden\nSAVE_MSG=Gider raporunuz kaydedildi\nBREAKFAST=Kahvalt\\u0131\nRECEIPT_WIZARD_SPLIT_DATA=Belge ayr\\u0131\\u015Ft\\u0131rma vr.\nPER_DIEM_ACCOMODATIONS=Konaklama\nCREATE_PENDING_TRIP=Kullan\\u0131labilir seyahat talepleri/planlar\\u0131\nRECEIPT_WIZARD_STEP2=Ad\\u0131m 2\nPDF_ERROR=Seyahat gideriniz PDF olarak d\\u0131\\u015Fa aktar\\u0131lam\\u0131yor.\nCREATE=Olu\\u015Ftur\nTRAVEL_EXPENSE=Seyahat gideri\nCREDIT_CARD_BUTTON=Belge arabelle\\u011Fine eri\\u015F\nDINNER=Ak\\u015Fam yeme\\u011Fi\nPER_DIEM_APPLY_DESC=Bekleyen de\\u011Fi\\u015Fiklikleri arka u\\u00E7 ile senkronize et\nCOUPONS=Yemek fi\\u015Fleri\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=Ek d\\u00FC\\u011Fme bilgileri\nSUBMIT=G\\u00F6nder\nBREAKFAST_PK=Ayni \\u00F6dm.- kahvalt\\u0131\nPercentage=Y\\u00FCzde\nNUMBER_FOR_SPLITTING=Olu\\u015Fturulacak belge say\\u0131s\\u0131\nDINNER_PK=Ayni \\u00F6dm.- ak\\u015F.ymk.\nUNSAVED_OBJECT_POPOVER_TEXT=Bu gider raporu, {0} taraf\\u0131ndan kaydedilmeyen de\\u011Fi\\u015Fiklikler i\\u00E7eriyor.\nappTitle=Seyahat ve giderlerim V2\nDRAFT_WARNING="{0}" gider raporunun kaydedilmemi\\u015F versiyonu var. Kaydedilmeyen de\\u011Fi\\u015Fikliklerin kaybolaca\\u011F\\u0131n\\u0131 unutmay\\u0131n.\n',
		"fin/travel/mytravelexpensesv2/i18n/i18n_zh_CN.properties": '#\n#Mon Aug 01 09:29:08 UTC 2022\nDESTINATION=\\u9644\\u52A0\\u76EE\\u7684\\u5730\nPD_VIEW_DEDUCTION=\\u67E5\\u770B\\u6263\\u51CF\nSUBMIT_MANDATORY_ERROR_MSG=\\u8F93\\u5165\\u503C\\u3002\nCLOSE=\\u5173\\u95ED\nCREDIT_CARD_STEP2_TITLE=\\u5206\\u914D\\u5230\\u65B0\\u7684\\u8D39\\u7528\\u62A5\\u8868\nADJUST_RECEIPT_DATE=\\u8C03\\u6574\\u6536\\u636E\\u65E5\\u671F\nIS_ITEMIZED=\\u5DF2\\u5206\\u9879\nSUBMITTED_MSG=\\u60A8\\u7684\\u8D39\\u7528\\u62A5\\u8868\\u5DF2\\u63D0\\u4EA4\\u81F3\\u5BA1\\u6279\\u4EBA {0}\\u3002\nRESET_DEDUCTION=\\u91CD\\u7F6E\nMERGE_RECEIPT_BUTTON=\\u5408\\u5E76\\u6536\\u636E\nRECEIPT_WIZARD_CHECK_ERROR=\\u65E0\\u6CD5\\u62C6\\u5206\\u6536\\u636E\\u3002\\u7F3A\\u5C11\\u5FC5\\u586B\\u5B57\\u6BB5\\u3002\nSELECT_SCHEMA=\\u65B9\\u6848\\u9009\\u62E9\nPERDIEM_EXPLANATION=\\u5355\\u51FB\\u76F8\\u5173\\u56FE\\u6807\\u53D6\\u6D88\\u9009\\u62E9\nSUBMIT_DISCLAIMER=\\u4FDD\\u5B58\\u5E76\\u63D0\\u4EA4\nLUNCH=\\u5348\\u9910\nCREATE_EXPENSE=\\u521B\\u5EFA\\u8D39\\u7528\\u62A5\\u8868\nMILEAGE=\\u91CC\\u7A0B\nCOST_ASSIGNMENT=\\u6210\\u672C\\u5206\\u914D\nRECEIPT_COLUMN_EXPENSE_CATEGORY=\\u7C7B\\u522B\nOBJECT_TYPE=\\u5DEE\\u65C5\\u8D39\\u7528\nRECEIPT_WIZARD_STEP4_PRODUCTS=\\u4EA7\\u54C1\nLODGING_NIGHT=\\u591C\\u5BBF\nDRAFT_WARNING_UNKNOWN=\\u5DF2\\u5B58\\u5728\\u8349\\u7A3F\\u8D39\\u7528\\u62A5\\u8868\\u3002\\u8BF7\\u6CE8\\u610F\\uFF0C\\u672A\\u4FDD\\u5B58\\u7684\\u66F4\\u6539\\u5C06\\u4E22\\u5931\\u3002\nSUBMITTED_MSG_NO_APPROVER=\\u60A8\\u7684\\u8D39\\u7528\\u62A5\\u8868\\u5DF2\\u63D0\\u4EA4\\u3002\nPD_ENTER_DEDUCTION=\\u8F93\\u5165\\u6263\\u51CF\nRECEIPT_WIZARD_STEP1_EXPENSE_TYPE=\\u8D39\\u7528\\u7C7B\\u578B\nappDescription=\\u5E94\\u7528\\u63CF\\u8FF0\nSPLIT_RECEIPT=\\u62C6\\u5206\\u6536\\u636E\nPER_DIEM_DEDUCTIONS=\\u65E5\\u8865\\u8D34\\u6263\\u51CF\nDRAFT_LOCKED_BY_USER=\\u53E6\\u4E00\\u7528\\u6237\\u5DF2\\u7F16\\u8F91\\u5DEE\\u65C5 "{0}" \\u4F46\\u672A\\u4FDD\\u5B58\\u66F4\\u6539\\uFF1A{1}\\n\\n\\u5982\\u679C\\u7EE7\\u7EED\\uFF0C\\u66F4\\u6539\\u5C06\\u4E22\\u5931\\u3002\nLUNCH_PK=\\u5348\\u9910\\u79CD\\u7C7B\\u7684\\u4ED8\\u6B3E\nPER_DIEM_MEALS=\\u9910\\u8D39\nADJUST_FROM_DATE_TO_DATE=\\u8C03\\u6574\\u8D77\\u59CB\\u65E5\\u671F\\u548C\\u622A\\u6B62\\u65E5\\u671F\nSUBMIT_DATE=\\u65E5\\u671F\nCREDIT_CARD_RECEIPT_HEADER=\\u53EF\\u7528\\u6536\\u636E\nASSIGN_BUTTON=\\u5206\\u914D\nCREDIT_CARD_STEP2_BUTTON=\\u5206\\u914D\\u5230\\u65B0\\u7684\\u8D39\\u7528\\u62A5\\u8868\nSCHEMA_MISSING_FIELD_ALERT=\\u5DEE\\u65C5\\u65B9\\u6848\\u5B57\\u6BB5\\u4E3A\\u5FC5\\u586B\\u5B57\\u6BB5\nWIZARD_SPLIT_RECEIPT=\\u62C6\\u5206\\u6536\\u636E\nHAS_ATTACHMENT=\\u5305\\u62EC {0} \\u4E2A\\u9644\\u4EF6\nSUBMIT_REASON=\\u8D85\\u51FA\\u6700\\u5927\\u5DEE\\u5F02\\u7684\\u539F\\u56E0\nEXPENSE_REPORT=\\u8D39\\u7528\\u62A5\\u8868\nRECEIPT_WIZARD_RECEIPT_DETAILS=\\u6536\\u636E\\u4FE1\\u606F\nNO_CREDIT_CARD_RECEIPT=\\u65E0\\u53EF\\u7528\\u6536\\u636E\nCREDIT_CARD_RECEIPT_TITLE=\\u8BBF\\u95EE\\u6536\\u636E\\u7F13\\u51B2\\u533A\nSUBMIT_APPROVER=\\u5BA1\\u6279\\u4EBA\nCANCEL=\\u53D6\\u6D88\nWIZARD_SPLIT_RECEIPT_SUCCESS=\\u5DF2\\u521B\\u5EFA\\u62C6\\u5206\\u6536\\u636E\nRECEIPT_WIZARD_STEP2_RECEIPT_DETAILS=\\u6536\\u636E\\u8BE6\\u7EC6\\u4FE1\\u606F\nPER_DIEM_RESET_DESC=\\u91CD\\u7F6E\\u672A\\u51B3\\u66F4\\u6539\\uFF08\\u5230\\u4E0A\\u4E00\\u6B21\\u786E\\u8BA4\\uFF09\nRECEIPT=\\u6536\\u636E\nRECEIPT_WIZARD_VENDOR_DETAILS=\\u4F9B\\u5E94\\u5546\\u8BE6\\u7EC6\\u4FE1\\u606F\nRECEIPT_COLUMN_ATTACHMENTS=\\u9644\\u4EF6\nEXPENSE_SUBMIT_DISCLAIMER=\\u6211\\u5DF2\\u9605\\u8BFB\\u3001\\u7406\\u89E3\\u5E76\\u9075\\u5B88\\u516C\\u53F8\\u653F\\u7B56\\u3002\\u5C3D\\u6211\\u6240\\u77E5\\uFF0C\\u672C\\u4EBA\\u58F0\\u660E\\u91D1\\u989D\\u53CA\\u8F85\\u52A9\\u6027\\u7684\\u8BE6\\u7EC6\\u4FE1\\u606F\\u5747\\u5B8C\\u6574\\u3001\\u51C6\\u786E\\u3002\nRECEIPT_WIZARD_VAT_DETAILS=\\u589E\\u503C\\u7A0E\\u8BE6\\u7EC6\\u4FE1\\u606F\nAbsolute=\\u7EDD\\u5BF9\nPER_DIEM_DATE=\\u65E5\\u671F\nCREATE_TRIP_BREAK_BUTTON=\\u521B\\u5EFA\\u5DEE\\u65C5\\u4F11\\u606F\nRECEIPT_WIZARD_FLIGHT_DETAILS=\\u9884\\u8BA2\\u8BE6\\u7EC6\\u4FE1\\u606F\nWIZARD_SPLIT_RECEIPT_EXPTYPE_MANDATORY=\\u8D39\\u7528\\u7C7B\\u578B\\u4E3A\\u5FC5\\u586B\nPER_DIEM_TITLE=\\u65E5\\u8865\\u8D34\nSUBMIT_ERROR_MSG=\\u7531\\u4E8E\\u5B58\\u5728\\u9519\\u8BEF\\uFF0C\\u65E0\\u6CD5\\u4FDD\\u5B58\\u60A8\\u7684\\u8D39\\u7528\\u62A5\\u8868\\u3002\nRECEIPT_WIZARD_STEP3_ATTENDEES=\\u53C2\\u4E0E\\u8005\nSUBMIT_REASON_LABEL=\\u5DEE\\u5F02\\u539F\\u56E0\nSAVE_MSG=\\u60A8\\u7684\\u8D39\\u7528\\u62A5\\u8868\\u5DF2\\u4FDD\\u5B58\nBREAKFAST=\\u65E9\\u9910\nRECEIPT_WIZARD_SPLIT_DATA=\\u6536\\u636E\\u62C6\\u5206\\u6570\\u636E\nPER_DIEM_ACCOMODATIONS=\\u4F4F\\u5BBF\\u8D39\nCREATE_PENDING_TRIP=\\u53EF\\u7528\\u5DEE\\u65C5\\u7533\\u8BF7/\\u8BA1\\u5212\nRECEIPT_WIZARD_STEP2=\\u6B65\\u9AA4 2\nPDF_ERROR=\\u60A8\\u7684\\u8D39\\u7528\\u62A5\\u8868\\u65E0\\u6CD5\\u5BFC\\u51FA\\u4E3A PDF\\u3002\nCREATE=\\u521B\\u5EFA\nTRAVEL_EXPENSE=\\u5DEE\\u65C5\\u8D39\\u7528\nCREDIT_CARD_BUTTON=\\u8BBF\\u95EE\\u6536\\u636E\\u7F13\\u51B2\\u533A\nDINNER=\\u665A\\u9910\nPER_DIEM_APPLY_DESC=\\u4E0E\\u540E\\u7AEF\\u540C\\u6B65\\u672A\\u51B3\\u66F4\\u6539\nCOUPONS=\\u9910\\u52B5\nRECEIPT_COLUMN_ADDITIONAL_BUTTONS=\\u9644\\u52A0\\u6309\\u94AE\\u4FE1\\u606F\nSUBMIT=\\u63D0\\u4EA4\nBREAKFAST_PK=\\u65E9\\u9910\\u79CD\\u7C7B\\u7684\\u4ED8\\u6B3E\nPercentage=\\u767E\\u5206\\u6BD4\nNUMBER_FOR_SPLITTING=\\u8981\\u521B\\u5EFA\\u7684\\u6536\\u636E\\u6570\\u91CF\nDINNER_PK=\\u665A\\u9910\\u79CD\\u7C7B\\u7684\\u4ED8\\u6B3E\nUNSAVED_OBJECT_POPOVER_TEXT=\\u6B64\\u8D39\\u7528\\u62A5\\u8868\\u6709 {0} \\u7684\\u672A\\u4FDD\\u5B58\\u66F4\\u6539\\u3002\nappTitle=\\u6211\\u7684\\u5DEE\\u65C5\\u548C\\u8D39\\u7528 V2\nDRAFT_WARNING=\\u8D39\\u7528\\u62A5\\u8868 "{0}" \\u5B58\\u5728\\u672A\\u4FDD\\u5B58\\u7684\\u7248\\u672C\\u3002\\u8BF7\\u6CE8\\u610F\\uFF0C\\u672A\\u4FDD\\u5B58\\u7684\\u66F4\\u6539\\u5C06\\u4E22\\u5931\\u3002\n',
		"fin/travel/mytravelexpensesv2/manifest.json": '{\n\t"_version": "1.8.0",\n\t"sap.app": {\n\t\t"id": "fin.travel.mytravelexpensesv2",\n\t\t"type": "application",\n\t\t"i18n": "i18n/i18n.properties",\n\t\t"applicationVersion": {\n\t\t\t"version": "2.0.18"\n\t\t},\n\t\t"title": "{{appTitle}}",\n\t\t"description": "{{appDescription}}",\n\t\t"resources": "resources.json",\n\t\t"dataSources": {\n\t\t\t"mainService": {\n\t\t\t\t"uri": "/sap/opu/odata/sap/TRV_MTE_SRV/",\n\t\t\t\t"type": "OData",\n\t\t\t\t"settings": {\n\t\t\t\t\t"localUri": "localService/metadata.xml",\n\t\t\t\t\t"annotations": []\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"ach": "FI-FIO-TV-MTE",\n\t\t"sourceTemplate": {\n\t\t\t"id": "ui5template.basicSAPUI5ApplicationProject",\n\t\t\t"version": "1.40.12"\n\t\t}\n\t},\n\t"sap.ui": {\n\t\t"technology": "UI5",\n\t\t"icons": {\n\t\t\t"icon": "",\n\t\t\t"favIcon": "",\n\t\t\t"phone": "",\n\t\t\t"phone@2": "",\n\t\t\t"tablet": "",\n\t\t\t"tablet@2": ""\n\t\t},\n\t\t"deviceTypes": {\n\t\t\t"desktop": true,\n\t\t\t"tablet": true,\n\t\t\t"phone": true\n\t\t},\n\t\t"supportedThemes": [\n\t\t\t"sap_hcb",\n\t\t\t"sap_belize"\n\t\t]\n\t},\n\t"sap.ui5": {\n\t\t"services": {\n\t\t\t"ShellUIService": {\n\t\t\t\t"factoryName": "sap.ushell.ui5service.ShellUIService"\n\t\t\t}\n\t\t},\n\t\t"rootView": {\n\t\t\t"viewName": "fin.travel.mytravelexpensesv2.view.Main",\n\t\t\t"type": "XML",\n\t\t\t"async": true,\n\t\t\t"id": "mainView"\n\t\t},\n\t\t"dependencies": {\n\t\t\t"minUI5Version": "1.52.4",\n\t\t\t"libs": {\n\t\t\t\t"sap.ui.core": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.m": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.f": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.ui.layout": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.ushell": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.collaboration": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.ui.comp": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.uxap": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t},\n\t\t\t\t"sap.fin.travel.lib.reuse": {\n\t\t\t\t\t"lazy": false\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"componentUsages": {\n\t\t\t"DetailPage": {\n\t\t\t\t"name": "sap.fin.travel.lib.reuse.DetailPage"\n\n\t\t\t},\n\t\t\t"ListPage": {\n\t\t\t\t"name": "sap.fin.travel.lib.reuse.ListPage"\n\t\t\t}\n\t\t},\n\t\t"contentDensities": {\n\t\t\t"compact": true,\n\t\t\t"cozy": true\n\t\t},\n\t\t"models": {\n\t\t\t"i18n": {\n\t\t\t\t"type": "sap.ui.model.resource.ResourceModel",\n\t\t\t\t"settings": {\n\t\t\t\t\t"bundleName": "fin.travel.mytravelexpensesv2.i18n.i18n"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"i18n||Default": {\n\t\t\t\t"type": "sap.ui.model.resource.ResourceModel",\n\t\t\t\t"settings": {\n\t\t\t\t\t"bundleName": "fin.travel.mytravelexpensesv2.i18n.i18n"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"": {\n\t\t\t\t"dataSource": "mainService",\n\t\t\t\t"preload": true,\n\t\t\t\t"settings": {\n\t\t\t\t\t"defaultBindingMode": "TwoWay",\n\t\t\t\t\t"defaultCountMode": "Inline",\n\t\t\t\t\t"refreshAfterChange": true\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"resources": {\n\t\t\t"css": [{\n\t\t\t\t"uri": "css/style.css"\n\t\t\t}]\n\t\t},\n\t\t"routing": {\n\t\t\t"targets": {\n\t\t\t\t"PerDiem": {\n\t\t\t\t\t"viewType": "XML",\n\t\t\t\t\t"viewName": "PerDiem"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t"sap.fiori": {\n\t\t"registrationIds": [\n\t\t\t"F0584A"\n\t\t],\n\t\t"archeType": "transactional"\n\t}\n}',
		"fin/travel/mytravelexpensesv2/view/Main.view.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<View id="mainView" xmlns="sap.f" xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" displayBlock="true" controllerName="fin.travel.mytravelexpensesv2.controller.Main" height="100%">\n\t<FlexibleColumnLayout id="fcl" />\n</View>',
		"fin/travel/mytravelexpensesv2/view/fragments/CreditCardReceiptDialog.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout" xmlns:smarttable="sap.ui.comp.smarttable"\n\txmlns:smartfilterbar="sap.ui.comp.smartfilterbar">\n\t<Dialog id="CreditCardBufferDialog" class="sapUiContentPadding" title="{i18n>CREDIT_CARD_RECEIPT_TITLE}">\n\t\t<content>\n\t\t\t<layout:VerticalLayout id="CreditCardBufferDialog::VLContainer" class="sapUiContentPadding"\n\t\t\t\tvisible="{= ${creditCardModel>/StripMessage}.length > 0}" width="100%">\n\t\t\t\t<layout:content>\n\t\t\t\t\t<MessageStrip id="CreditCardBufferDialog::VLContainer::Msg" text="{creditCardModel>/StripMessage}" type="{creditCardModel>/StripType}"\n\t\t\t\t\t\tshowIcon="true"/>\n\t\t\t\t</layout:content>\n\t\t\t</layout:VerticalLayout>\n\t\t\t<smartfilterbar:SmartFilterBar id="CreditCardBufferFilterBar" entitySet="CreditCardsBuffer" enableBasicSearch="true"\n\t\t\t\tpersistencyKey="CreditCardBufferFilterBar_Key" basicSearchFieldName="CTxt" useToolbar="false">\n\t\t\t\t<smartfilterbar:controlConfiguration>\n\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::ExpTypeName" key="ExpTypeName" visibleInAdvancedArea="true"/>\n\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::RecDate" key="RecDate" visibleInAdvancedArea="true" conditionType="sap.ui.comp.config.condition.DateRangeType">\n\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::BeginDate" low="{creditCardModel>/BeginDate}"\n\t\t\t\t\t\t\t\thigh="{creditCardModel>/EndDate}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::Pernr" key="Pernr" visibleInAdvancedArea="true">\n\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::Pernr" low="{creditCardModel>/Pernr}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::Tripno" key="Tripno" visibleInAdvancedArea="true">\n\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::Tripno" low="{creditCardModel>/Tripno}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t</smartfilterbar:controlConfiguration>\n\t\t\t\t<smartfilterbar:layoutData>\n\t\t\t\t\t<FlexItemData shrinkFactor="0"/>\n\t\t\t\t</smartfilterbar:layoutData>\n\t\t\t</smartfilterbar:SmartFilterBar>\n\t\t\t<smarttable:SmartTable id="CreditCardBufferSmartTable" smartFilterId="CreditCardReceiptDialogFragment--CreditCardBufferFilterBar"\n\t\t\t\tshowRowCount="true" header="{i18n>CREDIT_CARD_RECEIPT_HEADER}" tableType="ResponsiveTable" useVariantManagement="false"\n\t\t\t\tuseExportToExcel="false" enableAutoBinding="true" entitySet="CreditCardsBuffer" tableBindingPath="CreditCardsBuffer" demandPopin="true"\n\t\t\t\tbeforeRebindTable=".handleBeforeRebindTable" class="sapUiResponsiveContentPadding">\n\t\t\t\t<smarttable:customToolbar>\n\t\t\t\t\t<OverflowToolbar id="CreditCardBufferSetId::Table::Toolbar" design="Transparent">\n\t\t\t\t\t\t<ToolbarSpacer id="CreditCardBufferSetId::Table::ToolbarSpacer"/>\n\t\t\t\t\t\t<Button id="CreditCardBufferSetId::Button::deleteEntry" text="{i18n>DELETE_BUTTON}" visible="{creditCardModel>/Deletable}" enabled="false"\n\t\t\t\t\t\t\ttype="Transparent"/>\n\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t</smarttable:customToolbar>\n\t\t\t\t<Table id="CreditCardBufferSetId::ResponsiveTable" growing="true" mode="MultiSelect" rememberSelections="false" growingThreshold="15"/>\n\t\t\t</smarttable:SmartTable>\n\t\t</content>\n\t\t<beginButton>\n\t\t\t<Button id="submitButton" visible="{= !${creditCardModel>/Creatable} }" text="{i18n>ASSIGN_BUTTON}" type="Emphasized"/>\n\t\t</beginButton>\n\t\t<endButton>\n\t\t\t<Button id="endButton" type="{= ${creditCardModel>/Creatable} ? \'Emphasized\' : \'Transparent\' }"\n\t\t\t\ttext="{= ${creditCardModel>/Creatable} ? ${i18n>CLOSE} : ${i18n>CANCEL} }"/>\n\t\t</endButton>\n\t</Dialog>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/PerDiem.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:sfi="sap.ui.comp.smartfield"\n\txmlns:trvlib="sap.fin.travel.lib.reuse.controls" xmlns:uxap="sap.uxap" xmlns:sfo="sap.ui.comp.smartform">\n\t<uxap:blocks>\n\t\t<sfo:SmartForm id="PerDiem::SmartForm">\n\t\t\t<sfo:layout>\n\t\t\t\t<sfo:Layout columnsM="2" columnsL="2" columnsXL="2" labelSpanS="12" labelSpanM="12" labelSpanL="12" labelSpanXL="12"\n\t\t\t\t\tsingleGroupFullSize="false"/>\n\t\t\t</sfo:layout>\n\t\t\t<sfo:Group id="PerDiem::Meals::Group" visible="{= ${PdMealsFc} > 0}" label="{i18n>PER_DIEM_MEALS}">\n\t\t\t\t<sfo:GroupElement id="PerDiem::Meals::GroupElement">\n\t\t\t\t\t<Switch id="PerDiem::Meals::Switch" enabled="{= !${EditVisible} &amp;&amp; ${PdMealsFc} > 1 }" state="{PdMeals}">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<FlexItemData growFactor="1"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Switch>\n\t\t\t\t</sfo:GroupElement>\n\t\t\t\t<sfo:GroupElement id="PerDiem::Food::GroupElement">\n\t\t\t\t\t<sfi:SmartLabel id="PerDiem::Food::Label" labelFor="pdFood"/>\n\t\t\t\t\t<sfi:SmartField uomEditable="false" id="pdFood" value="{PdFood}"/>\n\t\t\t\t</sfo:GroupElement>\n\t\t\t</sfo:Group>\n\t\t\t<sfo:Group id="PerDiem::Accom::Group" visible="{= ${PdAccomFc} > 0}" label="{i18n>PER_DIEM_ACCOMODATIONS}">\n\t\t\t\t<sfo:GroupElement id="PerDiem::Accom::GroupElement">\n\t\t\t\t\t<Switch id="PerDiem::Accom::Switch" enabled="{= !${EditVisible} &amp;&amp; ${PdAccomFc} > 1}" state="{PdAccom}">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<FlexItemData growFactor="1"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Switch>\n\t\t\t\t</sfo:GroupElement>\n\t\t\t\t<sfo:GroupElement id="PerDiem::Housing::GroupElement">\n\t\t\t\t\t<sfi:SmartLabel id="PerDiem::Housing::Label" labelFor="pdHousing"/>\n\t\t\t\t\t<sfi:SmartField uomEditable="false" id="pdHousing" value="{PdHousing}"/>\n\t\t\t\t</sfo:GroupElement>\n\t\t\t</sfo:Group>\n\t\t</sfo:SmartForm>\n\t</uxap:blocks>\n\t<uxap:actions>\n\t\t<Button id="PerDiem::ViewDeduction" visible="{= !${HiddenPdDeductions}}" enabled="{= ${PdMeals} || ${PdAccom} }"\n\t\t\ttext="{= ${EditVisible} ? ${i18n>PD_VIEW_DEDUCTION} : ${i18n>PD_ENTER_DEDUCTION}}" type="Transparent" press="onPerDiemDeductionPress"/>\n\t</uxap:actions>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/PerDiemDialog.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:tec="sap.fin.travel.lib.reuse.controls" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout"\n\txmlns:sfi="sap.ui.comp.smartfield" xmlns:sfo="sap.ui.comp.smartform" xmlns:form="sap.ui.layout.form">\n\t<Dialog id="PerDiemDialog" class="sapUiContentPadding" title="{i18n>PER_DIEM_DEDUCTIONS}">\n\t\t<content>\n\t\t\t<layout:VerticalLayout id="PerDiemDialog::VLContainer" class="sapUiContentPadding" visible="{= ${messageModel>/stripMessage}.length > 0}">\n\t\t\t\t<layout:content>\n\t\t\t\t\t<MessageStrip id="PerDiemDialog::VLContainer::Msg" text="{messageModel>/stripMessage}" type="{messageModel>/stripType}" showIcon="true"></MessageStrip>\n\t\t\t\t</layout:content>\n\t\t\t</layout:VerticalLayout>\n\t\t\t<layout:VerticalLayout>\n\t\t\t\t<!-- Extension before the per diem amount-->\n\t\t\t\t<core:ExtensionPoint name="topPerDiem"/>\n\t\t\t\t<sfi:SmartLabel id="PerDiemFoodLabel" class="sapSmartTemplatesObjectPageHeaderFormLabel" labelFor="pdFood"/>\n\t\t\t\t<sfi:SmartField visible="{= ${PdMealsFc} > 0}" uomEditable="false" id="pdFood" value="{PdFood}"/>\n\t\t\t\t<Text class="sapUiSmallMarginBottom"/>\n\t\t\t\t<sfi:SmartLabel id="PerDiemHousingLabel" class="sapSmartTemplatesObjectPageHeaderFormLabel" labelFor="pdHousing"/>\n\t\t\t\t<sfi:SmartField visible="{= ${PdAccomFc} > 0}" uomEditable="false" id="pdHousing" value="{PdHousing}"/>\n\t\t\t\t<!-- Extension below the per diem amount-->\n\t\t\t\t<core:ExtensionPoint name="belowPerDiemAmount"/>\n\t\t\t\t<Text id="PerDiemAmountMarginBottom" class="sapUiSmallMarginBottom"/>\n\t\t\t\t<Text id="explanationText" class="sapUiSmallMarginBottom" text="{i18n>PERDIEM_EXPLANATION}" visible="true"/>\n\t\t\t\t<Table id="perDiemListTable" fixedLayout="false" inset="false" alternateRowColors="true" items="{PerDiemDeductions}">\n\t\t\t\t\t<headerToolbar></headerToolbar>\n\t\t\t\t\t<columns>\n\t\t\t\t\t\t<Column id="perDiemListTable::Date">\n\t\t\t\t\t\t\t<Text text="{i18n>PER_DIEM_DATE}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::Breakfast" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="breakfastHeader" text="{i18n>BREAKFAST}" textAlign="Center" wrapping="false" tooltip="{i18n>BREAKFAST}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::BreakfastPk" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="breakfastPkHeader" text="{i18n>BREAKFAST_PK}" textAlign="Center" wrapping="false" tooltip="{i18n>BREAKFAST_PK}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::Lunch" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="lunchHeader" text="{i18n>LUNCH}" textAlign="Center" wrapping="false" tooltip="{i18n>LUNCH}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::LunchPk" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="lunchPkHeader" text="{i18n>LUNCH_PK}" textAlign="Center" wrapping="false" tooltip="{i18n>LUNCH_PK}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::Dinner" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="dinnerHeader" text="{i18n>DINNER}" textAlign="Center" wrapping="false" tooltip="{i18n>DINNER}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::DinnerPk" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="dinnerPkHeader" text="{i18n>DINNER_PK}" textAlign="Center" wrapping="false" tooltip="{i18n>DINNER_PK}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::Coupons" minScreenWidth="Desktop" demandPopin="true">\n\t\t\t\t\t\t\t<Text id="couponHeader" text="{i18n>COUPONS}" textAlign="Center" wrapping="false" tooltip="{i18n>COUPONS}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t<Column id="perDiemListTable::LodgingNight" minScreenWidth="Desktop" demandPopin="true" hAlign="End">\n\t\t\t\t\t\t\t<Text id="nightHeader" text="{i18n>LODGING_NIGHT}" textAlign="Center" wrapping="false" tooltip="{i18n>LODGING_NIGHT}"/>\n\t\t\t\t\t\t</Column>\n\t\t\t\t\t</columns>\n\t\t\t\t\t<items>\n\t\t\t\t\t\t<ColumnListItem id="perDiemListTable::ColumnListItem">\n\t\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t\t<!-- date -->\n\t\t\t\t\t\t\t\t<!-- <Text text="{path:\'DedDate\', type:\'sap.ui.model.type.DateTime\', formatOptions : { style:\'medium/short\', UTC: true}}"/> -->\n\t\t\t\t\t\t\t\t<sfi:SmartField wrapping="false" value="{DedDate}"/>\n\t\t\t\t\t\t\t\t<!-- breafkfast -->\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t\t<tec:IconSwitch icon="sap-icon://nutrition-activity" state="{BreakDe}" activeState="false" press="deduceBreakfast"\n\t\t\t\t\t\t\t\t\t\t\tenabled="{= ${BreakDeFc} > 1}" visible="{= ${BreakDeFc} > 0}" tooltip="{i18n>BREAKFAST}"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField value="{BreakDeTime}"/>\n\t\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<sfi:SmartField textAlign="Center" value="{BreakPik}"/>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<!-- lunch -->\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t\t<tec:IconSwitch icon="sap-icon://meal" state="{LunchDe}" activeState="false" press="deduceLunch" enabled="{= ${LunchDeFc} > 1}"\n\t\t\t\t\t\t\t\t\t\t\tvisible="{= ${LunchDeFc} > 0}" tooltip="{i18n>LUNCH}"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField value="{LunchDeTime}"/>\n\t\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<sfi:SmartField textAlign="Center" value="{LunchPik}"/>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<!-- dinner -->\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t\t<tec:IconSwitch icon="sap-icon://meal" state="{DinneDe}" activeState="false" press="deduceDinner" enabled="{= ${DinneDeFc} > 1}"\n\t\t\t\t\t\t\t\t\t\t\tvisible="{= ${DinneDeFc} > 0}" tooltip="{i18n>DINNER}"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField value="{DinneDeTime}"/>\n\t\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<sfi:SmartField textAlign="Center" value="{DinnePik}"/>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<!-- coupon -->\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<tec:IconSwitch icon="sap-icon://meal" state="{LuCoupn}" activeState="false" press="deduceCoupon" enabled="{= ${LuCoupnFc} > 1}"\n\t\t\t\t\t\t\t\t\t\tvisible="{= ${LuCoupnFc} > 0}" tooltip="{i18n>COUPONS}"/>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<!-- accomodation -->\n\t\t\t\t\t\t\t\t<VBox alignItems="Center">\n\t\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t\t<tec:IconSwitch icon="sap-icon://bed" state="{NightDe}" activeState="false" press="deduceNight" enabled="{= ${NightDeFc} > 1}"\n\t\t\t\t\t\t\t\t\t\t\tvisible="{= ${NightDeFc} > 0}" tooltip="{i18n>LODGING_NIGHT}"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField value="{NightDeTime}"/>\n\t\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t</cells>\n\t\t\t\t\t\t</ColumnListItem>\n\t\t\t\t\t</items>\n\t\t\t\t</Table>\n\t\t\t</layout:VerticalLayout>\n\t\t</content>\n\t\t<beginButton></beginButton>\n\t\t<buttons>\n\t\t\t<Button visible="{= !${EditVisible}}" id="applyClosePDButton" ariaDescribedBy="applyClosePDButtonDesc" text="{i18n>APPLY_AND_CLOSE_BUTTON}"\n\t\t\t\ttype="Emphasized" press="handlePerDiemApplyAndClose"/>\n\t\t\t<Button visible="{= !${EditVisible}}" id="applyPDButton" ariaDescribedBy="applyPDButtonDesc" text="{i18n>APPLY_BUTTON}"\n\t\t\t\tpress="handlePerDiemApply"/>\n\t\t\t<Button visible="{= !${EditVisible}}" id="resetPDButton" ariaDescribedBy="resetPDButtonDesc" text="{i18n>RESET_DEDUCTION}"\n\t\t\t\tpress="handlePerDiemReset"/>\n\t\t\t<Button visible="{= !${EditVisible}}" id="cancelPDButton" ariaDescribedBy="CancelPDButtonDesc" text="{i18n>CANCEL}"\n\t\t\t\tpress="handlePerDiemCancel"/>\n\t\t\t<Button visible="{= ${EditVisible}}" id="closePDButton" text="{i18n>CLOSE}" press="handlePerDiemClose"/>\n\t\t</buttons>\n\t\t<endButton></endButton>\n\t\t<core:InvisibleText id="applyClosePDButtonDesc" text="{i18n>PER_DIEM_APPLY_DESC}"/>\n\t\t<core:InvisibleText id="applyPDButtonDesc" text="{i18n>PER_DIEM_APPLY_DESC}"/>\n\t\t<core:InvisibleText id="resetPDButtonDesc" text="{i18n>PER_DIEM_RESET_DESC}"/>\n\t\t<core:InvisibleText id="cancelPDButtonDesc" text="{i18n>PER_DIEM_RESET_DESC}"/>\n\t</Dialog>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableColumnAttachments.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">\n\t<Column id="ReceiptsAttachmentsColumn" visible="{= !${HiddenReceiptsAttachments}}">\n\t\t<customData>\n\t\t\t<core:CustomData key="p13nData" value=\'\\{"columnKey": "RECEIPT_COLUMN_ATTACHMENTS", "columnIndex":"99"}\'/>\n\t\t</customData>\n\t\t<Text id="ReceiptsAttachmentText" text="{i18n>RECEIPT_COLUMN_ATTACHMENTS}"/>\n\t</Column>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableColumnExpenseCategoryIcon.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:sfi="sap.ui.comp.smartfield"\n\txmlns:trvlib="sap.fin.travel.lib.reuse.controls" xmlns:uxap="sap.uxap" xmlns:sfo="sap.ui.comp.smartform">\n\t<Column id="ExpenseCatColumn" visible="true">\n\t\t<customData>\n\t\t\t<core:CustomData key="p13nData" value=\'\\{"columnKey": "RECEIPT_COLUMN_EXPENSE_CATEGORY", "columnIndex":"99"}\'/>\n\t\t</customData>\n\t\t<Text id="ExpenseCatText" text="{i18n>RECEIPT_COLUMN_EXPENSE_CATEGORY}"/>\n\t</Column>\n</core:FragmentDefinition>\n',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableColumnIsItemized.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:sfi="sap.ui.comp.smartfield"\n\txmlns:trvlib="sap.fin.travel.lib.reuse.controls" xmlns:uxap="sap.uxap" xmlns:sfo="sap.ui.comp.smartform">\n\t<Column id="ItemizedColumn" visible="true">\n\t\t<customData>\n\t\t\t<core:CustomData key="p13nData" value=\'\\{"columnKey": "IS_ITEMIZED", "columnIndex":"99"}\'/>\n\t\t</customData>\n\t\t<Text id="ItemizedText" text="{i18n>IS_ITEMIZED}"/>\n\t</Column>\n</core:FragmentDefinition> ',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableLineItemAttachments.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m"\n\txmlns:tec="sap.fin.travel.lib.reuse.controls">\n\t<tec:IconWithNumber id="AttachmentIconWithNumber"\n\t\ttooltip="{parts:[{path:\'i18n>HAS_ATTACHMENT\'},{path:\'Nbattachments\'}], formatter:\'jQuery.sap.formatMessage\'}"\n\t\tvisible="{= ${Nbattachments} > 0 }" count="{= ${Nbattachments}}" press="handleReceiptHasAttachmentButtonPressed"/>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableLineItemExpenseCategoryIcon.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m"\n\txmlns:tec="sap.fin.travel.lib.reuse.controls">\n\t\t<core:Icon id="CategoryIcon" src="{parts:[{path: \'Category\'}], formatter: \'.getIconForExpenseTypeCategory\'}"\n\t\t\tvisible="true"\n\t\t\tdecorative="false"\n\t\t\ttooltip="{CategoryName}" alt="{CategoryName}"/>\n\n</core:FragmentDefinition>\n',
		"fin/travel/mytravelexpensesv2/view/fragments/ReceiptTableLineItemIsItemized.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m"\n\txmlns:tec="sap.fin.travel.lib.reuse.controls">\n\t\t<core:Icon id="IsItemizedIcon" src="sap-icon://receipt" visible="{= ${Isitemized}}" decorative="false" tooltip="{i18n>IS_ITEMIZED}" alt="{i18n>IS_ITEMIZED}"/>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/SubmitDisclaimerDialog.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout" xmlns:form="sap.ui.layout.form"\n\txmlns:sfi="sap.ui.comp.smartfield">\n\t<Dialog title="{i18n>EXPENSE_REPORT}" id="submitDialog" stretch="{device>/system/phone}" horizontalScrolling="true"\n\t\t class="sapUiContentPadding">\n\t\t<content>\n\t\t\t<core:InvisibleText id="LabeldisclaimerCheckboxId" text="{i18n>EXPENSE_SUBMIT_DISCLAIMER}"/>\n\t\t\t<!-- Extension before the submit dialog -->\n\t\t\t<core:ExtensionPoint name="topSubmitDisclaimerDialog"/>\n\t\t\t<VBox id="SubmitDisclaimer::VContainer" fitContainer="true">\n\t\t\t\t<items>\n\t\t\t\t\t<ObjectHeader id="header" title="{Customer}" class="tecNoPadding">\n\t\t\t\t\t\t<attributes>\n\t\t\t\t\t\t\t<ObjectAttribute id="destinationAttribute" text="{Location}"/>\n\t\t\t\t\t\t\t<ObjectAttribute id="dateAttribute" text="{parts:[{path:\'Datedep\'} , {path:\'Datearr\'}], formatter: \'.formatDateAsDateRange\'}"/>\n\t\t\t\t\t\t</attributes>\n\t\t\t\t\t</ObjectHeader>\n\t\t\t\t\t<VBox id="SubmitDisclaimer::Items::Header::VContainer" fitContainer="true" class="tecUiContentPaddingTop">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<FlexItemData growFactor="7"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<HBox id="SubmitDisclaimer::Items::HContainer">\n\t\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t\t<FlexItemData growFactor="3"/>\n\t\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t<VBox id="SubmitDisclaimer::Items::HContainer::TripTotal::VContainer">\n\t\t\t\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t\t\t\t<FlexItemData growFactor="1"/>\n\t\t\t\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerTripTotalLabel" labelFor="SubmitDisclaimerTripTotalValue"\n\t\t\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerTripTotalValue" contextEditable="false" uomEditable="false" editable="false" value="{TripTotal}"\n\t\t\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue sapSmartTemplatesObjectPageDataPointNumericValue"/>\n\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t<VBox id="SubmitDisclaimer::Items::HContainer::SumReimbu::VContainer">\n\t\t\t\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t\t\t\t<FlexItemData growFactor="1"/>\n\t\t\t\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerSumReimbuLabel" labelFor="SubmitDisclaimerSumReimbuValue"\n\t\t\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerSumReimbuValue" contextEditable="false" uomEditable="false" editable="false" value="{SumReimbu}"\n\t\t\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue sapSmartTemplatesObjectPageDataPointNumericValue"/>\n\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</VBox>\n\t\t\t\t\t<VBox id="SubmitDisclaimer::Items::Approver::VContainer" visible="{= ${ApprovernameFc} > 0 }" class="tecUiContentPaddingTop">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<FlexItemData growFactor="2"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerApprovernameLabel" labelFor="SubmitDisclaimerApprovernameValue"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerApprovernameValue" contextEditable="false" editable="false" value="{Approvername}"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue"/>\n\t\t\t\t\t</VBox>\n\t\t\t\t\t<VBox id="SubmitDisclaimer::Items::SubmitCheckbox::VContainer">\n\t\t\t\t\t\t<CheckBox id="SubmitCheckbox" wrapping="true" text="{submitDisclaimerModel>/submitText}" selected="false"\n\t\t\t\t\t\t\tclass="tecUiContentPaddingTop tecCheckBoxFullText">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<FlexItemData growFactor="2"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</CheckBox>\n\t\t\t\t\t</VBox>\n\t\t\t\t</items>\n\t\t\t</VBox>\n\t\t\t<core:ExtensionPoint name="bottomSubmitDialog"/>\n\t\t</content>\n\t\t<beginButton>\n\t\t\t<Button id="SubmitButton" text="{i18n>SUBMIT}" enabled="false" type="Emphasized"/>\n\t\t</beginButton>\n\t\t<endButton>\n\t\t\t<Button id="CancelButton" text="{i18n>CANCEL}"/>\n\t\t</endButton>\n\t</Dialog>\n</core:FragmentDefinition>\n',
		"fin/travel/mytravelexpensesv2/view/fragments/SubmitDisclaimerDialogWithReason.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:uxap="sap.uxap" xmlns:core="sap.ui.core" xmlns:l="sap.ui.layout" xmlns:f="sap.ui.layout.form"\n\txmlns:sf="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<Dialog title="{i18n>EXPENSE_REPORT}" id="SubmitDialogV2" stretch="{device>/system/phone}" horizontalScrolling="true"\n\t\tclass="sapUiContentPadding">\n\t\t<content>\n\t\t\t<core:InvisibleText id="LabelDisclaimerCheckboxId" text="{i18n>EXPENSE_SUBMIT_DISCLAIMER}"/>\n\t\t\t<l:VerticalLayout id="SubmitDisclaimerDialog::VLContainer" class="sapUiContentPadding"\n\t\t\t\tvisible="{= ${submitDisclaimerModel>/stripMessage}.length > 0}" width="100%">\n\t\t\t\t<l:content>\n\t\t\t\t\t<MessageStrip id="SubmitDisclaimerDialog::VLContainer::Msg" text="{submitDisclaimerModel>/stripMessage}"\n\t\t\t\t\t\ttype="{submitDisclaimerModel>/stripType}" showIcon="true"/>\n\t\t\t\t</l:content>\n\t\t\t</l:VerticalLayout>\n\t\t\t<!-- Extension before the submit dialog -->\n\t\t\t<core:ExtensionPoint name="topSubmitDisclaimerDialog"/>\n\t\t\t<uxap:ObjectPageLayout id="SubimtDisclaimerObjectPageLayout">\n\t\t\t\t<uxap:headerTitle>\n\t\t\t\t\t<uxap:ObjectPageHeader id="SubmitDisclaimerObjectPageHeader" objectTitle="{= ${Customer}.length > 0 ? ${Customer} : ${Tripno} }"\n\t\t\t\t\t\tobjectSubtitle="{Location}"/>\n\t\t\t\t</uxap:headerTitle>\n\t\t\t\t<uxap:headerContent>\n\t\t\t\t\t<core:ExtensionPoint name="topSubmitObjectPageContent"/>\n\t\t\t\t\t<l:VerticalLayout id="page::Date::VLContainer">\n\t\t\t\t\t\t<Label id="page::VLContainer::Date::Label" text="{i18n>SUBMIT_DATE}" labelFor="SumbitLocationID"/>\n\t\t\t\t\t\t<Text id="SumbitLocationID" text="{parts:[{path:\'Datedep\'} , {path:\'Datearr\'}], formatter: \'.formatDateAsDateRange\'}"/>\n\t\t\t\t\t</l:VerticalLayout>\n\t\t\t\t\t<l:VerticalLayout id="page::TripTotal::VLContainer">\n\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerTripTotalLabel" labelFor="SubmitDisclaimerTripTotalValue"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerTripTotalValue" contextEditable="false" uomEditable="false" editable="false" value="{TripTotal}"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue sapSmartTemplatesObjectPageDataPointNumericValue"/>\n\t\t\t\t\t</l:VerticalLayout>\n\t\t\t\t\t<l:VerticalLayout id="page::SumReimbu::VLContainer">\n\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerSumReimbuLabel" labelFor="SubmitDisclaimerSumReimbuValue"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerSumReimbuValue" contextEditable="false" uomEditable="false" editable="false" value="{SumReimbu}"\n\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue sapSmartTemplatesObjectPageDataPointNumericValue"/>\n\t\t\t\t\t</l:VerticalLayout>\n\t\t\t\t\t<core:ExtensionPoint name="bottomSubmitObjectPageContent"/>\n\t\t\t\t</uxap:headerContent>\n\t\t\t</uxap:ObjectPageLayout>\n\t\t\t<l:BlockLayout id="SubimtDisclaimerBlockLayout">\n\t\t\t\t<l:BlockLayoutRow id="Reason::BlockLayoutRow" visible="{= ${ReasonFc} > 0 ? true : (${ReasonListFc} > 0 ? true : false) }">\n\t\t\t\t\t<l:BlockLayoutCell id="Reason::BlockLayoutCell">\n\t\t\t\t\t\t<f:SimpleForm id="SimpleFormReasonID" title="{i18n>SUBMIT_REASON}" editable="true" layout="ResponsiveGridLayout" adjustLabelSpan="false"\n\t\t\t\t\t\t\tcolumnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false" width="32rem">\n\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t<core:ExtensionPoint name="topSubmitReasonContent"/>\n\t\t\t\t\t\t\t\t<MessageStrip id="Reason::BlockLayoutCell::Msg" text="{ReasonText}" type="Warning" showIcon="true" showCloseButton="false"/>\n\t\t\t\t\t\t\t\t<Label id="Reason::BlockLayoutCell::ReasonList::Label" text="{submitDisclaimerModel>/reasonLabel}" labelFor="SumbitSelectReasonID"\n\t\t\t\t\t\t\t\t\tvisible="{= ${ReasonListFc} > 0 }" required="{= ${ReasonListFc} === 7 }"/>\n\t\t\t\t\t\t\t\t<Select id="SumbitSelectReasonID" forceSelection="false" selectedKey="{Reason}" items="{ path: \'Reasons\', sorter: { path: \'ReasonText\' } }"\n\t\t\t\t\t\t\t\t\tvisible="{= ${ReasonListFc} > 0 }">\n\t\t\t\t\t\t\t\t\t<core:ListItem key="{ReasonText}" text="{ReasonText}"/>\n\t\t\t\t\t\t\t\t</Select>\n\t\t\t\t\t\t\t\t<Label id="Reason::BlockLayoutCell::Reason::Label" text="{submitDisclaimerModel>/reasonLabel}" labelFor="SumbitInputReasonID"\n\t\t\t\t\t\t\t\t\tvisible="{= ${ReasonFc} > 0 }" required="{= ${ReasonFc} === 7 }"/>\n\t\t\t\t\t\t\t\t<!--<Input id="SumbitInputReasonID" type="Text" value="{facadeModel>/Reason}" visible="{= ${ReasonFc} > 0 }"/>-->\n\t\t\t\t\t\t\t\t<core:ExtensionPoint name="bottomSubmitReasonContent"/>\n\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t</l:BlockLayoutCell>\n\t\t\t\t</l:BlockLayoutRow>\n\t\t\t\t<l:BlockLayoutRow id="Approver::BlockLayoutRow" visible="{= ${ApprovernameFc} > 0 }">\n\t\t\t\t\t<l:BlockLayoutCell id="Approver::BlockLayoutCell">\n\t\t\t\t\t\t<f:SimpleForm id="SimpleFormApproverID" title="{i18n>SUBMIT_APPROVER}" editable="false" layout="ResponsiveLayout" columnsM="1" columnsL="1"\n\t\t\t\t\t\t\tcolumnsXL="1">\n\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t<core:ExtensionPoint name="topSubmitApproverContent"/>\n\t\t\t\t\t\t\t\t<sfi:SmartLabel id="SubmitDisclaimerApprovernameLabel" labelFor="SubmitDisclaimerApprovernameValue"\n\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointLabel sapUiTinyMarginEnd"/>\n\t\t\t\t\t\t\t\t<sfi:SmartField id="SubmitDisclaimerApprovernameValue" contextEditable="false" editable="false" value="{Approvername}"\n\t\t\t\t\t\t\t\t\tclass="sapSmartTemplatesObjectPageDataPointValue"/>\n\t\t\t\t\t\t\t\t<core:ExtensionPoint name="bottomSubmitApproverContent"/>\n\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t</l:BlockLayoutCell>\n\t\t\t\t</l:BlockLayoutRow>\n\t\t\t\t<l:BlockLayoutRow id="SubmitCheckbox::BlockLayoutRow">\n\t\t\t\t\t<l:BlockLayoutCell id="SubmitCheckbox::BlockLayoutCell">\n\t\t\t\t\t\t<CheckBox id="SubmitCheckbox" wrapping="true" text="{submitDisclaimerModel>/submitText}" selected="false" class="tecCheckBoxFullText"\n\t\t\t\t\t\t\tariaLabelledBy="LabelDisclaimerCheckboxId"/>\n\t\t\t\t\t</l:BlockLayoutCell>\n\t\t\t\t</l:BlockLayoutRow>\n\t\t\t</l:BlockLayout>\n\t\t\t<core:ExtensionPoint name="bottomSubmitDialog"/>\n\t\t</content>\n\t\t<beginButton>\n\t\t\t<Button id="SubmitButton" text="{i18n>SUBMIT}" enabled="false" type="Emphasized"/>\n\t\t</beginButton>\n\t\t<endButton>\n\t\t\t<Button id="CancelButton" text="{i18n>CANCEL}"/>\n\t\t</endButton>\n\t</Dialog>\n</core:FragmentDefinition>\n',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardCreditCardDialog.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:tec="sap.fin.travel.lib.reuse.controls" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout"\n\txmlns:sfi="sap.ui.comp.smartfield" xmlns:sfo="sap.ui.comp.smartform" xmlns:smarttable="sap.ui.comp.smarttable"\n\txmlns:smartfilterbar="sap.ui.comp.smartfilterbar">\n\t<Dialog id="creditCard::Dialog" class="sapUiContentPadding" title="{i18n>CREDIT_CARD_RECEIPT_TITLE}" stretch="true">\n\t\t<content>\n\t\t\t<Page id="creditCard::page" showHeader="false">\n\t\t\t\t<content>\n\t\t\t\t\t<Wizard id="creditCardWizard" showNextButton="false">\n\t\t\t\t\t\t<WizardStep id="creditCardWizard::buffer::step" title="{i18n>CREDIT_CARD_RECEIPT_HEADER}" validated="false">\n\t\t\t\t\t\t\t<layout:VerticalLayout id="creditCardWizard::buffer::step::VLContainer" class="sapUiContentPadding"\n\t\t\t\t\t\t\t\tvisible="{= ${creditCardModel>/StripMessage}.length > 0}">\n\t\t\t\t\t\t\t\t<layout:content>\n\t\t\t\t\t\t\t\t\t<MessageStrip id="creditCardWizard::buffer::step::VLContainer::Msg" text="{creditCardModel>/StripMessage}"\n\t\t\t\t\t\t\t\t\t\ttype="{creditCardModel>/StripType}" showIcon="true"></MessageStrip>\n\t\t\t\t\t\t\t\t</layout:content>\n\t\t\t\t\t\t\t</layout:VerticalLayout>\n\t\t\t\t\t\t\t<smartfilterbar:SmartFilterBar id="CreditCardBufferFilterBar" entitySet="CreditCardsBuffer" enableBasicSearch="true"\n\t\t\t\t\t\t\t\tpersistencyKey="CreditCardBufferFilterBar_Key" basicSearchFieldName="CTxt" useToolbar="false">\n\t\t\t\t\t\t\t\t<smartfilterbar:controlConfiguration>\n\t\t\t\t\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::ExpTypeName" key="ExpTypeName" visibleInAdvancedArea="true"/>\n\t\t\t\t\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::RecDate" key="RecDate" visibleInAdvancedArea="true" conditionType="sap.ui.comp.config.condition.DateRangeType">\n\t\t\t\t\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::BeginDate" low="{creditCardModel>/BeginDate}"\n\t\t\t\t\t\t\t\t\t\t\t\thigh="{creditCardModel>/EndDate}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::Pernr" key="Pernr" visibleInAdvancedArea="true">\n\t\t\t\t\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::Pernr" low="{creditCardModel>/Pernr}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t\t\t\t\t\t<smartfilterbar:ControlConfiguration id="CreditCardBufferFilterBar::Conf::Tripno" key="Tripno" visibleInAdvancedArea="true">\n\t\t\t\t\t\t\t\t\t\t<smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t\t\t<smartfilterbar:SelectOption id="CreditCardBufferFilterBar::Select::Tripno" low="{creditCardModel>/Tripno}"></smartfilterbar:SelectOption>\n\t\t\t\t\t\t\t\t\t\t</smartfilterbar:defaultFilterValues>\n\t\t\t\t\t\t\t\t\t</smartfilterbar:ControlConfiguration>\n\t\t\t\t\t\t\t\t</smartfilterbar:controlConfiguration>\n\t\t\t\t\t\t\t\t<smartfilterbar:layoutData>\n\t\t\t\t\t\t\t\t\t<FlexItemData shrinkFactor="0"/>\n\t\t\t\t\t\t\t\t</smartfilterbar:layoutData>\n\t\t\t\t\t\t\t</smartfilterbar:SmartFilterBar>\n\t\t\t\t\t\t\t<smarttable:SmartTable id="CreditCardBufferSmartTable" smartFilterId="CreditCardReceiptDialogFragment--CreditCardBufferFilterBar"\n\t\t\t\t\t\t\t\tshowRowCount="true" header="{i18n>CREDIT_CARD_RECEIPT_HEADER}" tableType="ResponsiveTable" useVariantManagement="false"\n\t\t\t\t\t\t\t\tuseExportToExcel="false" enableAutoBinding="true" entitySet="CreditCardsBuffer" tableBindingPath="CreditCardsBuffer" demandPopin="true"\n\t\t\t\t\t\t\t\tbeforeRebindTable=".handleBeforeRebindTable" class="sapUiResponsiveContentPadding">\n\t\t\t\t\t\t\t\t<smarttable:customToolbar>\n\t\t\t\t\t\t\t\t\t<OverflowToolbar id="CreditCardBufferSetId::Table::Toolbar" design="Transparent">\n\t\t\t\t\t\t\t\t\t\t<ToolbarSpacer id="CreditCardBufferSmartTable::SpacerToolbar"/>\n\t\t\t\t\t\t\t\t\t\t<Button id="creditCardStep2Button" press="handleWizardStep1CreaditCardComplete" text="{i18n>CREDIT_CARD_STEP2_BUTTON}" type="Transparent"\n\t\t\t\t\t\t\t\t\t\t\tenabled="false">\n\t\t\t\t\t\t\t\t\t\t\t<customData>\n\t\t\t\t\t\t\t\t\t\t\t\t<core:CustomData key="Action" value="TRV_MTE_SRV.TRV_MTE_SRV_Entities/CreateExpense"/>\n\t\t\t\t\t\t\t\t\t\t\t</customData>\n\t\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t\t\t<Button id="CreditCardBufferSetId::Button::deleteEntry" text="{i18n>DELETE_BUTTON}" visible="{creditCardModel>/Deletable}" enabled="false"\n\t\t\t\t\t\t\t\t\t\t\ttype="Transparent"/>\n\t\t\t\t\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t\t\t\t\t</smarttable:customToolbar>\n\t\t\t\t\t\t\t\t<Table id="CreditCardBufferSetId::ResponsiveTable" growing="true" mode="MultiSelect" rememberSelections="false" growingThreshold="10"/>\n\t\t\t\t\t\t\t</smarttable:SmartTable>\n\t\t\t\t\t\t\t<Button id="creditCardStep2ButtonDummy" press="handleWizardStep1CreaditCardComplete" text="{i18n>CREDIT_CARD_STEP2_BUTTON}"\n\t\t\t\t\t\t\t\ttype="Emphasized" enabled="false" visible="false">\n\t\t\t\t\t\t\t\t<customData>\n\t\t\t\t\t\t\t\t\t<core:CustomData key="Action" value="TRV_MTE_SRV.TRV_MTE_SRV_Entities/CreateExpense"/>\n\t\t\t\t\t\t\t\t</customData>\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="creditCardWizard::schema::step" title="{i18n>CREDIT_CARD_STEP2_TITLE}" validated="false"></WizardStep>\n\t\t\t\t\t</Wizard>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</content>\n\t\t<buttons>\n\t\t\t<Button id="submitButton" enabled="false" text="{i18n>CREATE_EXPENSE}" type="Emphasized" press="handleWizardApply"/>\n\t\t\t<Button id="endButton" text="{i18n>CANCEL_BUTTON}" press="handleWizardCancel"/>\n\t\t</buttons>\n\t</Dialog>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialog.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns="sap.m" xmlns:tec="sap.fin.travel.lib.reuse.controls" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout"\n\txmlns:sfi="sap.ui.comp.smartfield" xmlns:sfo="sap.ui.comp.smartform" xmlns:form="sap.ui.layout.form"\n\txmlns:smarttable="sap.ui.comp.smarttable">\n\t<Dialog id="WizardSplitReceipt::Dialog" class="sapUiContentPadding" title="{i18n>WIZARD_SPLIT_RECEIPT}" stretch="true">\n\t\t<content>\n\t\t\t<Page id="page" showHeader="false">\n\t\t\t\t<content>\n\t\t\t\t\t<layout:VerticalLayout id="page::VLContainer" width="100%" class="sapUiContentPadding" visible="{= ${messageModel>/stripMessage}.length > 0}">\n\t\t\t\t\t\t<layout:content>\n\t\t\t\t\t\t\t<MessageStrip id="page::VLContainer::Msg" text="{messageModel>/stripMessage}" type="{messageModel>/stripType}" showIcon="true"></MessageStrip>\n\t\t\t\t\t\t</layout:content>\n\t\t\t\t\t</layout:VerticalLayout>\n\t\t\t\t\t<Wizard showNextButton="false" id="receiptWizard">\n\t\t\t\t\t\t<WizardStep id="page::wizard::expensetype::step" title="{i18n>RECEIPT_WIZARD_STEP1_EXPENSE_TYPE}" validated="false">\n\t\t\t\t\t\t\t<sfi:SmartLabel id="page::wizard::ExpTypeName::Label" labelFor="page::wizard::ExpTypeName::Field"/>\n\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::ExpTypeName::Field" change="handleWizardStep1ExpTypeChange" value="{ExpTypeName}">\n\t\t\t\t\t\t\t\t<sfi:configuration>\n\t\t\t\t\t\t\t\t\t<sfi:Configuration preventInitialDataFetchInValueHelpDialog="false" />\n\t\t\t\t\t\t\t\t</sfi:configuration>\n\t\t\t\t\t\t\t</sfi:SmartField>\n\t\t\t\t\t\t\t<sfo:SmartForm id="receiptWizardSmartFormSplitData" editable="true">\n\t\t\t\t\t\t\t\t<!-- Receipt split data-->\n\t\t\t\t\t\t\t\t<sfo:Group id="page::wizard::expensetype::form::Group" label="{i18n>RECEIPT_WIZARD_SPLIT_DATA}">\n\t\t\t\t\t\t\t\t\t<sfo:GroupElement id="page::wizard::expensetype::form::NumberForSplitting::GroupElement">\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::NumberForSplitting::Field" value="{NumberForSplitting}"\n\t\t\t\t\t\t\t\t\t\t\ttextLabel="{i18n>NUMBER_FOR_SPLITTING}"/>\n\t\t\t\t\t\t\t\t\t</sfo:GroupElement>\n\t\t\t\t\t\t\t\t\t<!-- amount to be splitted -->\n\t\t\t\t\t\t\t\t\t<sfo:GroupElement id="page::wizard::expensetype::form::RecAmount::GroupElement">\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::RecAmount::Field" value="{RecAmount}"/>\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::AmountForAllItems::Field" value="{AmountForAllItems}"/>\n\t\t\t\t\t\t\t\t\t</sfo:GroupElement>\n\t\t\t\t\t\t\t\t\t<!-- new receipt date -->\n\t\t\t\t\t\t\t\t\t<sfo:GroupElement id="page::wizard::expensetype::form::RecDate::GroupElement">\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::RecDate::Field" value="{RecDate}"/>\n\t\t\t\t\t\t\t\t\t</sfo:GroupElement>\n\t\t\t\t\t\t\t\t\t<sfo:GroupElement id="page::wizard::expensetype::form::AdaptReceiptDate::GroupElement">\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::AdaptReceiptDate::Field" value="{AdaptReceiptDate}"\n\t\t\t\t\t\t\t\t\t\t\ttextLabel="{i18n>ADJUST_RECEIPT_DATE}"/>\n\t\t\t\t\t\t\t\t\t</sfo:GroupElement>\n\t\t\t\t\t\t\t\t\t<sfo:GroupElement id="page::wizard::expensetype::form::AdaptFromDateToDate::GroupElement">\n\t\t\t\t\t\t\t\t\t\t<sfi:SmartField id="page::wizard::expensetype::form::AdaptFromDateToDate::Field" value="{AdaptFromDateToDate}"\n\t\t\t\t\t\t\t\t\t\t\ttextLabel="{i18n>ADJUST_FROM_DATE_TO_DATE}"/>\n\t\t\t\t\t\t\t\t\t</sfo:GroupElement>\n\t\t\t\t\t\t\t\t</sfo:Group>\n\t\t\t\t\t\t\t</sfo:SmartForm>\n\t\t\t\t\t\t\t<Button id="step2Button" press="handleWizardStep1ExpTypeComplete" text="{i18n>RECEIPT_WIZARD_STEP2}" type="Emphasized"/>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="page::wizard::receiptdetail::step" title="{i18n>RECEIPT_WIZARD_STEP2_RECEIPT_DETAILS}" validated="false">\n\t\t\t\t\t\t\t<sfo:SmartForm id="receiptWizardSmartFormReceiptData" editable="true">\n\t\t\t\t\t\t\t\t<sfo:Group id="page::wizard::receiptdetail::form::Group" label="{i18n>RECEIPT_WIZARD_RECEIPT_DETAILS}">\n\t\t\t\t\t\t\t\t\t<core:Fragment fragmentName="fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogReceiptsInfo" type="XML"/>\n\t\t\t\t\t\t\t\t</sfo:Group>\n\t\t\t\t\t\t\t</sfo:SmartForm>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="page::wizard::vatdetail::step" title="{i18n>RECEIPT_WIZARD_VAT_DETAILS}" validated="false">\n\t\t\t\t\t\t\t<sfo:SmartForm id="receiptWizardSmartFormVatData" editable="true">\n\t\t\t\t\t\t\t\t<sfo:Group id="page::wizard::vatdetail::form::Group" label="{i18n>RECEIPT_WIZARD_VAT_DETAILS}">\n\t\t\t\t\t\t\t\t\t<core:Fragment fragmentName="fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogVATDetails" type="XML"/>\n\t\t\t\t\t\t\t\t</sfo:Group>\n\t\t\t\t\t\t\t</sfo:SmartForm>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="page::wizard::fligthdetail::step" title="{i18n>RECEIPT_WIZARD_FLIGHT_DETAILS}" validated="false">\n\t\t\t\t\t\t\t<sfo:SmartForm id="receiptWizardSmartFormFlightData" editable="true">\n\t\t\t\t\t\t\t\t<sfo:Group id="page::wizard::fligthdetail::form::Group" label="{i18n>RECEIPT_WIZARD_FLIGHT_DETAILS}">\n\t\t\t\t\t\t\t\t\t<core:Fragment fragmentName="fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogFlightInfo" type="XML"/>\n\t\t\t\t\t\t\t\t</sfo:Group>\n\t\t\t\t\t\t\t</sfo:SmartForm>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="page::wizard::vendordetail::step" title="{i18n>RECEIPT_WIZARD_VENDOR_DETAILS}" validated="false">\n\t\t\t\t\t\t\t<sfo:SmartForm id="receiptWizardSmartFormVendorData" editable="true">\n\t\t\t\t\t\t\t\t<sfo:Group id="page::wizard::vendordetail::form::Group" label="{i18n>RECEIPT_WIZARD_VENDOR_DETAILS}">\n\t\t\t\t\t\t\t\t\t<core:Fragment fragmentName="fin.travel.mytravelexpensesv2.view.fragments.WizardSplitReceiptDialogVendor" type="XML"/>\n\t\t\t\t\t\t\t\t</sfo:Group>\n\t\t\t\t\t\t\t</sfo:SmartForm>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<!-- attendees, products, etc. -->\n\t\t\t\t\t\t<WizardStep id="page::wizard::attendees::step" title="{i18n>RECEIPT_WIZARD_STEP3_ATTENDEES}"\n\t\t\t\t\t\t\ticon="sap-icon://BusinessSuiteInAppSymbols/icon-business-partner" validated="false">\n\t\t\t\t\t\t\t<smarttable:SmartTable id="ReceiptWizardAttendeesTable" beforeRebindTable="handleWizardReceiptBeforeRebindTable" showRowCount="true"\n\t\t\t\t\t\t\t\ttableType="ResponsiveTable" useVariantManagement="false" useExportToExcel="false" entitySet="Attendees" enableAutoBinding="true"\n\t\t\t\t\t\t\t\ttableBindingPath="Attendees" demandPopin="true">\n\t\t\t\t\t\t\t\t<smarttable:customToolbar>\n\t\t\t\t\t\t\t\t\t<OverflowToolbar id="page::wizard::attendees::OverflowToolbar" design="Transparent">\n\t\t\t\t\t\t\t\t\t\t<ToolbarSpacer id="page::wizard::attendees::ToolbarSpacer"/>\n\t\t\t\t\t\t\t\t\t\t<!-- Custom Action Breakout -->\n\t\t\t\t\t\t\t\t\t\t<Button id="page::wizard::attendees::delete" type="Transparent" icon="sap-icon://delete" tooltip="{i18n>DELETE_BUTTON}"\n\t\t\t\t\t\t\t\t\t\t\tpress="handleDeleteParticipants"/>\n\t\t\t\t\t\t\t\t\t\t<OverflowToolbarButton id="page::wizard::attendees::add" icon="sap-icon://add" press="handleWizardReceiptCreateParticipantAction"\n\t\t\t\t\t\t\t\t\t\t\ttooltip="{i18n>ADD_BUTTON}"/>\n\t\t\t\t\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t\t\t\t\t</smarttable:customToolbar>\n\t\t\t\t\t\t\t\t<Table id="page::wizard::attendees::table" growing="true" mode="MultiSelect" growingThreshold="15"/>\n\t\t\t\t\t\t\t</smarttable:SmartTable>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t\t<WizardStep id="page::wizard::products::step" title="{i18n>RECEIPT_WIZARD_STEP4_PRODUCTS}"\n\t\t\t\t\t\t\ticon="sap-icon://BusinessSuiteInAppSymbols/icon-products" validated="false">\n\t\t\t\t\t\t\t<smarttable:SmartTable id="ReceiptWizardProductsTable" beforeRebindTable="handleWizardReceiptBeforeRebindTable" showRowCount="true"\n\t\t\t\t\t\t\t\ttableType="ResponsiveTable" useVariantManagement="false" useExportToExcel="false" entitySet="Products" enableAutoBinding="true"\n\t\t\t\t\t\t\t\ttableBindingPath="Products" demandPopin="true">\n\t\t\t\t\t\t\t\t<smarttable:customToolbar>\n\t\t\t\t\t\t\t\t\t<OverflowToolbar id="page::wizard::products::OverflowToolbar" design="Transparent">\n\t\t\t\t\t\t\t\t\t\t<ToolbarSpacer id="page::wizard::products::ToolbarSpacer"/>\n\t\t\t\t\t\t\t\t\t\t<!-- Custom Action Breakout -->\n\t\t\t\t\t\t\t\t\t\t<Button id="page::wizard::products::delete" type="Transparent" icon="sap-icon://delete" tooltip="{i18n>DELETE_BUTTON}"\n\t\t\t\t\t\t\t\t\t\t\tpress="handleDeleteProducts"/>\n\t\t\t\t\t\t\t\t\t\t<OverflowToolbarButton id="page::wizard::products::add" icon="sap-icon://add" press="handleWizardReceiptCreateProductAction"\n\t\t\t\t\t\t\t\t\t\t\ttooltip="{i18n>ADD_BUTTON}"/>\n\t\t\t\t\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t\t\t\t\t</smarttable:customToolbar>\n\t\t\t\t\t\t\t\t<Table id="page::wizard::products::table" growing="true" mode="MultiSelect" growingThreshold="15"/>\n\t\t\t\t\t\t\t</smarttable:SmartTable>\n\t\t\t\t\t\t</WizardStep>\n\t\t\t\t\t</Wizard>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</content>\n\t\t<buttons>\n\t\t\t<Button enabled="false" id="receiptWizardButtonApply" text="{i18n>APPLY_BUTTON}" type="Emphasized" press="handleWizardApply"/>\n\t\t\t<Button id="receiptWizardButtonCancel" text="{i18n>CANCEL_BUTTON}" press="handleWizardCancel"/>\n\t\t</buttons>\n\t</Dialog>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogAttendeesTable.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<ColumnListItem>\n\t\t<cells>\n\t\t\t<sfi:SmartField value="{RelationName}">\n\t\t\t\t<sfi:configuration>\n\t\t\t\t\t<sfi:Configuration preventInitialDataFetchInValueHelpDialog="false" />\n\t\t\t\t</sfi:configuration>\n\t\t\t\t<!-- id is RelationName? How can we define it as Relation? -->\n\t\t\t\t<!--\t<sfi:configuration>\n\t\t\t\t\t<sfi:Configuration controlType="dropDownList" displayBehaviour="idOnly"/>\n\t\t\t\t</sfi:configuration>\n\t\t\t-->\n\t\t\t</sfi:SmartField>\n\t\t\t<sfi:SmartField value="{Name}"/>\n\t\t\t<sfi:SmartField value="{FirstName}"/>\n\t\t\t<sfi:SmartField value="{Jobtitel}"/>\n\t\t\t<sfi:SmartField value="{Company}"/>\n\t\t\t<sfi:SmartField value="{PernrInt}"/>\n\t\t\t<sfi:SmartField value="{BuPartner}"/>\n\t\t</cells>\n\t</ColumnListItem>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogFlightInfo.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1" xmlns="sap.m"\n\txmlns:core="sap.ui.core" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::AirDeparture::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::AirDeparture::Field" value="{AirDeparture}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::AirArrival::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::AirArrival::Field" value="{AirArrival}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::Airline::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::Airline::Field" value="{Airline}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::AirCabinClass::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::AirCabinClass::Field" value="{AirCabinClass}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::AirTicketNumber::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::AirTicketNumber::Field" value="{AirTicketNumber}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::FligthInfo::CarOdometerReading::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::FligthInfo::CarOdometerReading::Field" value="{CarOdometerReading}"/>\n\t</sfo:GroupElement>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogProductsTable.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<ColumnListItem>\n\t\t<cells>\n\t\t\t<sfi:SmartField value="{ProductId}"/>\n\t\t\t<sfi:SmartField value="{ProductName}"/>\n\t\t\t<sfi:SmartField value="{ProductCat}"/>\n\t\t\t<sfi:SmartField value="{PrdDrugCode}"/>\n\t\t</cells>\n\t</ColumnListItem>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogReceiptsInfo.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1" xmlns="sap.m"\n\txmlns:core="sap.ui.core" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::RecRate::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::RecRate::Field" value="{RecRate}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::PayAmount::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::PayAmount::Field" value="{PayAmount}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::TaxCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::TaxCode::Field" value="{TaxCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Taxjurcode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Taxjurcode::Field" value="{Taxjurcode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::FromDate::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::FromDate::Field" value="{FromDate}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::ToDate::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::ToDate::Field" value="{ToDate}"/>\n\t</sfo:GroupElement>\n\t<!-- another potential group -->\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::PaperReceipt::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::PaperReceipt::Field" value="{PaperReceipt}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::ReceiptOk::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::ReceiptOk::Field" value="{ReceiptOk}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NoUnit::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NoUnit::Field" value="{NoUnit}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NoBrft::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NoBrft::Field" value="{NoBrft}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NoLunch::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NoLunch::Field" value="{NoLunch}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NoDinner::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NoDinner::Field" value="{NoDinner}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NStf::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NStf::Field" value="{NStf}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NPtn::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NPtn::Field" value="{NPtn}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::NGst::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::NGst::Field" value="{NGst}"/>\n\t</sfo:GroupElement>\n\t<!-- another potential group -->\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::TtComsp::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::TtComsp::Field" value="{TtComsp}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Descript::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Descript::Field" value="{Descript}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::PPrv::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::PPrv::Field" value="{PPrv}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::PDoc::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::PDoc::Field" value="{PDoc}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Location::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Location::Field" value="{Location}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Country::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Country::Field" value="{Country}">\n\t\t\t<sfi:configuration>\n\t\t\t\t<sfi:Configuration preventInitialDataFetchInValueHelpDialog="false" />\n\t\t\t</sfi:configuration>\n\t\t</sfi:SmartField>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Shorttxt::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Shorttxt::Field" value="{Shorttxt}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::BusPurpo::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::BusPurpo::Field" value="{BusPurpo}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::BusReason::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::BusReason::Field" value="{BusReason}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Payout::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Payout::Field" value="{Payout}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Receipt::Editor::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Receipt::Editor::Field" value="{Editor}"/>\n\t</sfo:GroupElement>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogVATDetails.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1" xmlns="sap.m"\n\txmlns:core="sap.ui.core" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatRegNo::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatRegNo::Field" value="{VatRegNo}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatRegNoNat::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatRegNoNat::Field" value="{VatRegNoNat}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::Name::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::Name::Field" value="{Name}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::Street::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::Street::Field" value="{Street}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::HouseNum::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::HouseNum::Field" value="{HouseNum}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::PostCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::PostCode::Field" value="{PostCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::City::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::City::Field" value="{City}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::ReceiptNo::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::ReceiptNo::Field" value="{ReceiptNo}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::ReceiptItem::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::ReceiptItem::Field" value="{ReceiptItem}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatAmount::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatAmount::Field" value="{VatAmount}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::TaxCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::TaxCode::Field" value="{TaxCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatServiceCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatServiceCode::Field" value="{VatServiceCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatSubSrvCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatSubSrvCode::Field" value="{VatSubSrvCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::VATDetail::VatServiceDesc::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::VATDetail::VatServiceDesc::Field" value="{VatServiceDesc}"/>\n\t</sfo:GroupElement>\n</core:FragmentDefinition>',
		"fin/travel/mytravelexpensesv2/view/fragments/WizardSplitReceiptDialogVendor.fragment.xml": '<!--\n\n    Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.\n\n-->\n<core:FragmentDefinition xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1" xmlns="sap.m"\n\txmlns:core="sap.ui.core" xmlns:sfo="sap.ui.comp.smartform" xmlns:sfi="sap.ui.comp.smartfield">\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeName::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeName::Field" value="{SeName}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeStreet::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeStreet::Field" value="{SeStreet}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeCity::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeCity::Field" value="{SeCity}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeStateProvince::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeStateProvince::Field" value="{SeStateProvince}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeCountry::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeCountry::Field" value="{SeCountry}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SePostalCode::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SePostalCode::Field" value="{SePostalCode}"/>\n\t</sfo:GroupElement>\n\t<sfo:GroupElement id="WizardSplitReceipt::Vendor::SeCustomerServicePhone::GroupElement">\n\t\t<sfi:SmartField id="WizardSplitReceipt::Vendor::SeCustomerServicePhone::Field" value="{SeCustomerServicePhone}"/>\n\t</sfo:GroupElement>\n</core:FragmentDefinition>'
	}
});