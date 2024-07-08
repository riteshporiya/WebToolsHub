import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidGeneratorComponent } from './uuid-generator.component';

describe('UuidGeneratorComponent', () => {
  let component: UuidGeneratorComponent;
  let fixture: ComponentFixture<UuidGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UuidGeneratorComponent]
    });
    fixture = TestBed.createComponent(UuidGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
