import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledefinitionComponent } from './tabledefinition.component';

describe('TabledefinitionComponent', () => {
  let component: TabledefinitionComponent;
  let fixture: ComponentFixture<TabledefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
