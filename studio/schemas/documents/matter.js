export default {
  name: 'document',
  type: 'object',
  title: 'Matter',
  fields: [
		{
			name: 'clientIssue',
			title: 'Client — Issue',
			type: 'string'
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string'
		},
		{
			name: 'matterID',
			title: 'ID',
			type: 'number'
		},
		{
			name: 'opened',
			title: 'Opened',
			type: 'boolean'
		},
		{
			name: 'client',
			title: 'Client',
			type: 'reference'
			to: [{type: 'client'}]
		},
		{
			name: 'practiceArea',
			title: 'Practice area',
			type: 'string'
		},
		{
			name: 'mainIssue',
			title: 'Main issue',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'totalHours',
			title: 'Total hours',
			type: 'number'
		},
		{
			name: 'closed',
			title: 'Closed',
			type: 'boolean'
		},
		{
			name: 'associateAttorney',
			title: 'Associate',
			type: 'reference'
			to: [{type: 'member'}]
		},
		{
			name: 'responsibleAttorney',
			title: 'Responsible attorney',
			type: 'reference'
			to: [{type: 'member'}]
		},
		{
			name: 'otherParties',
			title: 'Other parties',
			type: 'string'
		},
		{
			name: 'billable',
			title: 'Billable',
			type: 'boolean'
		},
		{
			name: 'billingExpenses',
			title: 'Billing & expenses',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		},
		{
			name: 'documents',
			title: 'Documents',
			type: 'reference'
			to: [{type: 'dox'}]
		},
		{
			name: 'tasks',
			title: 'Tasks',
			type: 'reference'
			to: [{type: 'task'}]
		}
