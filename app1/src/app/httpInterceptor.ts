import { catchError } from 'rxjs/operators';

import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({ providedIn: 'root'})
export class MyInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");

    const headers = new HttpHeaders({
      'myheader' : 'myheaderValue'
    });
    const newreq = req.clone( {
      headers
    })
    return next.handle(newreq).pipe(
      catchError(this.handleError)
    )
  }

  handleError(e:HttpErrorResponse) {
    // to do you logic
    return throwError(e);
  }

}