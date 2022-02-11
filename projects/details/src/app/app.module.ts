import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {InstructionsService} from './instructions.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [InstructionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
