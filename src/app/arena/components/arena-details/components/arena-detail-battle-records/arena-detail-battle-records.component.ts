import { Component, OnInit } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { ArenaDetailsMgrService } from '../../services/arena-details-mgr.service';
import { Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { BattleRecord } from '../../models/arena-details.models';
import { listCascadeAnimations } from 'src/assets/animations/lists.animations';

@Component({
  selector: 'app-arena-detail-battle-records',
  templateUrl: './arena-detail-battle-records.component.html',
  styleUrls: ['./arena-detail-battle-records.component.scss'],
  animations: [listCascadeAnimations],
})
export class ArenaDetailBattleRecordsComponent extends IDestroyable
  implements OnInit {
  public model$: Observable<BattleRecord[]>;
  constructor(private _mgrService: ArenaDetailsMgrService) {
    super();
  }
  public loading$: Observable<boolean>;

  ngOnInit(): void {
    this.model$ = this._mgrService.model$.pipe(
      takeUntil(this._onDestroyed$),
      map(model => model.battleRecords)
    );

    this.loading$ = this._mgrService.modelLoading$.pipe(
      takeUntil(this._onDestroyed$)
    );
  }
}
