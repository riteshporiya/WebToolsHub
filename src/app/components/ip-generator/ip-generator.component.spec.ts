import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGeneratorComponent } from './ip-generator.component';

describe('IpGeneratorComponent', () => {
  let component: IpGeneratorComponent;
  let fixture: ComponentFixture<IpGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpGeneratorComponent]
    });
    fixture = TestBed.createComponent(IpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
