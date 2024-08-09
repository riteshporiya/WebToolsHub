import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConverterComponent } from './time-converter.component';

describe('TimeConverterComponent', () => {
  let component: TimeConverterComponent;
  let fixture: ComponentFixture<TimeConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeConverterComponent]
    });
    fixture = TestBed.createComponent(TimeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
