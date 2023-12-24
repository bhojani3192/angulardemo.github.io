import { TestBed } from '@angular/core/testing';

import { GitHubService } from '../core/services/github.service';

describe('GithubService', () => {
  let service: GitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
