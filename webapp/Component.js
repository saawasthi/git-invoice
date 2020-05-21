sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		// "sap/ui/model/resource/ResourceModel"
		"./controller/Dialog"
	],

	function (UIComponent, JSONModel /*ResourceModel*/ , Dialog) {
		"use strict";

		return UIComponent.extend("comp.SAwebapp.Component", {

			metadata: {
				manifest: "json"
					/*rootView: {
						"viewName": "comp.SAwebapp.view.App",
						"type": "XML",
						"async": true,
						"id": "app"
						}*/

			},
			/**
			 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
			 * @public
			 * @override
			 */
			init: function () {
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				//Load data model
				var oData = {
					recipient: {
						firstName: "Saurabh",
						lastName: "Awasthi"
					}
				};

				var oModel = new JSONModel(oData);
				this.setModel(oModel);

				// set dialog
				this._helloDialog = new Dialog(this.getRootControl());
				// create the views based on the url/hash
				this.getRouter().initialize();
			},

			//          delete and destroy object to avoid memory leaks
			exit: function () {
				this._helloDialog.destroy();
				delete this._helloDialog;
			},

			openHelloDialog: function () {
				this._helloDialog.open();
			},

			onLogOutBtn: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("login");
			}

		});
	});