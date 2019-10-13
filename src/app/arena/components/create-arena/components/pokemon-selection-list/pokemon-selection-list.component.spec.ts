import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelectionListComponent } from './pokemon-selection-list.component';

describe('PokemonSelectionListComponent', () => {
  let component: PokemonSelectionListComponent;
  let fixture: ComponentFixture<PokemonSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
