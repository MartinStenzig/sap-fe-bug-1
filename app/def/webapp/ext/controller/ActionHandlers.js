sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onKickOffSynch: async function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            console.log('Custom handler invoked.', oEvent)
        }
    };
});
