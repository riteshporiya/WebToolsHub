import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeGeneratorComponent } from './barcode-generator.component';

describe('BarcodeGeneratorComponent', () => {
  let component: BarcodeGeneratorComponent;
  let fixture: ComponentFixture<BarcodeGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodeGeneratorComponent]
    });
    fixture = TestBed.createComponent(BarcodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
