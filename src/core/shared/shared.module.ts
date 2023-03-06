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


@NgModule({
  declarations: [
    DepositHeaderComponent,
    DepositFooterComponent,
    RegisterModalComponent
  ],
    imports: [
        GenericsModule,
        SocialLoginModule
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
        DepositFooterComponent
    ],
  bootstrap: []
})
export class SharedModule { }
