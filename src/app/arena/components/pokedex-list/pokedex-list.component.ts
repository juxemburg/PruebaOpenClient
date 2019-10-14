import { Component, OnInit } from '@angular/core';
import { PokemonResourceService } from '../../services/pokemon-resource.service';
import { Observable } from 'rxjs';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { PokemonShortInfoViewModel } from '../../models/pokemon.models';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent extends IDestroyable implements OnInit {
  public model$: Observable<PokemonShortInfoViewModel[]>;
  public modelLoading$: Observable<boolean>;
  constructor(private _pokemonResourceService: PokemonResourceService) {
    super();
  }

  ngOnInit() {
    this._pokemonResourceService
      .getPokemonShortInfoList()
      .execute((result$, loading$) => {
        this.model$ = result$;
        this.modelLoading$ = loading$;
      });
  }
}
