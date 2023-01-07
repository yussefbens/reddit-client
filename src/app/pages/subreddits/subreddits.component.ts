import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RedditApiService } from 'src/app/shared/reddit/reddit-api.service';

@Component({
  selector: 'app-subreddits',
  templateUrl: './subreddits.component.html',
  styleUrls: ['./subreddits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubredditsComponent implements OnInit {

  loading: boolean = false;
  subreddits: any;
  dataAfter: string = '';

  constructor(
    private api: RedditApiService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.api.getSubreddits(10).subscribe((res: any) => {
      this.loading = false;
      this.subreddits = res.data.children;
      this.dataAfter = res.data.after;
      console.log(res);
    },
    (err) => {
      this.loading = false;
      console.error(err);
    })
  }

  loadMore() {
    this.loading = true;
    this.api.getSubreddits(10, '', this.dataAfter).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.subreddits.push(...res.data.children);
      this.dataAfter = res.data.after;
    },
    (err) => {
      console.error(err);
      this.loading = false;
    });
  }

}
