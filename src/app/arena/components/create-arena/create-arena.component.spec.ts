import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArenaComponent } from './create-arena.component';

describe('CreateArenaComponent', () => {
  let component: CreateArenaComponent;
  let fixture: ComponentFixture<CreateArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
