import { TestBed } from '@angular/core/testing';

import { ComprasApiServiceService } from './compras-api-service.service';

describe('ComprasApiServiceService', () => {
  let service: ComprasApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
