import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {SnotifyService} from "ng-snotify";
import {ValidationModel} from "../classes/validation-model";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sno: SnotifyService) {}

  manageError(error: ValidationModel){
    Object.keys(error.errors).forEach(key => {
      const errorMessage = `${key} : ${error.errors[key]}`
      this.sno.error(errorMessage)
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.manageError(error.error)
        return of();
      })
    );
  }
}
