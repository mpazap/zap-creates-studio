export default {
  name: 'member',
  type: 'document',
  title: 'Member',
  fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
			
	    },
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'number'
		},
		{
			name: 'Email',
			title: 'Email',
			type: 'email'
		},
		{
			name: 'specialty',
			title: 'Specialty',
			type: 'string'
		},
		{
			name: 'tasks',
			title: 'Tasks',
			type: 'reference'
			to: [{type: 'task'}]
		},
		{
			name: 'mattersResponsible',
			title: 'Matters—Responsible',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'mattersOriginating',
			title: 'Matters—Originating',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'billingExpenses',
			title: 'Billing & expenses',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		}
	]
}
