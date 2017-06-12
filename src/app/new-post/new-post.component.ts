import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})

export class NewPostComponent implements OnInit {
  posts: Post[];
  newPostToAdd: Post;
  @Output() newPostSender = new EventEmitter;
  id = 0;





  submitForm(category: string, title: string, content: string, author: string, image: string, id: number) {
    this.id += this.posts.length + 1;
    const newPostToAdd: Post = new Post (category, title, content, author, image, this.id);
    this.postService.addPostToArray(newPostToAdd);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  redirect() {
      this.router.navigate(['posts'])
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }



}
