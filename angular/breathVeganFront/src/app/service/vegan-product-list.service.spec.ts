import { TestBed } from '@angular/core/testing';

import { VeganProductListService } from './vegan-product-list.service';

describe('VeganProductListService', () => {
  let service: VeganProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeganProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
