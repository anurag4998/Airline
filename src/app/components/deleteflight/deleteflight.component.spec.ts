import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteflightComponent } from './deleteflight.component';

describe('DeleteflightComponent', () => {
  let component: DeleteflightComponent;
  let fixture: ComponentFixture<DeleteflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
