import { Injectable } from '@angular/core';
import { PokemonResourceService } from 'src/app/pokemon-utils/services/pokemon-resource.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { PokemonShortInfoSelection } from '../models/create-arena.models';
import { ArenaResourceService } from 'src/app/arena/services/arena-resource.service';
import { Router } from '@angular/router';

@Injectable()
export class CreateArenaMgrService {
  private _pokemonSelectionList: PokemonShortInfoSelection[] = [];
  private set pokemonSelectionList(v: PokemonShortInfoSelection[]) {
    this._pokemonSelectionList = v;
    this._pokemonSelectionListSource.next(this._pokemonSelectionList);
  }
  private get pokemonSelectionList(): PokemonShortInfoSelection[] {
    return this._pokemonSelectionList;
  }

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

  constructor(
    private _pokemonResourceService: PokemonResourceService,
    private _arenaResourceService: ArenaResourceService,
    private _router: Router
  ) {}

  public loadData(): void {
    this._pokemonResourceService
      .getPokemonShortInfoList()
      .execute((result$, loading$) => {
        loading$.subscribe(value => this._pokemonListLoadingSource.next(value));
        result$
          .pipe(
            map(data => data.map(item => ({ pokemon: item, selected: false })))
          )
          .subscribe(data => (this.pokemonSelectionList = data));
      });
  }

  public selectPokemon(dexNumber: number, selectionValue: boolean): void {
    const pkmnIdx = this.pokemonSelectionList.findIndex(
      item => item.pokemon.dexNum === dexNumber
    );

    if (pkmnIdx < 0) {
      return;
    }

    this.pokemonSelectionList[pkmnIdx].selected = selectionValue;
    this.pokemonSelectionList = [...this._pokemonSelectionList];
  }

  public createArena(): Observable<boolean> {
    const selectedPokemons = this._pokemonSelectionList
      .filter(item => item.selected)
      .map(item => item.pokemon.name);
    if (!this.selectPokemon.length) {
      return;
    }

    const result = this._arenaResourceService.createPokemonArena(
      selectedPokemons
    );

    result.requestResult$.subscribe(arenaId =>
      this._router.navigate(['home/arena/', arenaId])
    );
    return result.requestLoading$;
  }
}
