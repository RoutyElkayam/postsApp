import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { DateOfPostsPipeModule } from '../../shared/pipes/datePipe.module';
import { PostsService } from '../../shared/services/posts.service';
import { PostsResult } from '../../shared/models/postsResult';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [DateOfPostsPipeModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})


export class ItemDetailsComponent implements OnInit{
  public post!:Post;
  constructor(private postsService:PostsService,private router:Router) {}   
  
  ngOnInit(): void {
    if(this.postsService.postToShowDetails)
      this.post = this.postsService.postToShowDetails;
    else
      this.goBack();
  }

  goBack(): void{
    this.router.navigate(['']);
  }
  
}
