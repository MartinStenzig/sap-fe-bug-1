sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onTrigActionAndNav: function(oEvent) {
            MessageToast.show("Custom handler invoked.");

            // !!! ONLY ADDED THE FOLLOWING LINE !!!
            console.log("Custom handler invoked.", oEvent);
        }
    };
});
