import { TestBed } from '@angular/core/testing';

import { comicService } from './comics.service';

describe('comicService', () => {
  let service: comicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(comicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
