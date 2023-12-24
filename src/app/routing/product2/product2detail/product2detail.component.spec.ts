import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2detailComponent } from './product2detail.component';

describe('Product2detailComponent', () => {
  let component: Product2detailComponent;
  let fixture: ComponentFixture<Product2detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product2detailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
