import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NmToasterModule } from 'ng-monster';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NmToasterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
