import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNamesComponent } from './item-names.component';

describe('ItemNamesComponent', () => {
  let component: ItemNamesComponent;
  let fixture: ComponentFixture<ItemNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
