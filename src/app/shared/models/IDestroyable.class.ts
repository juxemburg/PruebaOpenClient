import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export abstract class IDestroyable implements OnDestroy {
  private _onDestroyedSource = new Subject<boolean>();
  protected _onDestroyed$ = this._onDestroyedSource.asObservable();

  ngOnDestroy(): void {
    this._onDestroyedSource.next(true);
    this._onDestroyedSource.complete();
  }
}
