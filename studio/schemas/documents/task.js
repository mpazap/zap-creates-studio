export default {
  name: 'task',
  type: 'document',
  title: 'Task',
  fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string'
		},
		{
			name: 'dueOn',
			title: 'Due on',
			type: 'date'
		},
		{
			name: 'taskType',
			title: 'TaskType',
			type: 'string'
		},
		{
			name: 'matter',
			title: 'Matter',
			type: 'reference'
			to: [{type: 'matter'}]
		},
		{
			name: 'assignedTo',
			title: 'Assigned to',
			type: 'reference'
			to: [{type: 'member'}]
		},
		{
			name: 'hoursWorked',
			title: 'Hours worked',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'relatedDocuments',
			title: 'Related documents',
			type: 'reference'
			to: [{type: 'dox'}]
		},
		{
			name: 'relatedBill',
			title: 'Related bill',
			type: 'reference'
			to: [{type: 'billingExpenses'}]
		}
	]
}
