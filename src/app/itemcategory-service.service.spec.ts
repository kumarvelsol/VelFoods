import { TestBed } from '@angular/core/testing';

import { ItemcategoryServiceService } from './itemcategory-service.service';

describe('ItemcategoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemcategoryServiceService = TestBed.get(ItemcategoryServiceService);
    expect(service).toBeTruthy();
  });
});
