import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {RecipeService} from './recipe.service';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {createCustomElement} from '@angular/elements';
import { ListModule } from './list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ScrollingModule,
    MatSidenavModule,
    ListModule
  ],
  providers: [RecipeService],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const listApp = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('list-app', listApp);
  }
}
