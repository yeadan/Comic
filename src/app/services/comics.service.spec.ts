import { TestBed } from '@angular/core/testing';

import { ComicService } from './comics.service';

describe('comicService', () => {
  let service: ComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
