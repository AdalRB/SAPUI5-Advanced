sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    
    return Controller.extend("alfa01.employeesv2.controller.MainView", {
        onInit: function () {

        },
        onValidate: function (){
            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();
            if(valueEmployee.length === 6){
                //inputEmployee.setDescription("OK");
                this.getView().byId("labelCountry").setVisible(true);
                this.getView().byId("slCountry").setVisible(true);
            }else{
                //inputEmployee.setDescription("Not OK");
                this.getView().byId("labelCountry").setVisible(false);
                this.getView().byId("slCountry").setVisible(false);
            };
        }
    });

    /* 
    var Main = Controller.extend("alfa01.employeesv2.controller.MainView", {});

    Main.prototype.onValidate = function(){
        var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();
            if(valueEmployee.length === 6){
                //inputEmployee.setDescription("OK");
                this.getView().byId("labelCountry").setVisible(true);
                this.getView().byId("slCountry").setVisible(true);
            }else{
                //inputEmployee.setDescription("Not OK");
                this.getView().byId("labelCountry").setVisible(false);
                this.getView().byId("slCountry").setVisible(false);
            }
    };
    return Main;
    */
});
