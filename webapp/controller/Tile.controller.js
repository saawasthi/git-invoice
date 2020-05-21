sap.ui.define([
	"comp/SAwebapp/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.Tile", {

		onInit: function () {

		},

		onTileInvoice: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("overview");
		}
	});

});