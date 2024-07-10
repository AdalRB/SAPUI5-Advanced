sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {

    return Controller.extend("alfa01.employeesv2.controller.Main",{

        onInit : function(){
            var oView = this.getView();
            // var i18nBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle()

            var oJSONModelE = new sap.ui.model.json.JSONModel(); 
            oJSONModelE.loadData("./localService/mockdata/Employees.json", false);
            oView.setModel(oJSONModelE, "jsonEmployees");

            var oJSONModelC = new sap.ui.model.json.JSONModel(); 
            oJSONModelC.loadData("./localService/mockdata/Countries.json", false);
            oView.setModel(oJSONModelC, "jsonCountries");

            var oJSONModelLayout = new sap.ui.model.json.JSONModel(); 
            oJSONModelLayout.loadData("./localService/mockdata/Layout.json", false);
            oView.setModel(oJSONModelLayout, "jsonLayout");

            var oJSONModelConfig = new sap.ui.model.json.JSONModel({
                visibleID: true,
                visibleName: true,
                visibleCountry: true,
                visibleCity: false,
                visibleBtnShowCity: true,
                visibleBtnHideCity: false
            }); 
            oView.setModel(oJSONModelConfig, "jsonConfig")
        },

    });
    
});