using SynchService as service from '../../srv/synch';

annotate service.Definitions with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : ID,
            Label : 'ID',
        },
        {
            $Type : 'UI.DataField',
            Value : shortDescription,
            Label : 'shortDescription',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'SynchService.kickOffRun',
            Label : 'kickOffRun',
        },
    ]
);
