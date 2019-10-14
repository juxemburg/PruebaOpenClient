import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbitButtonComponent } from './sumbit-button.component';

describe('SumbitButtonComponent', () => {
  let component: SumbitButtonComponent;
  let fixture: ComponentFixture<SumbitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumbitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumbitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
