import { TestBed } from '@angular/core/testing';

import { CreateArenaMgrService } from './create-arena-mgr.service';

describe('CreateArenaMgrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateArenaMgrService = TestBed.get(CreateArenaMgrService);
    expect(service).toBeTruthy();
  });
});
