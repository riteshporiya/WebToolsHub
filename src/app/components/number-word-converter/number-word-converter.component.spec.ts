import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberWordConverterComponent } from './number-word-converter.component';

describe('NumberWordConverterComponent', () => {
  let component: NumberWordConverterComponent;
  let fixture: ComponentFixture<NumberWordConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberWordConverterComponent]
    });
    fixture = TestBed.createComponent(NumberWordConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
