import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightdataComponent } from './flightdata.component';

describe('FlightdataComponent', () => {
  let component: FlightdataComponent;
  let fixture: ComponentFixture<FlightdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
