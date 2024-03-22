import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPostsPipe } from './filterPostsPipe';
import { TypeFilterPostsPipe } from './typeFilterPostsPipe';

@NgModule({
  declarations: [TypeFilterPostsPipe],
  imports: [
    CommonModule
  ],
  exports: [TypeFilterPostsPipe]
})
export class TypeFilterPostsPipeModule { }