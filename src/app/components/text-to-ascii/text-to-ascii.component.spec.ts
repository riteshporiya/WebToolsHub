import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToAsciiComponent } from './text-to-ascii.component';

describe('TextToAsciiComponent', () => {
  let component: TextToAsciiComponent;
  let fixture: ComponentFixture<TextToAsciiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToAsciiComponent]
    });
    fixture = TestBed.createComponent(TextToAsciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
