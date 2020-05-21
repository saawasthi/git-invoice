sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/ui/core/UIComponent"

], function (BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.Detail", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

		},
		_onObjectMatched: function (oEvent) {
			this.invoicePathDetail = oEvent.getParameter("arguments").invoicePath;
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},

		onTileItem: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("OrderDetail", {
				invoicePathDetail: this.invoicePathDetail
			});
		},

		onTilePersonal: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Shipment", {
				invoicePathDetail: this.invoicePathDetail
			});
		}

	});

});