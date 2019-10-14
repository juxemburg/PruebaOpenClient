import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaDetailBattleRecordItemComponent } from './arena-detail-battle-record-item.component';

describe('ArenaDetailBattleRecordItemComponent', () => {
  let component: ArenaDetailBattleRecordItemComponent;
  let fixture: ComponentFixture<ArenaDetailBattleRecordItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaDetailBattleRecordItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaDetailBattleRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
