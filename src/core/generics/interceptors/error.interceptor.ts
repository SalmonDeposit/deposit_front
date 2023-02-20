import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {SnotifyService} from "ng-snotify";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sno: SnotifyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = null;
        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          errorMessage = `Erreur : ${error.error.message}`;
        } else {
          // Erreur côté serveur
          errorMessage = `Code d'erreur : ${error.status}- ${error.message}`;
        }
        if(errorMessage){
          this.sno.error(errorMessage);
        }
        return throwError(errorMessage);
      })
    );
  }
}
