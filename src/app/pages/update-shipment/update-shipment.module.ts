import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateShipmentComponent } from './update-shipment.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateShipmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: UpdateShipmentComponent }
    ]),
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzCascaderModule,
    FormsModule
  ]
})
export class UpdateShipmentModule { }
