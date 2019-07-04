import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettledbillsComponent } from './settledbills.component';

describe('SettledbillsComponent', () => {
  let component: SettledbillsComponent;
  let fixture: ComponentFixture<SettledbillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettledbillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettledbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
