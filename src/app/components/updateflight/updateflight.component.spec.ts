import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateflightComponent } from './updateflight.component';

describe('UpdateflightComponent', () => {
  let component: UpdateflightComponent;
  let fixture: ComponentFixture<UpdateflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
