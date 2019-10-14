import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaListItemComponent } from './arena-list-item.component';

describe('ArenaListItemComponent', () => {
  let component: ArenaListItemComponent;
  let fixture: ComponentFixture<ArenaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
