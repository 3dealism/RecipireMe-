import {Routes} from '@angular/router';
import {AppComponent} from './app.component';

export const HEADER_ROUTES: Routes = [

  {
    path: '',
    component: AppComponent
  },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];
