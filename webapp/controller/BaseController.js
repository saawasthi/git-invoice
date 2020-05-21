sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";
	return Controller.extend("comp.SAwebapp.controller.BaseController", {
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function (oEvent) {
			var sViewName = this.getView().mProperties.viewName;
			if (sViewName == "comp.SAwebapp.view.Login") {
				MessageToast.show("Login to continue");
			} else {
				var oHistory, sPreviousHash;
				oHistory = History.getInstance();
				sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					this.getRouter().navTo("login", {}, true /*no history*/ );
				}
			}

		},
		onLogOut: function () {
			this.getRouter().navTo("login", {}, true /*no history*/ );
		}
	});
});