import { Component, OnInit, Input } from '@angular/core';
import { PokemonResourceService } from '../../services/pokemon-resource.service';
import { Subject, BehaviorSubject } from 'rxjs';

import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { takeUntil, filter } from 'rxjs/operators';
import { PokemonInfoViewModel } from '../../models/pokemon.models';

@Component({
  selector: 'app-pokemon-info-card',
  templateUrl: './pokemon-info-card.component.html',
  styleUrls: ['./pokemon-info-card.component.scss'],
})
export class PokemonInfoCardComponent extends IDestroyable implements OnInit {
  private _idSource = new BehaviorSubject<number>(-1);
  private _idChanged$ = this._idSource.asObservable().pipe(
    takeUntil(this._onDestroyed$),
    filter(id => id > 0)
  );
  @Input() public set id(v: number) {
    this._modelSource.next(null);
    this._idSource.next(v);
    this.defaultconfig = true;
  }

  @Input() winner: boolean;

  public defaultconfig = true;

  private _modelSource = new Subject<PokemonInfoViewModel>();
  public model$ = this._modelSource
    .asObservable()
    .pipe(takeUntil(this._onDestroyed$));

  private _loadingSource = new Subject<boolean>();
  public loading$ = this._loadingSource
    .asObservable()
    .pipe(takeUntil(this._onDestroyed$));
  constructor(private _pokemonResourceService: PokemonResourceService) {
    super();
  }

  ngOnInit(): void {
    this._idChanged$.subscribe(id => {
      this._pokemonResourceService
        .getPokemonInfo(id)
        .execute((result$, loading$) => {
          result$.subscribe(v => this._modelSource.next(v));
          loading$.subscribe(v => this._loadingSource.next(v));
        });
    });
  }

  changeConfigHandler(v = true): void {
    this.defaultconfig = v;
  }
}
