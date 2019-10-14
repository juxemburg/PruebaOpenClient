import { TestBed } from '@angular/core/testing';

import { ArenaDetailsMgrService } from './arena-details-mgr.service';

describe('ArenaDetailsMgrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArenaDetailsMgrService = TestBed.get(ArenaDetailsMgrService);
    expect(service).toBeTruthy();
  });
});
