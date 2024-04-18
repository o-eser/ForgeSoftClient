import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { MovementType } from 'src/app/contracts/MovementType';
import { Country } from 'src/app/contracts/country';
import { Incoterm } from 'src/app/contracts/incoterm';
import { Mode } from 'src/app/contracts/mode';
import { PackageType } from 'src/app/contracts/packageType';
import { Unit1 } from 'src/app/contracts/unit1';
import { Unit2 } from 'src/app/contracts/unit2';
import { CreateShipment } from 'src/app/entities/create-shipment';
import { ServicesService } from 'src/app/services/other/services.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.scss']
})


export class CreateShipmentComponent implements OnInit {
  modes: Mode[] = [];
  countries: Country[] = [];
  incoterms: Incoterm[] = [];
  movementTypes: MovementType[] = [];
  packageTypes: PackageType[] = [];
  unit1s: Unit1[] = [];
  unit2s: Unit2[] = [];
  currencies = [
    { value: 1, label: 'USD - US Dollar' },
    { value: 2, label: 'CNY - Chinese Yuan' },
    { value: 3, label: 'TRY - Turkish Lira' }
  ];
  nzOptions: NzCascaderOption[] = [];
  selectedValues: string[] = [];

  validateForm: FormGroup<{
    modeid: FormControl<null>;
    incotermid: FormControl<null>;
    movementTypeid: FormControl<null>;
    packageTypeid: FormControl<null>;
    unit1id: FormControl<null>;
    unit2id: FormControl<null>;
    currency: FormControl<null>;
    cityid: FormControl<null>;
    unit1quantity: FormControl<null>;
    unit2quantity: FormControl<null>;
  }> = this.fb.group({
    modeid: this.fb.control<null>(null, Validators.required),
    incotermid: this.fb.control<null>(null, Validators.required),
    movementTypeid: this.fb.control<null>(null, Validators.required),
    packageTypeid: this.fb.control<null>(null, Validators.required),
    unit1id: this.fb.control<null>(null, Validators.required),
    unit2id: this.fb.control<null>(null, Validators.required),
    currency: this.fb.control<null>(null, Validators.required),
    cityid: this.fb.control<null>(null, Validators.required),
    unit1quantity: this.fb.control<null>(null, Validators.required),
    unit2quantity: this.fb.control<null>(null, Validators.required),
  });

  submitForm(): void {
    if (this.validateForm.valid) {

      const cityidValue = this.validateForm.value.cityid;
      const cityid = cityidValue ? cityidValue[1] : null;

      const shipmentData: CreateShipment = {
        modeId: this.validateForm.value.modeid,
        incotermId: this.validateForm.value.incotermid,
        movementTypeId: this.validateForm.value.movementTypeid,
        packageTypeId: this.validateForm.value.packageTypeid,
        unit1Id: this.validateForm.value.unit1id,
        unit2Id: this.validateForm.value.unit2id,
        currency: this.validateForm.value.currency,
        cityId: cityid,
        unit1Quantity: this.validateForm.value.unit1quantity,
        unit2Quantity: this.validateForm.value.unit2quantity,
      };

      this.shipmentService.createShipment(shipmentData).subscribe(() => {
        console.log('Shipment created successfully');
        this.router.navigate(['/shipment-list']);
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }





  constructor(private fb: FormBuilder, private otherServices: ServicesService, private shipmentService: ShipmentService, private router: Router) { }

  ngOnInit(): void {
    this.otherServices.getModes().subscribe((data) => {
      this.modes = data;
    });

    this.otherServices.getCountries().subscribe((data) => {
      this.countries = data;
      this.nzOptions = data.map(country => ({
        value: country.id,
        label: country.name,
        isLeaf: false,
        children: country.cities.map(city => ({
          value: city.id,
          label: city.name,
          isLeaf: true
        }))
      }));
    });

    this.otherServices.getIncoterms().subscribe((data) => {
      this.incoterms = data;
    });

    this.otherServices.getMovementTypes().subscribe((data) => {
      this.movementTypes = data;
    });

    this.otherServices.getPackageTypes().subscribe((data) => {
      this.packageTypes = data;
    });

    this.otherServices.getUnit1s().subscribe((data) => {
      this.unit1s = data;
    });

    this.otherServices.getUnit2s().subscribe((data) => {
      this.unit2s = data;
    });

  }

}
