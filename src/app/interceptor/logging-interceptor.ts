import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(httpRequest: HttpRequest<any>,
            httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    const tag = 'Network';
    return httpHandler.handle(httpRequest)
      .pipe(tap((success) => console.log(tag, success), (error) => console.error(tag, error), () => console.log(tag, 'Completed')));
  }

}
