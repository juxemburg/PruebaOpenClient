import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PokemonArenaDetailViewModel } from '../models/arena-details.models';
import { filter } from 'rxjs/operators';
import { ArenaResourceService } from 'src/app/arena/services/arena-resource.service';

@Injectable()
export class ArenaDetailsMgrService {
  private _modelSource = new BehaviorSubject<PokemonArenaDetailViewModel>(null);
  public get model$(): Observable<PokemonArenaDetailViewModel> {
    return this._modelSource.asObservable().pipe(filter(item => item != null));
  }

  private _modelLoadingSource = new BehaviorSubject<boolean>(false);
  public get modelLoading$(): Observable<boolean> {
    return this._modelLoadingSource.asObservable();
  }

  constructor(private _resourceService: ArenaResourceService) {}

  public loadModel(arenaId: number): void {
    this._resourceService
      .getPokemonArenaDetail(arenaId)
      .execute((result$, loading$) => {
        result$.subscribe(val => this._modelSource.next(val));
        loading$.subscribe(val => this._modelLoadingSource.next(val));
      });
  }
}
