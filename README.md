# Fiori Elements Problem 1
This repo reproduces a problem or problems in the SAP Fiori Elements Framework. 

My intent is to trigger an external navigation following a successful execution of a bound action. That external navigation should use the return (UUID) of the action as a parameter of the external navigation. 


## Reproduction of the problem
1. Clone the repo
2. Change to the `/sap-fe-bug-1` directory
3. Run `npm start`
4. Navigate to [http://localhost:4004/def/webapp/index.html](http://localhost:4004/def/webapp/index.html)

## Approach 1
The first idea is to use:
1. An annotation (and manifest.json) based approach to trigger the server side, bound action. This works well. 
2. Some sort of handler that
    1. receives the UUID for from the successful action and uses it to 
    2. trigger the external navigation with the received UUID as parameter


To that end I tried to create a Controller extensions for single page. 

<img src="./docs/screenshots/controller_extension_singlepage.png">

To show the root problem to make progress, I assed the one line that shows oModel being undefined.... and I have not even added anything yet. 

```javascript
sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('riz.synch.def.ext.controller.Appr1', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf riz.synch.def.ext.controller.Appr1
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();

				// !!! ONLY ADDED this line to the original code !!!
				if (!oModel) {
					alert('Model not found')
				}

			}
		}
	});
});
```

To reproduce the first issue, you can open up the application url [http://localhost:4004/def/webapp/index.html](http://localhost:4004/def/webapp/index.html) and receive the error message that the Model was not found. 




