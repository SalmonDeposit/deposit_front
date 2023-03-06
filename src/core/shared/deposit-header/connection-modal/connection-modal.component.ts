import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../services/auth-api.service";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";
import {ConnectionFormBuilder} from "../builders/connection-form.builder";
import {RegisterFormBuilder} from "../builders/register-form.builder";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss']
})
export class ConnectionModalComponent implements OnInit {
  connectionModal = false;
  constructor(public service: AuthApiService,
              public authService: DepositAuthService,
              public connectionFormBuilder: ConnectionFormBuilder,
              public router: Router,
              private socialAuthService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe({
      next: user => {
        if(this.connectionModal){
          this.service.connectWithGoogle(user).subscribe({
            next : res => this.manageConnection(res)
          })
        }
      }})
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
