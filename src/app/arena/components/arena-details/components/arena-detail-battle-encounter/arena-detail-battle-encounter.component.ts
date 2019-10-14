import { Component, OnInit } from '@angular/core';
import { Observable, zip, combineLatest } from 'rxjs';
import { ArenaDetailsMgrService } from '../../services/arena-details-mgr.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, filter, map, tap } from 'rxjs/operators';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { BattleRecord } from '../../models/arena-details.models';

@Component({
  selector: 'app-arena-detail-battle-encounter',
  templateUrl: './arena-detail-battle-encounter.component.html',
  styleUrls: ['./arena-detail-battle-encounter.component.scss'],
})
export class ArenaDetailBattleEncounterComponent extends IDestroyable
  implements OnInit {
  public model$: Observable<BattleRecord>;

  public loading$: Observable<boolean>;

  constructor(
    private _mgrService: ArenaDetailsMgrService,
    private _route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.model$ = combineLatest(
      this._route.paramMap.pipe(
        takeUntil(this._onDestroyed$),
        filter(paramMap => paramMap.has('position')),
        map(paramMap => parseInt(paramMap.get('position')))
      ),
      this._mgrService.model$.pipe(
        takeUntil(this._onDestroyed$),
        map(model => model.battleRecords)
      )
    ).pipe(
      map(([position, records]) => records[position]),
      tap(console.log)
    );

    this.loading$ = this._mgrService.modelLoading$.pipe(
      takeUntil(this._onDestroyed$)
    );
  }
}
