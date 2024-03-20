/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([], function () {
	"use strict";
	//contain manifest description that will be used in the reuse components for ListPage and DetailPage
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
				"registrationIds": [
					"F0584A"
				],
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
				"registrationIds": [
					"F0584A"
				],
				"archeType": "transactional"
			}
		}
	};
}, true);