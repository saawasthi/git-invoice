sap.ui.define([
	"comp/SAwebapp/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/m/library"
], function (BaseController, UIComponent, mobileLibrary) {
	"use strict";

	return BaseController.extend("comp.SAwebapp.controller.Shipment", {

		formatMail: function (sFirstName, sLastName) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@soprasteria.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		},
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Shipment").attachPatternMatched(this._onObjectMatched, this);

		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePathDetail),
				model: "invoice"
			});
		}
	});

});