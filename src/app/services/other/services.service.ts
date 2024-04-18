import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, catchError, of } from 'rxjs';
import { City } from 'src/app/contracts/city';
import { Country } from 'src/app/contracts/country';
import { Incoterm } from 'src/app/contracts/incoterm';
import { Mode } from 'src/app/contracts/mode';
import { MovementType } from 'src/app/contracts/MovementType';
import { Unit1 } from 'src/app/contracts/unit1';
import { Unit2 } from 'src/app/contracts/unit2';
import { PackageType } from 'src/app/contracts/packageType';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClientService: HttpClientService) {
  }

  getCities(): Observable<City[]> {
    return this.httpClientService.get<City[]>({
      controller: "city"
    })
      .pipe(catchError(() => of([] as City[])));
  }

  getCountries(): Observable<Country[]> {
    return this.httpClientService.get<Country[]>({
      controller: "country"
    })
      .pipe(catchError(() => of([] as Country[])));
  }

  getIncoterms(): Observable<Incoterm[]> {
    return this.httpClientService.get<Incoterm[]>({
      controller: "incoterm"
    })
      .pipe(catchError(() => of([] as Incoterm[])));
  }

  getModes(): Observable<Mode[]> {
    return this.httpClientService.get<Mode[]>({
      controller: "mode"
    })
      .pipe(catchError(() => of([] as Mode[])));
  }

  getMovementTypes(): Observable<MovementType[]> {
    return this.httpClientService.get<MovementType[]>({
      controller: "movementType"
    })
      .pipe(catchError(() => of([])));
  }

  getPackageTypes(): Observable<PackageType[]> {
    return this.httpClientService.get<PackageType[]>({
      controller: "packageType"
    })
      .pipe(catchError(() => of([])));
  }

  getUnit1s(): Observable<Unit1[]> {
    return this.httpClientService.get<Unit1[]>({
      controller: "unit1"
    })
      .pipe(catchError(() => of([])));
  }

  getUnit2s(): Observable<Unit2[]> {
    return this.httpClientService.get<Unit2[]>({
      controller: "unit2"
    })
      .pipe(catchError(() => of([])));
  }
}
// getShipmentList(): Observable<ListShipment[]> {
//   return this.httpClientService.get<ListShipment[]>(
//     { controller: "offer" }
//   )
//     .pipe(catchError(() => of([])));
// }