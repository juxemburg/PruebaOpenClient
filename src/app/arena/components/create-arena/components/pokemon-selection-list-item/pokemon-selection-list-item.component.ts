/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { PokemonShortInfoSelection } from '../../models/create-arena.models';
import { CreateArenaMgrService } from '../../services/create-arena-mgr.service';

@Component({
  selector: 'app-pokemon-selection-list-item',
  templateUrl: './pokemon-selection-list-item.component.html',
  styleUrls: ['./pokemon-selection-list-item.component.scss'],
})
export class PokemonSelectionListItemComponent implements OnInit {
  @Input() model: PokemonShortInfoSelection;
  @Input() addingItem = true;

  public btnClass: string;
  public btnIcon: string;

  constructor(private _mgrService: CreateArenaMgrService) {}

  ngOnInit(): void {
    this.btnClass = this.addingItem
      ? 'btn btn--xxs btn--fab btn--primary'
      : 'btn btn--xxs btn--fab btn--secondary';
    this.btnIcon = this.addingItem ? 'plus' : 'minus';
  }

  btnActionClickHandler(): void {
    this._mgrService.selectPokemon(this.model.pokemon.dexNum, this.addingItem);
  }
}
