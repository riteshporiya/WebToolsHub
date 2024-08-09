import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConverterComponent } from './energy-converter.component';

describe('EnergyConverterComponent', () => {
  let component: EnergyConverterComponent;
  let fixture: ComponentFixture<EnergyConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyConverterComponent]
    });
    fixture = TestBed.createComponent(EnergyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
