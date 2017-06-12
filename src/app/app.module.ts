import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostDetailComponent,
    NewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
