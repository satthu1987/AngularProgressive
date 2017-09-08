import { TestBed, inject } from '@angular/core/testing';

import { ItemservicesService } from './itemservices.service';

describe('ItemservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemservicesService]
    });
  });

  it('should be created', inject([ItemservicesService], (service: ItemservicesService) => {
    expect(service).toBeTruthy();
  }));
});
