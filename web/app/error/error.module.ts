import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  imports: [MaterialModule, RouterModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class ErrorModule { }