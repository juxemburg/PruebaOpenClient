import { Component, OnInit, Input } from '@angular/core';
import { PokemonArenaShortInfoViewModel } from '../../../arena-details/models/arena-details.models';

@Component({
  selector: 'app-arena-list-item',
  templateUrl: './arena-list-item.component.html',
  styleUrls: ['./arena-list-item.component.scss'],
})
export class ArenaListItemComponent implements OnInit {
  @Input() model: PokemonArenaShortInfoViewModel;
  @Input() arenaNum: number;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
