import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../../shared/models/post';
import { CommonModule } from '@angular/common';
import { DateOfPostsPipeModule } from '../../shared/pipes/datePipe.module';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../shared/services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,DateOfPostsPipeModule,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() post!: Post;
  @Input() validUrl : boolean | undefined;

  @ViewChild('editTitleInput') editTitleInput: ElementRef | undefined;

  public originalTitle: string = '';
  constructor(private postsService:PostsService,private router:Router) {}

  ngOnInit(): void {
    this.originalTitle = this.post.Title;
  }
  
  editTitle(): void{
    this.post.EditTitle = true;
    setTimeout(() => {
      if (this.editTitleInput && this.editTitleInput.nativeElement.offsetParent !== null)
        this.editTitleInput.nativeElement.focus();
    }, 100);
  }

  updateTitle(): void{
    this.post.EditTitle = false;
    if(this.post.Title != this.originalTitle){
      this.postsService.updatePost(this.post).subscribe((updatedPost:Post)=>{
        this.post = updatedPost;
      },(err:HttpErrorResponse)=>{if(err.message)console.log(err);})
    }
    this.originalTitle = this.post.Title;
  }

  displayDetails(): void{
    this.postsService.postToShowDetails = this.post;
    this.router.navigate(['/details',this.post.imdbID]);
  }
}
