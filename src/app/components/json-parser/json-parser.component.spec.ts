import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserComponent } from './json-parser.component';

describe('JsonParserComponent', () => {
  let component: JsonParserComponent;
  let fixture: ComponentFixture<JsonParserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonParserComponent]
    });
    fixture = TestBed.createComponent(JsonParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
