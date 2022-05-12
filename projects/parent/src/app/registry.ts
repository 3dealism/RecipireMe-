import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  header: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4201/header.js',
    exposedModule: './web-components'
  })
}
