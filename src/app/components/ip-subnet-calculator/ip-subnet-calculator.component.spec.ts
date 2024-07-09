import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpSubnetCalculatorComponent } from './ip-subnet-calculator.component';

describe('IpSubnetCalculatorComponent', () => {
  let component: IpSubnetCalculatorComponent;
  let fixture: ComponentFixture<IpSubnetCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpSubnetCalculatorComponent]
    });
    fixture = TestBed.createComponent(IpSubnetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
