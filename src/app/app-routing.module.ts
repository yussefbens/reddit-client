import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'subreddits', 
    loadChildren: () => import('./pages/subreddits/subreddits.module').then(m => m.SubredditsModule)
  },
  {
    path: 'r', 
    loadChildren: () => import('./pages/subreddit-details/subreddit-details.module').then(m => m.SubredditDetailsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
