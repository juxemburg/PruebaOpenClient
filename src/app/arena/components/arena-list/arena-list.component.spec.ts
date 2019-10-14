import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaListComponent } from './arena-list.component';

describe('ArenaListComponent', () => {
  let component: ArenaListComponent;
  let fixture: ComponentFixture<ArenaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
