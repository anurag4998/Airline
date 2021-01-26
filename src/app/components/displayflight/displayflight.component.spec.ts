import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayflightComponent } from './displayflight.component';

describe('DisplayflightComponent', () => {
  let component: DisplayflightComponent;
  let fixture: ComponentFixture<DisplayflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
