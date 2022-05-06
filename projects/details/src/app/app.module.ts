import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {InstructionsService} from './instructions.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { DetailsModule } from './details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    DetailsModule
  ],
  providers: [InstructionsService],
  bootstrap: [AppComponent]
})

export class AppModule {
  // constructor(private injector: Injector) {
  // }
  //
  // ngDoBootstrap() {
  //   const detailsApp = createCustomElement(AppComponent, {
  //     injector: this.injector
  //   })
  //   customElements.define('details-app', detailsApp);
  // }
}
