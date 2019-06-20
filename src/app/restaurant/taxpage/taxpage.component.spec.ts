import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpageComponent } from './taxpage.component';

describe('TaxpageComponent', () => {
  let component: TaxpageComponent;
  let fixture: ComponentFixture<TaxpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
