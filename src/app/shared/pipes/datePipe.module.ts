import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPostsPipe } from './filterPostsPipe';
import { DateOfPostsPipe } from './datePipe';

@NgModule({
  declarations: [DateOfPostsPipe],
  imports: [
    CommonModule
  ],
  exports: [DateOfPostsPipe]
})
export class DateOfPostsPipeModule { }