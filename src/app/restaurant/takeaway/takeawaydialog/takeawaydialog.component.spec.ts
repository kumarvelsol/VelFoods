import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeawaydialogComponent } from './takeawaydialog.component';

describe('TakeawaydialogComponent', () => {
  let component: TakeawaydialogComponent;
  let fixture: ComponentFixture<TakeawaydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeawaydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeawaydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
