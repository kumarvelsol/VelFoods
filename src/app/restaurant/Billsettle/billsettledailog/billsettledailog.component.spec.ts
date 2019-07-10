import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsettledailogComponent } from './billsettledailog.component';

describe('BillsettledailogComponent', () => {
  let component: BillsettledailogComponent;
  let fixture: ComponentFixture<BillsettledailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsettledailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsettledailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
