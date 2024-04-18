import { Component, OnInit } from '@angular/core';
import { ListShipment } from 'src/app/contracts/list_shipment';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  constructor(private shipmentService: ShipmentService) {
  }
  listOfShipment: ListShipment[] = [];
  loading = true;


  loadDataFromServer(): void {
    this.loading = true;
    this.shipmentService.getShipmentList().subscribe(data => {
      this.loading = false;
      this.listOfShipment = data;
    });
  }
  deleteShipment(id: string): void {
    this.shipmentService.deleteShipment(id).subscribe(() => {
      this.loadDataFromServer();
    });
  }
  ngOnInit(): void {
    this.loadDataFromServer();
  }
}
