import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipmentComponent } from './update-shipment.component';

describe('UpdateShipmentComponent', () => {
  let component: UpdateShipmentComponent;
  let fixture: ComponentFixture<UpdateShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShipmentComponent]
    });
    fixture = TestBed.createComponent(UpdateShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
