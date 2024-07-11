sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'alfa01/employeesv2/model/formatter'
], function(Controller, formatter) {

        function onInit (){

        };

        function onCreateIncidence (){
            var tableIncidence = this.getView().byId("tableIncidence");
            var newIncidence = sap.ui.xmlfragment("alfa01.employeesv2.fragment.NewIncidence", this);
            var incidenceModel = this.getView().getModel("incidenceModel");
            var odata = incidenceModel.getData();
            var index = odata.length;
            odata.push({ index : index + 1 });
            incidenceModel.refresh();
            newIncidence.bindElement("incidenceModel>/" + index);
            tableIncidence.addContent(newIncidence);
        };

        function onDeleteIncidence (oEvent){
            var tableIncidence = this.getView().byId("tableIncidence");
            var rowIncidence = oEvent.getSource().getParent().getParent();
            var incidenceModel = this.getView().getModel("incidenceModel");
            var odata = incidenceModel.getData();
            var contextObj = rowIncidence.getBindingContext("incidenceModel");

            odata.splice(contextObj.index-1,1);
            for(var i in odata){
                odata[i].index = parseInt(i) + 1;
            };
            incidenceModel.refresh();
            tableIncidence.removeContent(rowIncidence);
            for(var j in tableIncidence.getContent()){
                tableIncidence.getContent()[j].bindElement("incidenceModel>/"+j);
            };
        };

        var Main = Controller.extend("alfa01.employeesv2.controller.EmployeeDetails",{});
        Main.prototype.onInit = onInit;
        Main.prototype.onCreateIncidence = onCreateIncidence;
        Main.prototype.Formatter = formatter;
        Main.prototype.onDeleteIncidence = onDeleteIncidence;
        return Main;
    
});