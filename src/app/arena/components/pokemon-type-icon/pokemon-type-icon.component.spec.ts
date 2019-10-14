import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeIconComponent } from './pokemon-type-icon.component';

describe('PokemonTypeIconComponent', () => {
  let component: PokemonTypeIconComponent;
  let fixture: ComponentFixture<PokemonTypeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTypeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
