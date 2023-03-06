import { Component } from '@angular/core';
import {AuthApiService} from "./services/auth-api.service";
import {DepositAuthService} from "../../generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {ConnectionFormBuilder} from "./builders/connection-form.builder";
import {RegisterFormBuilder} from "./builders/register-form.builder";

@Component({
  selector: 'app-deposit-header',
  templateUrl: './deposit-header.component.html',
  styleUrls: ['./deposit-header.component.scss']
})
export class DepositHeaderComponent  {
  connectionModal = false;
  registerModal = false;
  constructor(public service: AuthApiService,
              public authService: DepositAuthService,
              public connectionFormBuilder: ConnectionFormBuilder,
              public registerFormBuilder: RegisterFormBuilder,
              public router: Router
              ) {
  }

  private manageConnection(res: any){
    this.authService.setToken(res.token, res.expired_at)
    this.router.navigate(['dashboard'])
  }

  onConnectionSubmit(user: any){
    this.service.signIn(user).subscribe({
      next: res => this.manageConnection(res)
    })
  }
}
