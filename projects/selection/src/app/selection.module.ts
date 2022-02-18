import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SELECTION_ROUTES} from './selection.routes';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SELECTION_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatButtonToggleModule, MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ]
})
export class SelectionModule {
}
