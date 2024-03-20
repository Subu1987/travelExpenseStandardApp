/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([], function() {
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