import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodePagePage } from './node-page.page';

describe('NodePagePage', () => {
  let component: NodePagePage;
  let fixture: ComponentFixture<NodePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
