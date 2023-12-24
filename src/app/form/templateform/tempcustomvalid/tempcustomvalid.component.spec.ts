import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcustomvalidComponent } from './tempcustomvalid.component';

describe('TempcustomvalidComponent', () => {
  let component: TempcustomvalidComponent;
  let fixture: ComponentFixture<TempcustomvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempcustomvalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempcustomvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
