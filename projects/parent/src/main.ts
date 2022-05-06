import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({type: 'module', remoteEntry:'http://localhost:4201/header.js'}),
  loadRemoteEntry({type: 'module', remoteEntry:'http://localhost:4202/list.js'}),
  loadRemoteEntry({type: 'module', remoteEntry:'http://localhost:4203/details.js'}),
  loadRemoteEntry({type: 'module', remoteEntry:'http://localhost:4204/similar.js'}),
  loadRemoteEntry({type: 'module', remoteEntry:'http://localhost:4205/selection.js'})
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));

