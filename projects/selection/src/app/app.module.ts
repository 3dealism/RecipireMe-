import {Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import {AppComponent} from './app.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {createCustomElement} from '@angular/elements';
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatButtonToggleModule, MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const selectionApp = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('selection-app', selectionApp);
  }
}
