import {Component, OnDestroy, OnInit} from '@angular/core';
import { RegisterFormBuilder } from '../builders/register-form.builder';
import { AuthApiService } from '../services/auth-api.service';
import { DepositAuthService } from '../../../generics/services/http/deposit-auth.service';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { catchError, switchMap } from 'rxjs/operators';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit, OnDestroy {
  registerModal = false;
  private subscriptions = new Subscription();


  constructor(
    public authApiService: AuthApiService,
    private authService: DepositAuthService,
    public registerFormBuilder: RegisterFormBuilder,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
    this.socialAuthService.authState
      .pipe(
        switchMap((user: SocialUser | null) => {
          if (user && this.registerModal) {
            return this.authApiService.connectWithGoogle(user, true);
          } else {
            return of(null);
          }
        }),
        catchError(() => of(null))
      )
      .subscribe((res) => {
        if (res) {
          this.manageConnection(res);
        }
      }));
  }

  private manageConnection(res: any): void {
    this.authService.setToken(res.token, res.expired_at);
    this.router.navigate(['dashboard/home']);
  }

  onRegisterSubmit(user: any): void {
    this.authApiService.register(user).subscribe((res) => {
      this.manageConnection(res);
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();

  }

}
