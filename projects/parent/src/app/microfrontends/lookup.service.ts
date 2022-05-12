import {Injectable} from '@angular/core';
import {Microfrontend} from './microfrontend';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:4201/header.js',
        type: 'module',
        exposedModule: './Module',
        displayName: 'header',
        routePath: 'header',
        ngModuleName: 'HeaderModule'
      },
      {
        remoteEntry: 'http://localhost:4202/list.js',
        type: 'module',
        exposedModule: './Module',
        displayName: 'list',
        routePath: 'list',
        ngModuleName: 'ListModule'
      },
      {
        type: 'module',
        remoteEntry: 'http://localhost:4203/details.js',
        exposedModule: './Module',

        // For Routing
        displayName: 'details',
        routePath: 'details',
        ngModuleName: 'DetailsModule'
      },
      {
        remoteEntry: 'http://localhost:4204/similar.js',
        type: 'module',
        exposedModule: './Module',

        // For Routing
        displayName: 'similar',
        routePath: 'similar',
        ngModuleName: 'SimilarModule'
      },
      {
        remoteEntry: 'http://localhost:4205/selection.js',
        type: 'module',
        exposedModule: './Module',

        // For Routing
        displayName: 'selection',
        routePath: 'selection',
        ngModuleName: 'SelectionModule'
      }
    ] as Microfrontend[]);
  }
}
