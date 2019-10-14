import { Component, OnInit } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex-list-entry',
  templateUrl: './pokedex-list-entry.component.html',
  styleUrls: ['./pokedex-list-entry.component.scss'],
})
export class PokedexListEntryComponent extends IDestroyable implements OnInit {
  public dexNum$: Observable<number>;
  constructor(private _route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.dexNum$ = this._route.paramMap.pipe(
      takeUntil(this._onDestroyed$),
      filter(paramMap => paramMap.has('id')),
      map(paramMap => parseInt(paramMap.get('id')))
    );
  }
}
