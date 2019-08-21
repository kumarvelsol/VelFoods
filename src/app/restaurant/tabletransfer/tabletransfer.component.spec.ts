import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletransferComponent } from './tabletransfer.component';

describe('TabletransferComponent', () => {
  let component: TabletransferComponent;
  let fixture: ComponentFixture<TabletransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
