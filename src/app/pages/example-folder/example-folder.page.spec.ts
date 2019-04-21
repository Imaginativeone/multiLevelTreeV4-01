import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFolderPage } from './example-folder.page';

describe('ExampleFolderPage', () => {
  let component: ExampleFolderPage;
  let fixture: ComponentFixture<ExampleFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFolderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
