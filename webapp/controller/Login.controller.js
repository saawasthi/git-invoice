sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.Login", {

		onInit: function () {

		},

		navigatePage: function () {
			var userid = this.getView().byId("userid").getValue();
			var password = this.getView().byId("password").getValue();
			if (userid == "") {
				MessageToast.show("Please Enter UserID");
			} else if (password == "") {
				MessageToast.show("Please Enter Password");
			} else if ((userid == "saawasthi" && password == "saurabh") || (userid == "shsharma" && password == "shubhangi")) {
				MessageToast.show("Authenticated ");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Tile");
			} else {
				MessageToast.show("Invalid UserId or Password ");
			}
		}

	});

});