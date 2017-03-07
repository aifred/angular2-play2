import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './error/pagenotfound.component';

@NgModule({
  imports: [
    MaterialModule, RouterModule, CommonModule, FormsModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    MaterialModule, RouterModule, CommonModule, FormsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
