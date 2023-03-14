import { Inject, Injectable } from '@angular/core';
import {Token} from "../../interfaces/token.interface";
import {AuthApiService} from "../../../shared/deposit-header/services/auth-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepositAuthService {
  constructor(@Inject('env') private env: any, private apiService: AuthApiService) {
  }
  public getToken(): Token | null{
    const token = this.getTokenFromStorage();
    if(token == null || Date.parse(token.expiredAt) < Date.now()){
      localStorage.removeItem('token')
      return null;
    }
    return token;
  }


  private getTokenFromStorage(): Token | null {
    const token = localStorage.getItem('token');
    if(token){
      return JSON.parse(token)
    }
    return null
  }
  public setToken(accessToken: string, expiredAt:Date){
    const token = {accessToken, expiredAt}
    localStorage.setItem('token', JSON.stringify(token));
  }

  public logout() : Observable<any>{
    localStorage.removeItem('token');
    return this.apiService.logout()
  }

}
