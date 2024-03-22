import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
    name: 'filterPosts'
})
export class FilterPostsPipe implements PipeTransform {
    transform(posts: Post[]|undefined, filter: string): any {
        if (!posts || !filter) {
            return posts;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return posts.filter(item => item.Title.indexOf(filter) !== -1 || item.Year?.indexOf(filter)  !== -1);
    }
}