/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"alfa01/lists_/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
