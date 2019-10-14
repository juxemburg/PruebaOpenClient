import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaDetailBattleRecordsComponent } from './arena-detail-battle-records.component';

describe('ArenaDetailBattleRecordsComponent', () => {
  let component: ArenaDetailBattleRecordsComponent;
  let fixture: ComponentFixture<ArenaDetailBattleRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaDetailBattleRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaDetailBattleRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
