import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureConverterComponent } from './pressure-converter.component';

describe('PressureConverterComponent', () => {
  let component: PressureConverterComponent;
  let fixture: ComponentFixture<PressureConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressureConverterComponent]
    });
    fixture = TestBed.createComponent(PressureConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
