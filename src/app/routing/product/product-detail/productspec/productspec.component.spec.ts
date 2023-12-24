import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspecComponent } from './productspec.component';

describe('ProductspecComponent', () => {
  let component: ProductspecComponent;
  let fixture: ComponentFixture<ProductspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductspecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
