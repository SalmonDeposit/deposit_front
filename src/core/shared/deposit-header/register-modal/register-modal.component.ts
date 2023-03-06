import {Component, OnInit} from '@angular/core';
import {RegisterFormBuilder} from "../builders/register-form.builder";
import {AuthApiService} from "../services/auth-api.service";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit{
  registerModal = false;
constructor(public service: AuthApiService,
            public authService: DepositAuthService,
            public registerFormBuilder: RegisterFormBuilder,
            public router: Router,
            private socialAuthService: SocialAuthService
            ) {}
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe({
      next: user => {
        if(this.registerModal){
          this.service.connectWithGoogle(user, true).subscribe({
            next : res => this.manageConnection(res)
          })
        }
      }
    })
  }
  private manageConnection(res: any){
    this.authService.setToken(res.token, res.expired_at)
    this.router.navigate(['dashboard'])
  }
  onRegisterSubmit(user: any){
    this.service.register(user).subscribe({
      next: res => this.manageConnection(res)
    })
  }
}
