import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
    name: 'dateOfPost'
})
export class DateOfPostsPipe implements PipeTransform {
    transform(year: string|undefined): any {
        
        return   year ? year.slice(0,4) : year;
        
    }
}