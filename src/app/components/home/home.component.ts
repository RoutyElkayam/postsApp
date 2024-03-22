import { Component, NgModule, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../shared/models/post';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PostsResult } from '../../shared/models/postsResult';
import { postsSorting } from '../../shared/models/postsSorting';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterPostsPipeModule } from '../../shared/pipes/filterPostsPipe.module';
import { TypeFilterPostsPipeModule } from '../../shared/pipes/typeFilterPostsPipe.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CommonModule,FormsModule,FilterPostsPipeModule,TypeFilterPostsPipeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public posts:Post[]|undefined= undefined;
  public sortedPosts : postsSorting[] = [];
  public search:string='';
  public typeFilter:string='All';
  public gridView:Boolean=true;
  public errorData :string|undefined;
  public totalPosts:number|undefined;

  private ascSorting:Boolean=true;
  constructor(private postsService:PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void{
    this.postsService.GetPosts().subscribe((posts:PostsResult)=>{
      this.posts = posts.results;
      this.totalPosts = posts.totalResults;
      if(this.posts && this.posts.length)
        this.posts.sort((a:Post,b:Post)=>{ return a.Title.localeCompare(b.Title); });
        this.sortedPosts.push({
          type:'All',
          count:this.posts?.length
        });
      this.posts?.forEach(post => {
        let currentTypePosts = this.sortedPosts.find((postType:postsSorting)=>{
          return postType.type == post.Type;
        });
        if(currentTypePosts){
          currentTypePosts.count ? currentTypePosts.count++ : 1;
        }else{
          this.sortedPosts.push({
            type:post.Type,
            count:1
          });
        }
        this.isValidImgUrl(post);
      });

    },(err:HttpErrorResponse)=>{if(err.message)this.errorData="Temporarily unable to receive the posts from the server, try again later...";})
  }

  clearSearch(): void{
    this.search = '';
  }

  sortPostsByTitle(): void{
    if(this.ascSorting){
      if(this.posts && this.posts.length)
        this.posts.sort((a:Post,b:Post)=>{ return b.Title.localeCompare(a.Title); });
      this.ascSorting = false;
    }else{
      if(this.posts && this.posts.length)
        this.posts.sort((a:Post,b:Post)=>{ return a.Title.localeCompare(b.Title); });
      this.ascSorting = true;
    }
  }

  setTypeFilter(type:string|undefined): void{
    this.typeFilter = type ? type : 'All';
  }

  switchGridToList(){
    this.gridView = !this.gridView;
  }

  isValidImgUrl(post:Post): void{
    this.postsService.isValidUrl(post.Poster).subscribe((res:boolean)=>{
      if(res)
        post.PosterUrlExists = true; 
     else
        post.PosterUrlExists =  false;
     });
  }

}
