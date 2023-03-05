import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {HomeComponent} from "./home.component";
import {GenericsModule} from "../../core/generics/generic.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";
import {AuthApiService} from "../../core/shared/deposit-header/services/auth-api.service";
import {SharedModule} from "../../core/shared/shared.module";
import { BaselineComponent } from './sections/baseline/baseline.component';
import { SupportComponent } from './sections/support/support.component';
import { TestimoniesComponent } from './sections/testimonies/testimonies.component';
import {SwiperModule} from "swiper/angular";
import { ValuesComponent } from './sections/values/values.component';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";

const routes: Route[] = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericsModule,
    ReactiveFormsModule,
    SharedModule,
    SwiperModule,
    SocialLoginModule
  ],
  declarations: [
    HomeComponent,
    BaselineComponent,
    SupportComponent,
    TestimoniesComponent,
    ValuesComponent
  ],
  providers: [
    SignInFormBuilder,
    AuthApiService,
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
  ]
})
export class HomeModule { }
