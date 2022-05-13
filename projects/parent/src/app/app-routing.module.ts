import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {AppComponent} from './app.component';
import {WebComponentWrapper, WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [

    // {
    //   path: '',
    //   component: WebComponentWrapper,
    //   data: {
    //     remoteEntry: 'http://localhost:4201/header.js',
    //     type: 'module',
    //     exposedModule: './web-components',
    //     importName: 'header',
    //     elementName: 'header-app'
    //   } as WebComponentWrapperOptions
    // },
    // {
    //   path: '',
    //   component: WebComponentWrapper,
    //   data: {
    //     remoteEntry: 'http://localhost:4202/list.js',
    //     type: 'module',
    //     exposedModule: './web-components',
    //     importName: 'list',
    //     elementName: 'list-app'
    //   } as WebComponentWrapperOptions
    // },
    {
      path: 'header',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4201/header.js',
          type: 'module',
          exposedModule: './Module'
        })
          .then(m => m.HeaderModule)
    }, {
      path: 'list',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4202/list.js',
          type: 'module',
          exposedModule: './Module'
        })
          .then(m => m.ListModule)
    }, {
      path: 'details',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4203/details.js',
          type: 'module',
          exposedModule: './Module'
        })
          .then(m => m.DetailsModule)
    }, {
      path: 'similar',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4204/similar.js',
          type: 'module',
          exposedModule: './Module'
        })
          .then(m => m.SimilarModule)
    }, {
      path: 'selection',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4205/selection.js',
          type: 'module',
          exposedModule: './Module'
        })
          .then(m => m.SelectionModule)
    }
  ]
;


