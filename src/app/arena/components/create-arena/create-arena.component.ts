import { Component, OnInit } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { CreateArenaMgrService } from './services/create-arena-mgr.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInAnimation } from 'src/assets/animations/entering.animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-arena',
  templateUrl: './create-arena.component.html',
  styleUrls: ['./create-arena.component.scss'],
  providers: [CreateArenaMgrService],
  animations: [
    trigger('loadContentAnimation', [
      transition('true => false', [
        useAnimation(fadeInAnimation, {
          params: {
            initialYPos: '10%',
            duration: '300ms',
            easeFn: 'cubic-bezier(.11,.03,.15,1.33)',
          },
        }),
      ]),
    ]),
  ],
})
export class CreateArenaComponent extends IDestroyable implements OnInit {
  public isLoading = true;
  public pkmnCount = 10;
  public submitting$: Observable<boolean>;

  constructor(private _mgrService: CreateArenaMgrService) {
    super();
  }

  ngOnInit(): void {
    this._mgrService.loadData();
    this._mgrService.pokemonListLoading$.subscribe(v => (this.isLoading = v));
  }

  createArena(): void {
    if (this.pkmnCount <= 1) {
      return;
    }
    this.submitting$ = this._mgrService.createRandomArena(this.pkmnCount);
  }
}
