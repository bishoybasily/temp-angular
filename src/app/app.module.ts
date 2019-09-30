import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Sub1Component} from './sub1/sub1.component';
import {Sub2Component} from './sub2/sub2.component';
import {Sub3Component} from './sub3/sub3.component';
import {RouterModule, Routes} from '@angular/router';
import {MeService} from './service/me.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from './interceptor/basic-auth.interceptor';
import {LoggingInterceptor} from './interceptor/logging-interceptor';


const routes: Routes = [{
  path: '',
  redirectTo: 'sub1',
  pathMatch: 'full'
}, {
  path: 'sub1',
  component: Sub1Component,
  children: [{
    path: 'sub2',
    component: Sub2Component,
    children: [{
      path: 'sub3',
      component: Sub3Component
    }]
  }]
}];

const SERVICES = [
  MeService
];

const INTERCEPTORS = [{
  provide: HTTP_INTERCEPTORS,
  useClass: BasicAuthInterceptor,
  multi: true
}, {
  provide: HTTP_INTERCEPTORS,
  useClass: LoggingInterceptor,
  multi: true
}];

@NgModule({
  declarations: [
    AppComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [...INTERCEPTORS, ...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {
}