import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeConverterComponent } from './volume-converter.component';

describe('VolumeConverterComponent', () => {
  let component: VolumeConverterComponent;
  let fixture: ComponentFixture<VolumeConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeConverterComponent]
    });
    fixture = TestBed.createComponent(VolumeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
