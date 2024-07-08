import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashGeneratorComponent } from './hash-generator.component';

describe('HashGeneratorComponent', () => {
  let component: HashGeneratorComponent;
  let fixture: ComponentFixture<HashGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HashGeneratorComponent]
    });
    fixture = TestBed.createComponent(HashGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
