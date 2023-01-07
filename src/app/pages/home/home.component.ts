import { Component, OnInit } from '@angular/core';
import { RedditApiService } from 'src/app/shared/services/reddit/reddit-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  posts: any;
  dataAfter: string = '';

  constructor(
    private api: RedditApiService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.api.getSubredditPosts("all", 10).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.posts = res.data.children; 
      this.dataAfter = res.data.after;
    },
    (err) => {
      console.error(err);
      this.loading = false;
    });
  }

  loadMore() {
    this.loading = true;
    this.api.getSubredditPosts("all", 10, '', this.dataAfter).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.posts.push(...res.data.children);
      this.dataAfter = res.data.after;
    },
    (err) => {
      console.error(err);
      this.loading = false;
    });
  }

}
