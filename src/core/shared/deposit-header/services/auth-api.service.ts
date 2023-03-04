import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../generics/classes/environment";
import {DepositHttpService} from "../../../generics/services/http/deposit-http.service";
import {Observable} from "rxjs";
import {IServiceGeneric} from "../../../generics/interfaces/service.generic.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements IServiceGeneric {
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

  addNotify: string = "";
  updateNotify: string = "";

  create(data: any): Observable<any> {
    throw new Error("not Implemented")
  }

  delete(id: string): Observable<any> {
    throw new Error("not Implemented")
  }

  list(): Observable<any> {
    throw new Error("not Implemented")
  }

  read(id: string): Observable<any> {
    throw new Error("not Implemented")
  }

  update(id: string, data: any): Observable<any> {
    throw new Error("not Implemented")
  }

}
