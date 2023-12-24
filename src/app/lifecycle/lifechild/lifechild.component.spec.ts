import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifechildComponent } from './lifechild.component';

describe('LifechildComponent', () => {
  let component: LifechildComponent;
  let fixture: ComponentFixture<LifechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
