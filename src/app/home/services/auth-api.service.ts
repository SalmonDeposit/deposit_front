import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../core/generics/classes/environment";
import {DepositHttpService} from "../../../core/generics/services/http/deposit-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService{
  private baseUrl: string;
  constructor(
    @Inject('env') protected environment: Environment,
    protected http: DepositHttpService,
  ) {
    this.baseUrl = `${this.environment.apiUrl}`;
  }

  register(user: any) : Observable<any>{
    const registerUrl = `${this.baseUrl}/register`
    return this.http.post(registerUrl, user)
  }

  signIn(connectionInformation: any) : Observable<any>{
    const connectionUrl = `${this.baseUrl}/login`
    return this.http.post(connectionUrl, connectionInformation)
  }

}
