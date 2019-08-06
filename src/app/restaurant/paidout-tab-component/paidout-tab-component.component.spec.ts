import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidoutTabComponentComponent } from './paidout-tab-component.component';

describe('PaidoutTabComponentComponent', () => {
  let component: PaidoutTabComponentComponent;
  let fixture: ComponentFixture<PaidoutTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidoutTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidoutTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
