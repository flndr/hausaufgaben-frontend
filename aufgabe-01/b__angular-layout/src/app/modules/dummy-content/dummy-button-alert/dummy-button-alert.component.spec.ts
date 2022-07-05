import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyButtonAlertComponent } from './dummy-button-alert.component';

describe('DummyButtonAlertComponent', () => {
  let component: DummyButtonAlertComponent;
  let fixture: ComponentFixture<DummyButtonAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyButtonAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyButtonAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
