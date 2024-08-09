import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverterComponent } from './temperature-converter.component';

describe('TemperatureConverterComponent', () => {
  let component: TemperatureConverterComponent;
  let fixture: ComponentFixture<TemperatureConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureConverterComponent]
    });
    fixture = TestBed.createComponent(TemperatureConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
