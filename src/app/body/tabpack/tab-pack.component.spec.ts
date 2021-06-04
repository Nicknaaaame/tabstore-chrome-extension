import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPackComponent } from './tab-pack.component';

describe('TabpackComponent', () => {
  let component: TabPackComponent;
  let fixture: ComponentFixture<TabPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
