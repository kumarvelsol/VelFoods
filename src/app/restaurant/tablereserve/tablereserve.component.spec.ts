import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereserveComponent } from './tablereserve.component';

describe('TablereserveComponent', () => {
  let component: TablereserveComponent;
  let fixture: ComponentFixture<TablereserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablereserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablereserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
