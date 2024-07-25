import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneAngleConverterComponent } from './plane-angle-converter.component';

describe('PlaneAngleConverterComponent', () => {
  let component: PlaneAngleConverterComponent;
  let fixture: ComponentFixture<PlaneAngleConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaneAngleConverterComponent]
    });
    fixture = TestBed.createComponent(PlaneAngleConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
