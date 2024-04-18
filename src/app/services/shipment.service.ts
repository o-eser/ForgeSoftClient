import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable, catchError, of } from 'rxjs';
import { ListShipment } from '../contracts/list_shipment';
import { CreateShipment } from '../entities/create-shipment';
import { UpdateShipmentModel } from '../contracts/update-shipment-model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private httpClientService: HttpClientService) {
  }

  getShipmentList(): Observable<ListShipment[]> {
    return this.httpClientService.get<ListShipment[]>(
      { controller: "offer" }
    )
      .pipe(catchError(() => of([])));
  }

  getShipmentById(id: string): Observable<{ result: ListShipment }> {
    return this.httpClientService.get<{ result: ListShipment }>(
      { controller: "offer" }, id
    )
      .pipe(catchError(() => of()));
  }
  getCreateShipmentById(id: string): Observable<UpdateShipmentModel> {
    return this.httpClientService.get<UpdateShipmentModel>(
      { controller: "offer", action: "getcreateoffer" }, id
    )
      .pipe(catchError(() => of()));
  }
  deleteShipment(id: string): Observable<any> {
    return this.httpClientService.delete<any>(
      { controller: "offer" }, id
    )
      .pipe(catchError(() => of()));
  }

  createShipment(data: CreateShipment): Observable<any> {
    return this.httpClientService.post<any>(
      { controller: "offer" }, data
    )
      .pipe(catchError(() => of()));
  }

  updateShipment(data: UpdateShipmentModel): Observable<any> {
    return this.httpClientService.put<any>(
      { controller: "offer" }, data
    )
      .pipe(catchError(() => of()));
  }
}
