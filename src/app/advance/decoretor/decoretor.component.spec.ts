import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoretorComponent } from './decoretor.component';

describe('DecoretorComponent', () => {
  let component: DecoretorComponent;
  let fixture: ComponentFixture<DecoretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
