import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, LoginModule, ErrorModule, AppRoutingModule, SharedModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
