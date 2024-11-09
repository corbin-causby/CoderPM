import { TestBed } from '@angular/core/testing';

import { WpmService } from './wpm.service';

describe('WpmService', () => {
  let service: WpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
