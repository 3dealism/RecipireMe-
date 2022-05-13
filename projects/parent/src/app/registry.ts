import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  header: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4201/header.js',
    exposedModule: './web-components'
  }),
  details: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4203/details.js',
    exposedModule: './web-components'
  }),
  list: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4202/list.js',
    exposedModule: './web-components'
  }),
  similar: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4204/similar.js',
    exposedModule: './web-components'
  }),
  selection: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4205/selection.js',
    exposedModule: './web-components'
  })
}
