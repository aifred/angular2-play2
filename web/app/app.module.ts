import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, UserModule, SharedModule,
    // this has to be the last module to be imported, due to routing order
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
