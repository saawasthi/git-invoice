sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/ui/core/UIComponent"
], function (BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.App", {

		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		}

	});
});