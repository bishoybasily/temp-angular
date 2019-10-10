import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers.component';
import {DisablableModule} from '../disablable/disablable.module';


const routes: Routes = [
  {path: '', component: CustomersComponent}
];

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DisablableModule
  ]
})
export class CustomersModule {
}
