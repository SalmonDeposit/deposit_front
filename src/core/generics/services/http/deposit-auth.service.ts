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
}
