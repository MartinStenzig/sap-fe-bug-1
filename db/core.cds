namespace febug1;
using {cuid} from '@sap/cds/common';    


entity Definitions: cuid{
    shortDescription: String(100);
    runs : Association to Runs on runs.definition = $self;
};

entity Runs: cuid{
    definition: Association to Definitions;
    startTime: DateTime;
    endTime: DateTime;
    status: String(20);
    result: String(20);
};