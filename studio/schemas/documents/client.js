export default {
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [ 
 
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'mailingAddress',
			title: 'Mailing address',
			type: 'string'
		},
		{
			name: 'cellPhone',
			title: 'Cell phone',
			type: 'string'
		},
		{
			name: 'email',
			title: 'Email',
			type: 'email'
		},
		{
			name: 'company',
			title: 'Company',
			type: 'reference'
			to: [{type: 'company'}]
		},
		{
			name: 'mattersClient',
			title: 'Matters—Client',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		
		{
			name: 'documents',
			title: 'Documents',
			type: 'reference'
			to: [{type: 'dox'}]
		},
		{
			name: 'billsSent',
			title: 'Bills Sent',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		}
