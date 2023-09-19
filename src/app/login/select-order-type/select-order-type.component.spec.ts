import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrderTypeComponent } from './select-order-type.component';

describe('SelectOrderTypeComponent', () => {
  let component: SelectOrderTypeComponent;
  let fixture: ComponentFixture<SelectOrderTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOrderTypeComponent]
    });
    fixture = TestBed.createComponent(SelectOrderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
