import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPostsPipe } from './filterPostsPipe';

@NgModule({
  declarations: [FilterPostsPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterPostsPipe]
})
export class FilterPostsPipeModule { }