import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletchildComponent } from './outletchild.component';

describe('OutletchildComponent', () => {
  let component: OutletchildComponent;
  let fixture: ComponentFixture<OutletchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
