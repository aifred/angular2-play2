import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class ErrorModule { }
