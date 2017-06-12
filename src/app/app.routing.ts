import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'posts/new',
    component: NewPostComponent
  },
  {
    path: 'posts/:id/edit',
    component: EditPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
