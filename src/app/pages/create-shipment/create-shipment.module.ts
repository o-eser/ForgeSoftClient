import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateShipmentComponent } from './create-shipment.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateShipmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: CreateShipmentComponent }
    ]),
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzCascaderModule,
    FormsModule
  ]
})
export class CreateShipmentModule { }
