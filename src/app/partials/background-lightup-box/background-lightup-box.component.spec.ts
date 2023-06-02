import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundLightupBoxComponent } from './background-lightup-box.component';

describe('BackgroundLightupBoxComponent', () => {
  let component: BackgroundLightupBoxComponent;
  let fixture: ComponentFixture<BackgroundLightupBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundLightupBoxComponent]
    });
    fixture = TestBed.createComponent(BackgroundLightupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
