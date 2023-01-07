/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RedditApiService } from './reddit-api.service';

describe('Service: RedditApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditApiService]
    });
  });

  it('should ...', inject([RedditApiService], (service: RedditApiService) => {
    expect(service).toBeTruthy();
  }));
});
