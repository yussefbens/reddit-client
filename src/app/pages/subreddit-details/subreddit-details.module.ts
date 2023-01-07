import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubredditDetailsComponent } from './subreddit-details.component';
import { SubredditDetailsRoutingModule } from './subreddit-details-routing.module';
import { PostsModule } from 'src/app/shared/modules/posts/posts.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SubredditDetailsRoutingModule,
    PostsModule,
    FormsModule
  ],
  declarations: [SubredditDetailsComponent]
})
export class SubredditDetailsModule { }
