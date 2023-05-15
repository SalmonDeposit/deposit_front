import { NgModule } from '@angular/core';
import { DepositHeaderComponent } from './deposit-header/deposit-header.component';
import { DepositFooterComponent } from './deposit-footer/deposit-footer.component';
import {GenericsModule} from "../generics/generic.module";
import {ConnectionFormBuilder} from "./deposit-header/builders/connection-form.builder";
import {RegisterFormBuilder} from "./deposit-header/builders/register-form.builder";
import { RegisterModalComponent } from './deposit-header/register-modal/register-modal.component';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import { ConnectionModalComponent } from './deposit-header/connection-modal/connection-modal.component';
import { RouterModule } from '@angular/router';
import {NgClass, NgIf} from "@angular/common";
import {DashboardSharedModule} from "../dashboard-shared/dashboard-shared.module";
import { HeaderResponsiveComponent } from './deposit-header/header-responsive/header-responsive.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    DepositHeaderComponent,
    DepositFooterComponent,
    RegisterModalComponent,
    ConnectionModalComponent,
    HeaderResponsiveComponent
  ],
  imports: [
    GenericsModule,
    SocialLoginModule,
    RouterModule,
    NgIf,
    DashboardSharedModule,
    NgClass,
    FontAwesomeModule,
  ],
  providers: [
    ConnectionFormBuilder,
    RegisterFormBuilder,
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '692533076797-at27d6jb36bqdkdb9kg7s8qehors39ht.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  exports: [
    DepositHeaderComponent,
    DepositFooterComponent,
    RegisterModalComponent,
    ConnectionModalComponent
  ],
  bootstrap: []
})
export class SharedModule { }
