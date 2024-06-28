sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (MessageToast,MessageBox) {
    'use strict';

    return {
        onKickOffSynch: async function (oBindingContext, aSelectedContexts) {

            // Specify the action name
            const sActionName = "SynchService.kickOffRun";
            const sNavSemanticObject = "SynchRun";
            const sNavAction = "display";


            // Process the contexts - if an array of contexts is passed, only the first one is processed
            // The context does not respond with a valid object if an array is passed in
            if (Array.isArray(aSelectedContexts)) {
                aSelectedContexts = aSelectedContexts[0];
            }


            // Specify the parameters for the action
            const mParameters = {
                contexts: aSelectedContexts,
                model: aSelectedContexts.model,
                label: 'Confirm',
                invocationGrouping: true
            };

            // Invoke the backend action
            const actionResult = await this.editFlow.invokeAction(sActionName, mParameters); //SAP Fiori elements EditFlow API

            // Retrieve the runId result of the action
            const runId = actionResult.getObject().value
            console.log('runId', runId)

            // If action was successful commit the navigation
            if (runId) {

                // Navigate to the target specified in the semantic object and action constants
                sap.ui.require(["sap/ushell/Container"], async function (Container) {
                    const Navigation = await Container.getServiceAsync("Navigation");
                    const oHash = await Navigation.getHref({
                        target: {
                            semanticObject: sNavSemanticObject,
                            action: sNavAction
                        },
                        params: {
                            ID: runId
                        }
                    });
                    Navigation.navigate({
                        target: {
                            shellHash: oHash
                        }
                    });
                });

            } else {
                // Display an error message if the action was not successful
                // alert('Action failed and did not return a run id.');
                MessageBox.error(`Action '${sActionName}-${sNavAction}' failed and did not return a run id.`);
            }
        }
    };
});
