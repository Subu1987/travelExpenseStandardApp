/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/fin/travel/lib/reuse/util/CustomAction", "sap/fin/travel/lib/reuse/util/FragmentHelper",
	"sap/fin/travel/lib/reuse/util/PersistenceHelper", "fin/travel/mytravelexpensesv2/util/CreditCardUtil",
	"fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerHelper", "fin/travel/mytravelexpensesv2/helper/SubmitDisclaimerWithReasonHelper",
	"sap/ui/model/json/JSONModel", "sap/fin/travel/lib/reuse/util/MessageUtil", "sap/fin/travel/lib/reuse/util/Utils",
	"sap/fin/travel/lib/reuse/util/i18n", "sap/fin/travel/lib/reuse/util/AnnotationHelper", "sap/m/DateRangeSelection", "sap/m/MessageToast",
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