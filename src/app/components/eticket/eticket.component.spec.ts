import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticketComponent } from './eticket.component';

describe('EticketComponent', () => {
  let component: EticketComponent;
  let fixture: ComponentFixture<EticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
