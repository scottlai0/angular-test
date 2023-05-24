import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNoToolComponent } from './single-no-tool.component';

describe('SingleNoToolComponent', () => {
  let component: SingleNoToolComponent;
  let fixture: ComponentFixture<SingleNoToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleNoToolComponent]
    });
    fixture = TestBed.createComponent(SingleNoToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
