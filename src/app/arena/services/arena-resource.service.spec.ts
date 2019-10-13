import { TestBed } from '@angular/core/testing';

import { ArenaResourceService } from './arena-resource.service';

describe('ArenaResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArenaResourceService = TestBed.get(ArenaResourceService);
    expect(service).toBeTruthy();
  });
});
