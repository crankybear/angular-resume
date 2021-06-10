import { TestBed } from '@angular/core/testing';

import { KeepintouchService } from './keepintouch.service';

describe('KeepintouchService', () => {
  let service: KeepintouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeepintouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
