import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleJsonmapPage } from './example-jsonmap.page';

describe('ExampleJsonmapPage', () => {
  let component: ExampleJsonmapPage;
  let fixture: ComponentFixture<ExampleJsonmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleJsonmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleJsonmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
