import { Component, OnInit } from '@angular/core';
import { ArenaResourceService } from '../../services/arena-resource.service';
import { Subject } from 'rxjs';
import { PokemonArenaShortInfoViewModel } from '../arena-details/models/arena-details.models';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-arena-list',
  templateUrl: './arena-list.component.html',
  styleUrls: ['./arena-list.component.scss'],
})
export class ArenaListComponent extends IDestroyable implements OnInit {
  private _modelSource = new Subject<PokemonArenaShortInfoViewModel[]>();
  public model$ = this._modelSource
    .asObservable()
    .pipe(takeUntil(this._onDestroyed$));

  private _loadingSource = new Subject<boolean>();
  public loading$ = this._loadingSource
    .asObservable()
    .pipe(takeUntil(this._onDestroyed$));

  constructor(private _arenaResourceService: ArenaResourceService) {
    super();
  }

  ngOnInit(): void {
    this._arenaResourceService
      .getPokemonArenaList()
      .execute((request$, loading$) => {
        request$.subscribe(v => this._modelSource.next(v));
        loading$.subscribe(v => this._loadingSource.next(v));
      });
  }
}
