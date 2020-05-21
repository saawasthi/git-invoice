sap.ui.define([
	// "sap/ui/core/mvc/XMLView"
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	/*XMLView.create({
		viewName: "comp.SAwebapp.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});*/
	new ComponentContainer({
		name: "comp.SAwebapp",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
	

});