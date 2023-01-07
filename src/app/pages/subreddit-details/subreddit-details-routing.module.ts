import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubredditDetailsComponent } from './subreddit-details.component';

const routes: Routes = [
  {
    path: ':subreddit', 
    component: SubredditDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubredditDetailsRoutingModule { }
