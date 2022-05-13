import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LIST_ROUTES} from './list.routes';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LIST_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ScrollingModule,
    MatSidenavModule
  ]
})
export class ListModule {
}
