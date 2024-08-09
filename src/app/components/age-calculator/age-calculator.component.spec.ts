import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalculatorComponent } from './age-calculator.component';

describe('AgeCalculatorComponent', () => {
  let component: AgeCalculatorComponent;
  let fixture: ComponentFixture<AgeCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeCalculatorComponent]
    });
    fixture = TestBed.createComponent(AgeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
