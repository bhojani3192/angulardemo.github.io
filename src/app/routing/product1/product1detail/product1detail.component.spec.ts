import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1detailComponent } from './product1detail.component';

describe('Product1detailComponent', () => {
  let component: Product1detailComponent;
  let fixture: ComponentFixture<Product1detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product1detailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
