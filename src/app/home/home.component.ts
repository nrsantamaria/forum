import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})

export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(
    private router: Router,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }



}
