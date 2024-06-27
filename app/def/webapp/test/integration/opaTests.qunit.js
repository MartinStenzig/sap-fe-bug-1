sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riz/synch/def/test/integration/FirstJourney',
		'riz/synch/def/test/integration/pages/DefinitionsList',
		'riz/synch/def/test/integration/pages/DefinitionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, DefinitionsList, DefinitionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riz/synch/def') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDefinitionsList: DefinitionsList,
					onTheDefinitionsObjectPage: DefinitionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);