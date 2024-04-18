import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentListComponent } from './shipment-list.component';
import { RouterModule } from '@angular/router';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CurrencyToStringPipe } from 'src/app/pipes/currencyToString.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    ShipmentListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ShipmentListComponent }
    ]),
    NzTableModule, NzDividerModule,
    PipesModule
  ]
})
export class ShipmentListModule {

}
