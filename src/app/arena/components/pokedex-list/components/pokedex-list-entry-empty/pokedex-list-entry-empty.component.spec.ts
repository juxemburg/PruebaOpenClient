import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListEntryEmptyComponent } from './pokedex-list-entry-empty.component';

describe('PokedexListEntryEmptyComponent', () => {
  let component: PokedexListEntryEmptyComponent;
  let fixture: ComponentFixture<PokedexListEntryEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexListEntryEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListEntryEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
