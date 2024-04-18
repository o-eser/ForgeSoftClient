import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: DetailComponent }
    ]),
    NzDescriptionsModule,
    PipesModule
  ]
})
export class DetailModule { }
