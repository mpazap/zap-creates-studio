export default {
  name: 'dox',
  type: 'document',
  title: 'Documents',
  fields: [
		{
			name: 'doxDoc',
			title: 'Document',
			type: 'string'
		},
		{
			name: 'doxFile',
			title: 'File',
			type: 'file'
		},
		{
			name: 'doxID',
			title: 'ID',
			type: 'number'
		},
		{
			name: 'doxType',
			title: 'Type',
			type: 'string'
		},
		{
			name: 'relatedMatter',
			title: 'Related matter',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'doxDescription',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'author',
			title: 'Author',
			type: 'string'
		},
		{
			name: 'doxDateCreated',
			title: 'Date created',
			type: 'date'
		},
		{
			name: 'doxdateReceived',
			title: 'Date received',
			type: 'date'
		},
		{
			name: 'tasks',
			title: 'Tasks',
			type: 'reference'
			to: [{type: 'task'}]
		},
		{
			name: 'billingExpenses',
			title: 'Billing & expenses',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		}
