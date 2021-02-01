import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatuiComponent } from './seatui.component';

describe('SeatuiComponent', () => {
  let component: SeatuiComponent;
  let fixture: ComponentFixture<SeatuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
