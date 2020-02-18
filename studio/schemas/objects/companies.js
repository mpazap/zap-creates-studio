export default {
  name: 'company',
  type: 'object',
  title: 'Company',
  fields: [
		{
			name: 'name',
			type: 'string'
			title: 'Name'
		},
		{
			name: 'Industry',
			title: 'Industry',
			type: 'string'
		},
		{
			name: 'Employees',
			title: 'Employees',
			type: 'number'
		},
		{
			name: 'Description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'Key contacts',
			title: 'Key contacts',
			type: 'string'
		},
		{
			name: 'Mailing address',
			title: 'Mailing address',
			type: 'string'
		},
		{
			name: 'City',
			title: 'City',
			type: 'string'
		},
		{
			name: 'State',
			title: 'State',
			type: 'string'
		},
		{
			name: 'Phone',
			title: 'Phone',
			type: 'string'
		},
		{
			name: 'Email',
			title: 'Email',
			type: 'string'
		},
		{
			name: 'Website URL',
			title: 'Website URL',
			type: 'url'
		}
    ]
}
