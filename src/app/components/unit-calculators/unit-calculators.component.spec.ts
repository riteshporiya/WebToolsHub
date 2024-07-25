import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCalculatorsComponent } from './unit-calculators.component';

describe('UnitCalculatorsComponent', () => {
  let component: UnitCalculatorsComponent;
  let fixture: ComponentFixture<UnitCalculatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitCalculatorsComponent]
    });
    fixture = TestBed.createComponent(UnitCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
