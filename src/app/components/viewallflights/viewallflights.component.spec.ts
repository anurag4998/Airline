import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallflightsComponent } from './viewallflights.component';

describe('ViewallflightsComponent', () => {
  let component: ViewallflightsComponent;
  let fixture: ComponentFixture<ViewallflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
