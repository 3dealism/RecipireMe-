import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { SimilarModule } from './similar.module';
import {SimilarService} from './similar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    MatGridListModule,
    SimilarModule
  ],
  providers: [SimilarService],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const similarApp = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('similar-app', similarApp);
  }
}
