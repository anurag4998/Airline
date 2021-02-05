import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloggedinheaderComponent } from './adminloggedinheader.component';

describe('AdminloggedinheaderComponent', () => {
  let component: AdminloggedinheaderComponent;
  let fixture: ComponentFixture<AdminloggedinheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloggedinheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloggedinheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
