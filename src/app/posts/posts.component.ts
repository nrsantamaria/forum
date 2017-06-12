import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})

export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetail(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
