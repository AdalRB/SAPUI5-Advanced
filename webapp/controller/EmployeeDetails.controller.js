sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'alfa01/employeesv2/model/formatter'
], function(Controller, formatter) {

        function onInit (){
            this._bus = sap.ui.getCore().getEventBus();
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
            var contextObj = oEvent.getSource().getBindingContext("incidenceModel").getObject();
            this._bus.publish("incidence", "onDeleteIncidence", { 
                IncidenceId : contextObj.IncidenceId,
                SapId : contextObj.SapId,
                EmployeeId: contextObj.EmployeeId
            });
        };

        function onSaveIncidence (oEvent){
            var incidence = oEvent.getSource().getParent().getParent();
            var incidenceRow = incidence.getBindingContext("incidenceModel");
            this._bus.publish("incidence", "onSaveIncidence", { incidenceRow : incidenceRow.sPath.replace('/','')})
        };

        function updateIncidenceCreationDate(oEvent){
            var context = oEvent.getSource().getBindingContext("incidenceModel");
            var contextObj = context.getObject();
            contextObj.CreationDateX = true;
        };

        function updateIncidenceReason(oEvent){
            var context = oEvent.getSource().getBindingContext("incidenceModel");
            var contextObj = context.getObject();
            contextObj.ReasonX = true;
        };

        function updateIncidenceType(oEvent){
            var context = oEvent.getSource().getBindingContext("incidenceModel");
            var contextObj = context.getObject();
            contextObj.TypeX = true;
        };

        var Main = Controller.extend("alfa01.employeesv2.controller.EmployeeDetails",{});
        Main.prototype.onInit = onInit;
        Main.prototype.onCreateIncidence = onCreateIncidence;
        Main.prototype.Formatter = formatter;
        Main.prototype.onDeleteIncidence = onDeleteIncidence;
        Main.prototype.onSaveIncidence = onSaveIncidence;
        Main.prototype.updateIncidenceCreationDate = updateIncidenceCreationDate;
        Main.prototype.updateIncidenceReason = updateIncidenceReason;
        Main.prototype.updateIncidenceType = updateIncidenceType;
        return Main;
    
});