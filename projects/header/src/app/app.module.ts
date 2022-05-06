import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { HeaderModule } from './header.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HeaderModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  // constructor(private injector: Injector) {
  // }
  //
  // ngDoBootstrap() {
  //   const headerApp = createCustomElement(AppComponent, {
  //     injector: this.injector
  //   })
  //
  //   customElements.define('header-app', headerApp);
  // }
}
