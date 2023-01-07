import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedditApiService } from 'src/app/shared/services/reddit/reddit-api.service';

@Component({
  selector: 'app-subreddit-details',
  templateUrl: './subreddit-details.component.html',
  styleUrls: ['./subreddit-details.component.scss']
})
export class SubredditDetailsComponent implements OnInit {

  activatedSubreddit: string = '';
  subreddit: any;
  posts: any;
  dataAfter: string = '';
  loading: boolean = false;
  formsValue: any;
  sort: string = 'hot';
  time: string = 'day';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: RedditApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res: any) => {
      this.activatedSubreddit = res.params.subreddit;
      this.loading = true;
      this.api.getSubredditDetails(this.activatedSubreddit).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.subreddit = res.data;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      });
      this.api.getSubredditPosts(this.activatedSubreddit, 10).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.dataAfter = res.data.after;
        this.posts = res.data.children;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      });
    });
    this.route.queryParamMap.subscribe((res: any) => {
      if (res.params.sort) this.sort = res.params.sort;
      if (res.params.time) this.time = res.params.time;
      this.loading = true;
      this.api.getSortedSubredditPosts(this.activatedSubreddit, 10, '', '', this.sort, this.time).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.dataAfter = res.data.after;
        this.posts = res.data.children;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      });
    })
  }

  onSortChange() {
    this.router.navigate([this.router.url.split('?')[0]], {queryParams: {sort: this.sort}});
  }

  onTimeChange() {
    this.router.navigate([this.router.url.split('?')[0]], {queryParams: {sort: this.sort, t: this.time}});
  }

  loadMore() {
    this.loading = true;
    this.api.getSortedSubredditPosts(this.activatedSubreddit, 10, '', this.dataAfter, this.sort).subscribe((res: any) => {
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
