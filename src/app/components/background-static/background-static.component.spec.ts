import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundStaticComponent } from './background-static.component';

describe('BackgroundStaticComponent', () => {
  let component: BackgroundStaticComponent;
  let fixture: ComponentFixture<BackgroundStaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundStaticComponent]
    });
    fixture = TestBed.createComponent(BackgroundStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
