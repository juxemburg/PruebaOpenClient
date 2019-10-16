/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { BattleRecord } from '../../models/arena-details.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-arena-detail-battle-record-item',
  templateUrl: './arena-detail-battle-record-item.component.html',
  styleUrls: ['./arena-detail-battle-record-item.component.scss'],
})
export class ArenaDetailBattleRecordItemComponent implements OnInit {
  @Input() model: BattleRecord;
  public positionString: string;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    switch (this.model.order) {
      case 0:
      case 2:
        this.positionString = 'er';
        break;
      case 1:
        this.positionString = 'do';
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        this.positionString = 'to';
        break;
      case 9:
        this.positionString = 'mo';
        break;
      default:
        this.positionString = 'vo';
        break;
    }
  }

  public cardClickHandler(): void {
    this._router.navigate(['encounter', this.model.order], {
      relativeTo: this._route,
    });
  }
}
