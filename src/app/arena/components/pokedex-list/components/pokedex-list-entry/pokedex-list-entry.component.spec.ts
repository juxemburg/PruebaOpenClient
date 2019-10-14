import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListEntryComponent } from './pokedex-list-entry.component';

describe('PokedexListEntryComponent', () => {
  let component: PokedexListEntryComponent;
  let fixture: ComponentFixture<PokedexListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
