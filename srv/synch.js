import cds from '@sap/cds'
import crypto from 'crypto' 

export default class SynchService extends cds.ApplicationService {
  init() {

    const {Definitions, Runs} = this.entities 

    this.on('kickOffRun', Definitions,async (req) => {
      
        // Determine the selected defintion
        const def = await this.run(req.query)

        // Determine Definition id
        const defId = def[0].ID

        // Determine unique run id
        const runId = crypto.randomUUID()

        // Assemble the run instance query
        const insQuery = INSERT.into(Runs).entries([{ID: runId, definition_ID: defId,status:'new'}])

        // Create a new run instance
        const run = await this.run(insQuery)

        console.log('kickOffRun', def, run)
        // Create a new run instance

    })

    super.init()
  }
}