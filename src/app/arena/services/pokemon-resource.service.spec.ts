import { TestBed } from '@angular/core/testing';

import { PokemonResourceService } from './pokemon-resource.service';

describe('PokemonResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonResourceService = TestBed.get(PokemonResourceService);
    expect(service).toBeTruthy();
  });
});
