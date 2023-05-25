import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingRadioCheckboxComponent } from './sliding-radio-checkbox.component';

describe('SlidingRadioCheckboxComponent', () => {
  let component: SlidingRadioCheckboxComponent;
  let fixture: ComponentFixture<SlidingRadioCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingRadioCheckboxComponent]
    });
    fixture = TestBed.createComponent(SlidingRadioCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
