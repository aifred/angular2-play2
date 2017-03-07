import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule, RouterModule, CommonModule, FormsModule
  ],
  declarations: [
  ],
  exports: [
    MaterialModule, RouterModule, CommonModule, FormsModule
  ]
})
export class SharedModule { }
