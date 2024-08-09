import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelEconomyConverterComponent } from './fuel-economy-converter.component';

describe('FuelEconomyConverterComponent', () => {
  let component: FuelEconomyConverterComponent;
  let fixture: ComponentFixture<FuelEconomyConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelEconomyConverterComponent]
    });
    fixture = TestBed.createComponent(FuelEconomyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
