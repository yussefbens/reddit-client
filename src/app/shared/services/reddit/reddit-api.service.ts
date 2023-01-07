import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  appId = "Qp-mcvgVRj9Ne2jng72YrQ";
  appSecret = "VQMsR4LTKHEGwvG-eT7qy5CJ7-OETg";

  constructor(private http: HttpClient) {}

  getSubredditPosts(subreddit: string, limit?: number, before?: string, after?: string, sort?: string, time?: string) {
    let url = "https://www.reddit.com/r/";
    url += subreddit+'.json';
    url += sort ? '/'+sort : '';
    let params = new HttpParams();
    if (limit) params = params.append('limit', limit);
    if (before) params = params.append('before', before);
    if (after) params = params.append('after', after);
    if (sort === 'top') {
      url += '/';
      if (time) params = params.append('t', time);
    }
    return this.http.get(url, {params: params});
  }

  getSortedSubredditPosts(subreddit: string, limit?: number, before?: string, after?: string, sort?: string, time?: string) {
    let url = "https://www.reddit.com/r/";
    url += subreddit;
    url += sort ? '/'+sort+'.json' : '.json';
    let params = new HttpParams();
    if (limit) params = params.append('limit', limit);
    if (before) params = params.append('before', before);
    if (after) params = params.append('after', after);
    if (sort === 'top') {
      if (time) params = params.append('t', time);
    }
    return this.http.get(url, {params: params});
  }

  getSubreddits(limit?: number, before?: string, after?: string) {
    let url = "http://www.reddit.com/subreddits.json";
    let params = new HttpParams();
    if (limit) params = params.append('limit', limit);
    if (before) params = params.append('before', before);
    if (after) params = params.append('after', after);
    return this.http.get(url, {params: params});
  }

  getSubredditDetails(subreddit: string) {
    let url = "https://www.reddit.com/r/";
    let params = new HttpParams();
    url += subreddit+'/about.json';
    return this.http.get(url, {params: params});
  }

}
