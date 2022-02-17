import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HEADER_ROUTES} from './header.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HEADER_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    // AppComponent
  ],
  entryComponents: [
    // AppComponent
  ]
})
export class HeaderModule {
}
