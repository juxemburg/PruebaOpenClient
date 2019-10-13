import { Component, OnInit } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { CreateArenaMgrService } from '../../services/create-arena-mgr.service';
import { Observable } from 'rxjs';
import { PokemonShortInfoSelection } from '../../models/create-arena.models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-selection-list',
  templateUrl: './pokemon-selection-list.component.html',
  styleUrls: ['./pokemon-selection-list.component.scss'],
})
export class PokemonSelectionListComponent extends IDestroyable
  implements OnInit {
  public model$: Observable<PokemonShortInfoSelection[]>;
  public modelLoading$: Observable<boolean>;
  constructor(private _mgrService: CreateArenaMgrService) {
    super();
  }

  ngOnInit() {
    this.model$ = this._mgrService.pokemonSelectionList$.pipe(
      takeUntil(this._onDestroyed$)
    );
    this.modelLoading$ = this._mgrService.pokemonListLoading$.pipe(
      takeUntil(this._onDestroyed$)
    );
  }
}
