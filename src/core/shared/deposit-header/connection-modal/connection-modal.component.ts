import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../services/auth-api.service";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";
import {ConnectionFormBuilder} from "../builders/connection-form.builder";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {catchError, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss']
})
export class ConnectionModalComponent implements OnInit {
  connectionModal = false;
  constructor(public authApiService: AuthApiService,
              public authService: DepositAuthService,
              public connectionFormBuilder: ConnectionFormBuilder,
              public router: Router,
              private socialAuthService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState
      .pipe(
        switchMap((user: SocialUser | null) => {
          console.log(user)
          if (user && this.connectionModal) {
            console.log("je me connecte api")
            return this.authApiService.connectWithGoogle(user);
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
      });
    }

  private manageConnection(res: any){
    this.authService.setToken(res.token, res.expired_at)
    this.router.navigate(['dashboard'])
  }
  onConnectionSubmit(user: any){
    this.authApiService.signIn(user).subscribe({
      next: res => this.manageConnection(res)
    })
  }
}
