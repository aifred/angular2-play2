import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './error/pagenotfound.component';
@NgModule({
  imports: [
    BrowserModule, LoginModule, ErrorModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
