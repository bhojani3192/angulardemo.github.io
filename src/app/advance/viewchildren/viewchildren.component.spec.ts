import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenComponent } from './viewchildren.component';

describe('ViewchildrenComponent', () => {
  let component: ViewchildrenComponent;
  let fixture: ComponentFixture<ViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
