import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShipmentComponent } from './create-shipment.component';

describe('CreateShipmentComponent', () => {
  let component: CreateShipmentComponent;
  let fixture: ComponentFixture<CreateShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShipmentComponent]
    });
    fixture = TestBed.createComponent(CreateShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
