import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateobservableComponent } from './createobservable.component';

describe('CreateobservableComponent', () => {
  let component: CreateobservableComponent;
  let fixture: ComponentFixture<CreateobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateobservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
