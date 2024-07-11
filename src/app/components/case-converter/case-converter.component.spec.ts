import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseConverterComponent } from './case-converter.component';

describe('CaseConverterComponent', () => {
  let component: CaseConverterComponent;
  let fixture: ComponentFixture<CaseConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseConverterComponent]
    });
    fixture = TestBed.createComponent(CaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
