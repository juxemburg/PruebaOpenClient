import { Component, OnInit } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { Observable } from 'rxjs';
import { PokemonShortInfoSelection } from '../../models/create-arena.models';
import { CreateArenaMgrService } from '../../services/create-arena-mgr.service';
import { takeUntil, map } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pokemon-selected-list',
  templateUrl: './pokemon-selected-list.component.html',
  styleUrls: ['./pokemon-selected-list.component.scss'],
})
export class PokemonSelectedListComponent extends IDestroyable
  implements OnInit {
  public model: PokemonShortInfoSelection[] = [];
  public modelLoading$: Observable<boolean>;
  constructor(private _mgrService: CreateArenaMgrService) {
    super();
  }

  ngOnInit(): void {
    this._mgrService.pokemonSelectionList$
      .pipe(
        takeUntil(this._onDestroyed$),
        map(items => items.filter(pkmn => pkmn.selected))
      )
      .subscribe(value => (this.model = value));
    this.modelLoading$ = this._mgrService.pokemonListLoading$.pipe(
      takeUntil(this._onDestroyed$)
    );
  }

  drop(event: CdkDragDrop<PokemonShortInfoSelection[]>): void {
    moveItemInArray(this.model, event.previousIndex, event.currentIndex);
  }

  startArena(): void {
    if (!this.model.length) {
      return;
    }

    this._mgrService.createArena(this.model.map(item => item.pokemon.name));
  }
}
