import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditApiService } from 'src/app/shared/services/reddit/reddit-api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId: string = '';
  postTitle: string = '';
  activatedSubreddit: string = '';

  postDetails: any;
  postComments: any;

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private api: RedditApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res: any) => {
      if (res.params.postId) this.postId = res.params.postId;
      if (res.params.postTitle) this.postTitle = res.params.postTitle;
      if (res.params.subreddit) this.activatedSubreddit = res.params.subreddit;

      this.loading = true;
      this.api.getPostDetail(this.activatedSubreddit, this.postId).subscribe((res: any) => {
        this.postDetails = res[0].data.children[0].data;
        this.postComments = res[1].data.children;
        this.loading = false;
        console.log(this.postComments);
      }, 
      (err) => {
        this.loading = false;
        console.error(err);
      })
    })
  }

}
