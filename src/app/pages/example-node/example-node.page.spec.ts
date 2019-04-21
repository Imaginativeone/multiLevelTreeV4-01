import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNodePage } from './example-node.page';

describe('ExampleNodePage', () => {
  let component: ExampleNodePage;
  let fixture: ComponentFixture<ExampleNodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
