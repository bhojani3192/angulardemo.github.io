import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedrouteComponent } from './activatedroute.component';

describe('ActivatedrouteComponent', () => {
  let component: ActivatedrouteComponent;
  let fixture: ComponentFixture<ActivatedrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatedrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
