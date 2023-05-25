import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkRadioButtonComponent } from './dark-radio-button.component';

describe('DarkRadioButtonComponent', () => {
  let component: DarkRadioButtonComponent;
  let fixture: ComponentFixture<DarkRadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkRadioButtonComponent]
    });
    fixture = TestBed.createComponent(DarkRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
