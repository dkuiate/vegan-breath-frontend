import { TestBed } from '@angular/core/testing';

import { RecepeeService } from './recepee.service';

describe('RecepeeService', () => {
  let service: RecepeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
