import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisablableDirective} from '../disablable.directive';
import {DisabledComponent} from '../disabled/disabled.component';


@NgModule({
  declarations: [DisablableDirective, DisabledComponent],
  exports: [
    DisablableDirective,
    DisabledComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    DisabledComponent
  ]
})
export class DisablableModule {


}
