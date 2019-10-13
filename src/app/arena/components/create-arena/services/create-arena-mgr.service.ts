import { Injectable } from '@angular/core';
import { PokemonResourceService } from 'src/app/pokemon-utils/services/pokemon-resource.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PokemonShortInfoViewModel } from 'src/app/pokemon-utils/models/pokemon.models';
import { map, filter } from 'rxjs/operators';
import { PokemonShortInfoSelection } from '../models/create-arena.models';

@Injectable()
export class CreateArenaMgrService {
  private _pokemonSelectionListSource = new BehaviorSubject<
    PokemonShortInfoSelection[]
  >(null);
  public get pokemonSelectionList$(): Observable<PokemonShortInfoSelection[]> {
    return this._pokemonSelectionListSource
      .asObservable()
      .pipe(filter(item => item != null));
  }

  private _pokemonListLoadingSource = new BehaviorSubject<boolean>(false);
  public get pokemonListLoading$(): Observable<boolean> {
    return this._pokemonListLoadingSource.asObservable();
  }

  constructor(private _pokemonResourceService: PokemonResourceService) {}

  public loadData() {
    this._pokemonResourceService
      .getPokemonShortInfoList()
      .execute((result$, loading$) => {
        loading$.subscribe(value => this._pokemonListLoadingSource.next(value));
        result$
          .pipe(
            map(data => data.map(item => ({ pokemon: item, selected: false })))
          )
          .subscribe(data => this._pokemonSelectionListSource.next(data));
      });
  }
}
