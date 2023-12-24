import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmoduleComponent } from './ngmodule.component';

describe('NgmoduleComponent', () => {
  let component: NgmoduleComponent;
  let fixture: ComponentFixture<NgmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
