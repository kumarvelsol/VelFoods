import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidoutsmiscolComponent } from './paidoutsmiscol.component';

describe('PaidoutsmiscolComponent', () => {
  let component: PaidoutsmiscolComponent;
  let fixture: ComponentFixture<PaidoutsmiscolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidoutsmiscolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidoutsmiscolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
