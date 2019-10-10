import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisablableDirective} from '../disablable.directive';


@NgModule({
  declarations: [DisablableDirective],
  exports: [
    DisablableDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DisablableModule {


}
