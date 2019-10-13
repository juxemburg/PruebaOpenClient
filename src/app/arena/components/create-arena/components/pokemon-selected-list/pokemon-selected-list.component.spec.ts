import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelectedListComponent } from './pokemon-selected-list.component';

describe('PokemonSelectedListComponent', () => {
  let component: PokemonSelectedListComponent;
  let fixture: ComponentFixture<PokemonSelectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSelectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
