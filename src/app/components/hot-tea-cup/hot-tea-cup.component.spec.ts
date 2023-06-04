import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTeaCupComponent } from './hot-tea-cup.component';

describe('HotTeaCupComponent', () => {
  let component: HotTeaCupComponent;
  let fixture: ComponentFixture<HotTeaCupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotTeaCupComponent]
    });
    fixture = TestBed.createComponent(HotTeaCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
