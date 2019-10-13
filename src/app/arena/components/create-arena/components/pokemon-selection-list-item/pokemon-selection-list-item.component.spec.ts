import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelectionListItemComponent } from './pokemon-selection-list-item.component';

describe('PokemonSelectionListItemComponent', () => {
  let component: PokemonSelectionListItemComponent;
  let fixture: ComponentFixture<PokemonSelectionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSelectionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSelectionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
