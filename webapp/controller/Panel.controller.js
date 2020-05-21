sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (BaseController, MessageToast, Fragment) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.Panel", {

		onInit: function () {

		},

		onHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oRecipient = this.getView().getModel().getProperty("/recipient/firstName");
			var oMsg = oBundle.getText("helloMsg", [oRecipient]);
			MessageToast.show(oMsg);
		},

		onOpenDialog: function () {
		 this.getOwnerComponent().openHelloDialog();
			
		}

	});

});