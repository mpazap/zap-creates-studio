export default {
  name: 'billing',
  type: 'document',
  title: 'Billing',
  fields: [
		{
			name: 'billingID',
			title: 'Billing ID',
			type: 'number'
			
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string'
		},
		{
			name: 'invoice',
			title: 'Invoice',
			type: 'number'
		},
		{
			name: 'Matter',
			title: 'Matter',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'dateSent',
			title: 'Date sent',
			type: 'date'
		},
		{
			name: 'hourlyRate',
			title: 'Hourly rate',
			type: 'number'
		},
		{
			name: 'hours',
			title: 'Hours',
			type: 'datetime'
		},
		{
			name: 'totalHourlyAmount',
			title: 'Total hourly amount',
			type: 'number'
		},
		{
			name: 'totalFlatAmount',
			title: 'Total flat amount',
			type: 'number'
		},
		{
			name: 'totalAmount',
			title: 'Total amount',
			type: 'number'
		},
		{
			name: 'attorney',
			title: 'Attorney',
			type: 'string'
		},
		{
			name: 'clients',
			title: 'Clients',
			type: 'reference'
			to: [{type: 'client'}]
		},
		{
			name: 'documents',
			title: 'Documents',
			type: 'reference'
		    to: [{type: 'dox'}}
		},
		{
			name: 'Tasks',
			title: 'Tasks',
			type: 'reference'
			to: {{type: 'task'}}
		}
	]
}
