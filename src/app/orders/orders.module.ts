import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders.component';
import {DisablableModule} from '../disablable/disablable.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: OrdersComponent}
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DisablableModule
  ]
})
export class OrdersModule {
}
