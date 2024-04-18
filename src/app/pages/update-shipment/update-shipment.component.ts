import { Component, OnInit } from '@angular/core';
import { ListShipment } from 'src/app/contracts/list_shipment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { UpdateShipmentModel } from 'src/app/contracts/update-shipment-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-shipment',
  templateUrl: './update-shipment.component.html',
  styleUrls: ['./update-shipment.component.scss']
})
export class UpdateShipmentComponent implements OnInit {
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
  shipment: ListShipment;
  updateShipmentModel: UpdateShipmentModel = new UpdateShipmentModel();

  validateForm: FormGroup<{
    modeid: FormControl<string>;
    incotermid: FormControl<string>;
    movementTypeid: FormControl<string>;
    packageTypeid: FormControl<string>;
    unit1id: FormControl<string>;
    unit2id: FormControl<string>;
    currency: FormControl<number>;
    cityid: FormControl<string[]>;
    unit1quantity: FormControl<number>;
    unit2quantity: FormControl<number>;
  }> = this.fb.group({
    modeid: this.fb.control<string>(this.updateShipmentModel.modeId, Validators.required),
    incotermid: this.fb.control<string>(this.updateShipmentModel.incotermId, Validators.required),
    movementTypeid: this.fb.control<string>(this.updateShipmentModel.movementTypeId, Validators.required),
    packageTypeid: this.fb.control<string>(this.updateShipmentModel.packageTypeId, Validators.required),
    unit1id: this.fb.control<string>(this.updateShipmentModel.unit1Id, Validators.required),
    unit2id: this.fb.control<string>(this.updateShipmentModel.unit2Id, Validators.required),
    currency: this.fb.control<number>(this.updateShipmentModel.currency, Validators.required),
    cityid: this.fb.control<string[]>([this.updateShipmentModel.countryId, this.updateShipmentModel.cityId], Validators.required),
    unit1quantity: this.fb.control<number>(this.updateShipmentModel.unit1Quantity, Validators.required),
    unit2quantity: this.fb.control<number>(this.updateShipmentModel.unit2Quantity, Validators.required),
  });

  constructor(private fb: FormBuilder, private otherServices: ServicesService, private shipmentService: ShipmentService, private router: Router) { }

  setDefaultValues(): void {
    this.validateForm.patchValue({
      modeid: this.updateShipmentModel.modeId,
      incotermid: this.updateShipmentModel.incotermId,
      movementTypeid: this.updateShipmentModel.movementTypeId,
      packageTypeid: this.updateShipmentModel.packageTypeId,
      unit1id: this.updateShipmentModel.unit1Id,
      unit2id: this.updateShipmentModel.unit2Id,
      currency: this.updateShipmentModel.currency,
      cityid: [this.updateShipmentModel.countryId, this.updateShipmentModel.cityId],
      unit1quantity: this.updateShipmentModel.unit1Quantity,
      unit2quantity: this.updateShipmentModel.unit2Quantity,
    });
  }

  ngOnInit(): void {

    this.shipment = history.state.data;
    console.log(this.shipment);
    this.shipmentService.getCreateShipmentById(this.shipment.id).subscribe((data) => {
      this.updateShipmentModel = data;
      console.log(data);
      this.setDefaultValues();
    });

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

  submitForm(): void {
    if (this.validateForm.valid) {

      const cityidValue = this.validateForm.value.cityid;
      const cityid = cityidValue ? cityidValue[1] : null;

      const countryidValue = this.validateForm.value.cityid;
      const countryid = countryidValue ? countryidValue[0] : null;

      const shipmentData: UpdateShipmentModel = {
        id: this.shipment.id,
        modeId: this.validateForm.value.modeid,
        incotermId: this.validateForm.value.incotermid,
        movementTypeId: this.validateForm.value.movementTypeid,
        packageTypeId: this.validateForm.value.packageTypeid,
        unit1Id: this.validateForm.value.unit1id,
        unit2Id: this.validateForm.value.unit2id,
        currency: this.validateForm.value.currency,
        cityId: cityid,
        countryId: countryid,
        unit1Quantity: this.validateForm.value.unit1quantity,
        unit2Quantity: this.validateForm.value.unit2quantity,
      };

      this.shipmentService.updateShipment(shipmentData).subscribe(() => {
        console.log('Shipment update successfully');
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


}
