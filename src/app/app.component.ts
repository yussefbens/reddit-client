import { Component } from '@angular/core';
import { RedditApiService } from './shared/services/reddit/reddit-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private api: RedditApiService
  ) {}

  ngOnInit() {
    console.log()
  }
}
