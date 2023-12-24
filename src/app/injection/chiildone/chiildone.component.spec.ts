import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiildoneComponent } from './chiildone.component';

describe('ChiildoneComponent', () => {
  let component: ChiildoneComponent;
  let fixture: ComponentFixture<ChiildoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiildoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
