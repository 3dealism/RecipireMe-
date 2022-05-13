import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_ROUTES} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';


@NgModule({
  declarations: [
    AppComponent, WrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
