import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InjectiongrandchildComponent } from './injectiongrandchild.component';

describe('InjectiongrandchildComponent', () => {
  let component: InjectiongrandchildComponent;
  let fixture: ComponentFixture<InjectiongrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectiongrandchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectiongrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
