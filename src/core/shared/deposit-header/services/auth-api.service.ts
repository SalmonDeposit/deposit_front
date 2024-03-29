import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../generics/classes/environment";
import {DepositHttpService} from "../../../generics/services/http/deposit-http.service";
import {Observable, Subject} from "rxjs";
import {IServiceGeneric} from "../../../generics/interfaces/service.generic.interface";
import {SocialUser} from "@abacritt/angularx-social-login";
import {SocialUserBuilder} from "../builders/social-user.builder";

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

  updateRequested = new Subject();

  register(user: any) : Observable<any>{
    const registerUrl = `${this.baseUrl}/register`
    return this.http.post(registerUrl, user)
  }

  signIn(connectionInformation: any) : Observable<any>{
    const connectionUrl = `${this.baseUrl}/login`
    return this.http.post(connectionUrl, connectionInformation)
  }
  logout(): Observable<any>{
    const logoutUrl = `${this.baseUrl}/logout`
    return this.http.post(logoutUrl, {})
  }

  connectWithGoogle(socialUser: SocialUser, registerMode = false){
    const url = registerMode ?
      `${this.baseUrl}/register/google` :
      `${this.baseUrl}/login/google`;
    const user = SocialUserBuilder.buildUserFromSocialUser(socialUser);
    return this.http.post(url, user)
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
