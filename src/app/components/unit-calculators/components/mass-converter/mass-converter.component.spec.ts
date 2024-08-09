import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassConverterComponent } from './mass-converter.component';

describe('MassConverterComponent', () => {
  let component: MassConverterComponent;
  let fixture: ComponentFixture<MassConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassConverterComponent]
    });
    fixture = TestBed.createComponent(MassConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
