using { febug1 as f } from '../db/core';

service SynchService{

    entity Definitions as 
        select 
        from 
        f.Definitions
        actions {
            action kickOffRun() returns UUID;
        };
    entity Runs as projection on f.Runs;

}