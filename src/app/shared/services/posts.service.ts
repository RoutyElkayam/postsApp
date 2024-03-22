import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PostsResult } from '../models/postsResult';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public postToShowDetails:Post|undefined;
  constructor(private http:HttpClient) { }

  GetPosts():Observable<PostsResult>{
    return this.http.get<PostsResult>(environment.base_url+"/angular_Response.json");
  }

  updatePost(post:Post){
    const url=`${environment.base_url}/post/${post.imdbID}`;
    //DTO server class will manage with client help-properties
    return this.http.put<Post>(url,post);
  }

  isValidUrl(url:string|undefined): Observable<boolean>{
    if(url && url != 'N/A'){
      return this.http.head(url).pipe(
        map(() => true),
        catchError(() => of(false))
      );
    }else{
      return this.http.head('http://www.google.com/404').pipe(
        map(() => true),
        catchError(() => of(false))
      );
    }
      
  }
}
