sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        onFilterInvoices: function (oEvent) {
            var aFilter = [];

            var sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("title", FilterOperator.Contains, sQuery));
            }

            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");

            oBinding.filter(aFilter);
        }
    });
})