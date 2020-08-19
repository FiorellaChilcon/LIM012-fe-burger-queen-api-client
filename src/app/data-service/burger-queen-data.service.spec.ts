import { TestBed } from '@angular/core/testing';

import { BurgerQueenDataService } from './burger-queen-data.service';

describe('BurgerQueenDataService', () => {
  let service: BurgerQueenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerQueenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
