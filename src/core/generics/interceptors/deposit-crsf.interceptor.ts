import {DepositHttpService} from "../services/http/deposit-http.service";
import {from, Observable, tap} from "rxjs";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../classes/environment";
import {switchMap} from 'rxjs/operators';

@Injectable()
export class DepositTokenCrsfInterceptor implements HttpInterceptor {

  tokenCrsf : string = '';
  constructor(@Inject('env') protected environment: Environment, private http : DepositHttpService) {
  }

  private loadCsrfToken(): Observable<any> {
    const csrfUrl = `${this.environment.sanctumUrl}`
    return from(this.http.get(csrfUrl, { withCredentials: true }))
      .pipe(
        tap(() => {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('XSRF-TOKEN=')) {
              this.tokenCrsf = cookie.substring(11);
              console.log(this.tokenCrsf)
              break;
            }
          }
        })
      )
  }

  private continueRequest(req: HttpRequest<any>, next: HttpHandler, token: string): Observable<HttpEvent<any>> {
    const cookieheaderName = 'X-XSRF-TOKEN'
    let headers = new HttpHeaders();
    if (token !== '' && !req.headers.has(cookieheaderName)) {
      console.log(this.tokenCrsf)
      headers = headers.append(cookieheaderName,  token)
    }
    headers = headers.append('Current-culture', navigator.language);
    headers = headers.append('Current-tz-offset', new Date().getTimezoneOffset().toString());
    headers = headers.append('Current-tz-timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
    headers = headers.append('Content-type', "application/json")

    console.log(headers)
    req = req.clone({headers: headers, withCredentials: true});
    return next.handle(req);
  }
  needCRSFToken(url: string) : boolean{
    console.log(!url.includes('login'))
    return !url.includes('login');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.tokenCrsf == '' && req.url != this.environment.sanctumUrl) {
      return this.loadCsrfToken().pipe(
        switchMap(() => this.continueRequest(req, next, this.tokenCrsf))
      );
    } else {
      return this.continueRequest(req, next, this.tokenCrsf);
    }
  }
}
