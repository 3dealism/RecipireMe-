import {Injectable} from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:4201/header.js',
        type: 'module',
        exposedModule: './Module',
        displayName: 'header',
        routePath: 'header',
        ngModuleName: 'HeaderModule',
        componentName: 'AppComponent'
      },
      {
        remoteEntry: 'http://localhost:4202/list.js',
        type: 'module',
        exposedModule: './Module',
        displayName: 'list',
        routePath: 'list',
        ngModuleName: 'ListModule',
        componentName: 'AppComponent'
      },
      {
        type: 'module',
        remoteEntry: 'http://localhost:4203/details.js',
        exposedModule: './Module',

        // For Routing
        displayName: 'details',
        routePath: 'details',
        ngModuleName: 'DetailsModule',
        componentName: 'AppComponent'
      },
      {
        remoteEntry: 'http://localhost:4204/similar.js',
        type: 'module',
        exposedModule: './Module',

        // For Routing
        displayName: 'similar',
        routePath: 'similar',
        ngModuleName: 'SimilarModule',
        componentName: 'AppComponent'
      },
      {
        remoteEntry: 'http://localhost:4205/selection.js',
        type: 'module',
        exposedModule: './Module',

        // For Routing
        displayName: 'selection',
        routePath: 'selection',
        ngModuleName: 'SelectionModule',
        componentName: 'AppComponent'
      }
    ] as PluginOptions[]);
  }
}
