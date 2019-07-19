import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscollectionComponent } from './miscollection.component';

describe('MiscollectionComponent', () => {
  let component: MiscollectionComponent;
  let fixture: ComponentFixture<MiscollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
