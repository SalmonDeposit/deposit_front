import { Inject, Injectable } from '@angular/core';
import {Token} from "../../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class DepositAuthService {
  constructor(@Inject('env') private env: any) {
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

  public logout(){
    localStorage.removeItem('token');
    document.cookie = 'deposit_session' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

}
