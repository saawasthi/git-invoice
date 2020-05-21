sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function (BaseController, JSONModel, MessageToast, UIComponent) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.OrderDetail", {

		onInit: function () {

			var oViewModel = new JSONModel({
				currency: "INR"
			});
			this.getView().setModel(oViewModel, "view");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("OrderDetail").attachPatternMatched(this._onObjectMatched, this);

		},

		_onObjectMatched: function (oEvent) {
			this.byId("rating").reset();
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePathDetail),
				model: "invoice"
			});
		},

		onRatingChange: function (oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		}
	});

});