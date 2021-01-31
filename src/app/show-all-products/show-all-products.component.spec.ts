import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProductsComponent } from './show-all-products.component';

describe('ShowAllProductsComponent', () => {
  let component: ShowAllProductsComponent;
  let fixture: ComponentFixture<ShowAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
