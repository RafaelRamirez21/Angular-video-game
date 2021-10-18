import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from 'src/environments/environment.prod';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': `${env.HOST_API}`,
        'x-rapidapi-key': `${env.API_KEY}`
      },
      setParams: {
        key: `${env.KEY_PARAMS}`,
        
      }
    });
    return next.handle(req);
  }
}