import { createId } from '@paralleldrive/cuid2'
import { Client, Connection } from '@temporalio/client'
import type * as Workflows from './types/workflow-commands'
import { openAccount as openAccountWorkflow } from './workflows'
async function run() {
  const connection = await Connection.connect()
  const client = new Client({
    connection,
    // In production you will likely specify `namespace` here; it is 'default' if omitted
  })
  // workflow params
  const openAccount: Workflows.OpenAccount = {
    accountId: createId(),
    address: {
      address1: '123 Temporal Street',
      postalCode: '98006',
    },
    bankDetails: {
      accountNumber: createId(),
      routingNumber: '1234555',
      accountType: 'Checking',
      personalOwner: {
        firstName: 'Bart',
        lastName: 'Simpson',
      },
    },
    bankId: 'Foo Bar Savings and Loan',
    clientEmail: 'bart@simpson.io',
  }

  // Here is how we start our workflow
  const handle = await client.workflow.start(openAccountWorkflow, {
    taskQueue: 'saga-demo',
    workflowId: 'saga-' + openAccount.accountId,
    args: [openAccount],
  })
  await handle.result()
}

run().catch((err) => {
  console.error('account failed to open', err)
  process.exit(1)
})
