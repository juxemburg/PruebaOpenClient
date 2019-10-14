import { Component, OnInit } from '@angular/core';
import { ArenaDetailsMgrService } from './services/arena-details-mgr.service';
import { ActivatedRoute } from '@angular/router';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArenaPosition } from './models/arena-details.models';

@Component({
  selector: 'app-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.scss'],
  providers: [ArenaDetailsMgrService],
})
export class ArenaDetailsComponent extends IDestroyable implements OnInit {
  public model$: Observable<{
    initial: ArenaPosition[];
    final: ArenaPosition[];
  }>;

  public loading$: Observable<boolean>;

  constructor(
    private _mgrService: ArenaDetailsMgrService,
    private _route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        takeUntil(this._onDestroyed$),
        filter(paramMap => paramMap.has('arenaId')),
        map(paramMap => parseInt(paramMap.get('arenaId')))
      )
      .subscribe(arenaId => this._mgrService.loadModel(arenaId));

    this.model$ = this._mgrService.model$.pipe(
      takeUntil(this._onDestroyed$),
      map(model => ({
        initial: model.initialArenaPosition,
        final: model.finalArenaPosition,
      }))
    );
  }
}
