import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRepeaterComponent } from './text-repeater.component';

describe('TextRepeaterComponent', () => {
  let component: TextRepeaterComponent;
  let fixture: ComponentFixture<TextRepeaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextRepeaterComponent]
    });
    fixture = TestBed.createComponent(TextRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
