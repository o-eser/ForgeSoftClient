import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListShipment } from 'src/app/contracts/list_shipment';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  id: string;
  shipment: ListShipment = new ListShipment();
  constructor(private shipmentService: ShipmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shipmentService.getShipmentById(this.id).subscribe(data => {
      this.shipment = data.result;
    });
  }

  updateShipment(data: ListShipment) {
    this.router.navigate(['/update'], { state: { data: data } });
  }

}
