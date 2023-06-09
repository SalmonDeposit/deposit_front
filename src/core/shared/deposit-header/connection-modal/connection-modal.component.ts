import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthApiService} from "../services/auth-api.service";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";
import {ConnectionFormBuilder} from "../builders/connection-form.builder";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {catchError, switchMap} from "rxjs/operators";
import {of, Subscription} from "rxjs";
import {AccountService} from "../services/account.service";
import {SnotifyService} from "ng-snotify";
import {ResetPasswordFormBuilder} from "../builders/reset-password-form.builder";

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss']
})
export class ConnectionModalComponent implements OnInit, OnDestroy {
  connectionModal = false;
  resetModal = false;
  private subscriptions = new Subscription();
  constructor(public authApiService: AuthApiService,
              public authService: DepositAuthService,
              public connectionFormBuilder: ConnectionFormBuilder,
              public router: Router,
              private socialAuthService: SocialAuthService,
              private accountService: AccountService,
              public sno: SnotifyService,
              public resetPasswordFormBuilder: ResetPasswordFormBuilder
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
    this.socialAuthService.authState
      .pipe(
        switchMap((user: SocialUser | null) => {
          if (user && this.connectionModal) {
            return this.authApiService.connectWithGoogle(user);
          } else {
            return of(null);
          }
        }),
        catchError((res) => {
          return of(null)
        })
      )
      .subscribe((res) => {
        if (res) {
          this.manageConnection(res);
        }
      }));
    }

  private manageConnection(res: any){
    this.authService.setToken(res.token, res.expired_at)
    this.router.navigate(['dashboard/home'])
  }
  onConnectionSubmit(user: any){
    this.authApiService.signIn(user).subscribe({
      next: res => this.manageConnection(res)
    })
  }
  onResetSubmit(email: any){
    this.accountService.resetPassword(email).subscribe({
      next: () => {
        this.sno.success("Si un email est associé à ce compte, vous recevrez un email avec votre nouveau mot de passe")
        this.resetModal = false;
        this.connectionModal = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
