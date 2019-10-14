import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestroyable } from '../../models/IDestroyable.class';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sumbit-button',
  templateUrl: './sumbit-button.component.html',
  styleUrls: ['./sumbit-button.component.scss'],
})
export class SumbitButtonComponent extends IDestroyable implements OnInit {
  @Input() btnText: string;
  @Input() btnClass: string;

  @Input() icon: string;

  @Input() disabled: boolean;

  @Input() set isLoading$(v: Observable<boolean>) {
    if (!v) {
      return;
    }
    v.pipe(takeUntil(this._onDestroyed$)).subscribe(v => {
      this.btnIcon = v ? 'sync-alt' : this.icon;
      this.loading = v;
    });
  }

  @Output() onClicked = new EventEmitter<boolean>();

  public btnIcon: string;
  public loading = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.btnIcon = `${this.icon}`;
  }

  btnClickHandler(): void {
    this.onClicked.emit(true);
  }
}
