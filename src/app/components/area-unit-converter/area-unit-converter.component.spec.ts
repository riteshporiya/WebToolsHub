import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaUnitConverterComponent } from './area-unit-converter.component';

describe('AreaUnitConverterComponent', () => {
  let component: AreaUnitConverterComponent;
  let fixture: ComponentFixture<AreaUnitConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaUnitConverterComponent]
    });
    fixture = TestBed.createComponent(AreaUnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
