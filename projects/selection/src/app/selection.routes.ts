import {Routes} from '@angular/router';
import {AppComponent} from './app.component';

export const SELECTION_ROUTES: Routes = [

  {
    path: '',
    component: AppComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
