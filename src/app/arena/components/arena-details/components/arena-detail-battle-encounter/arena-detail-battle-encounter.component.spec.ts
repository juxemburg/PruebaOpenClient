import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaDetailBattleEncounterComponent } from './arena-detail-battle-encounter.component';

describe('ArenaDetailBattleEncounterComponent', () => {
  let component: ArenaDetailBattleEncounterComponent;
  let fixture: ComponentFixture<ArenaDetailBattleEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaDetailBattleEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaDetailBattleEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
