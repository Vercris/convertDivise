/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DollarTabComponent } from './DollarTab.component';

describe('DollarTabComponent', () => {
  let component: DollarTabComponent;
  let fixture: ComponentFixture<DollarTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
