export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'zap-creates-studio-studio',
                  apiId: 'd66e2791-5a74-4d8f-86db-ad5b1c5e9bca'
                },
                {
                  buildHookId: '5e42d3f5a23c9047030b6d40',
                  title: 'Events Website',
                  name: 'zap-creates-studio',
                  apiId: '5fcd62fc-1745-4ae7-80bf-df55d406cbd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mpazap/zap-creates-studio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://zap-creates-studio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
