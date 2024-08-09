import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferRateComponent } from './data-transfer-rate.component';

describe('DataTransferRateComponent', () => {
  let component: DataTransferRateComponent;
  let fixture: ComponentFixture<DataTransferRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTransferRateComponent]
    });
    fixture = TestBed.createComponent(DataTransferRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
