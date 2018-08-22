import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab0Component } from './tab0.component';

describe('Tab0Component', () => {
  let component: Tab0Component;
  let fixture: ComponentFixture<Tab0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
