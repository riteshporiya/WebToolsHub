import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyConverterComponent } from './frequency-converter.component';

describe('FrequencyConverterComponent', () => {
  let component: FrequencyConverterComponent;
  let fixture: ComponentFixture<FrequencyConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequencyConverterComponent]
    });
    fixture = TestBed.createComponent(FrequencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
