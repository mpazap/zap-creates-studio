export default {
  name: 'responsibleParty',
  type: 'document',
  title: 'Responsible Party',
  fields: [ 
 
		{
			name: 'billsSent',
			title: 'Bills Sent',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		},
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
			name: 'mattersClient',
			title: 'Matters—Client',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'billsSent',
			title: 'Bills Sent',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		}
