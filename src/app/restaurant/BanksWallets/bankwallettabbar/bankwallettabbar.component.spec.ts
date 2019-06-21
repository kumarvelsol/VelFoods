import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankwallettabbarComponent } from './bankwallettabbar.component';

describe('BankwallettabbarComponent', () => {
  let component: BankwallettabbarComponent;
  let fixture: ComponentFixture<BankwallettabbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankwallettabbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankwallettabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
