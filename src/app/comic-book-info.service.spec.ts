import { TestBed } from '@angular/core/testing';

import { ComicBookInfoService } from './comic-book-info.service';

describe('ComicBookInfoService', () => {
  let service: ComicBookInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicBookInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
