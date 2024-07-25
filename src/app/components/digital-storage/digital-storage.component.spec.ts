import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStorageComponent } from './digital-storage.component';

describe('DigitalStorageComponent', () => {
  let component: DigitalStorageComponent;
  let fixture: ComponentFixture<DigitalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalStorageComponent]
    });
    fixture = TestBed.createComponent(DigitalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
