import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGeneratorComponent } from './qr-code-generator.component';

describe('QrCodeGeneratorComponent', () => {
  let component: QrCodeGeneratorComponent;
  let fixture: ComponentFixture<QrCodeGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeGeneratorComponent]
    });
    fixture = TestBed.createComponent(QrCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
