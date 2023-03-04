import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepositAuthService {
  constructor(@Inject('env') private env: any) {
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
  public setToken(accessToken: string, expired_at:Date){
    const token = {accessToken, expired_at}
    localStorage.setItem('token', JSON.stringify(token));
  }
}
