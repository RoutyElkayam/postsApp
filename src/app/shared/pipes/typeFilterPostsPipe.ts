import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
    name: 'typeFilterPosts'
})
export class TypeFilterPostsPipe implements PipeTransform {
    transform(posts: Post[]|undefined, type: string): any {
        if (!posts || type=='All') {
            return posts;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return posts.filter(item => item.Type == type);
    }
}