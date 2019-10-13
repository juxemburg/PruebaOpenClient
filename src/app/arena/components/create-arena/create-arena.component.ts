import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDestroyable } from 'src/app/shared/models/IDestroyable.class';
import { CreateArenaMgrService } from './services/create-arena-mgr.service';

@Component({
  selector: 'app-create-arena',
  templateUrl: './create-arena.component.html',
  styleUrls: ['./create-arena.component.scss'],
  providers: [CreateArenaMgrService],
})
export class CreateArenaComponent extends IDestroyable implements OnInit {
  constructor(private _mgrService: CreateArenaMgrService) {
    super();
  }

  ngOnInit() {
    this._mgrService.loadData();
  }
}
