import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsWidgetComponent } from './poi-widget.component';

describe('HotelsWidgetComponent', () => {
  let component: HotelsWidgetComponent;
  let fixture: ComponentFixture<HotelsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
