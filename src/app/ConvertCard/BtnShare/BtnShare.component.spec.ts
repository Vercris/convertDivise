/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnShareComponent } from './BtnShare.component';

describe('BtnShareComponent', () => {
  let component: BtnShareComponent;
  let fixture: ComponentFixture<BtnShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
