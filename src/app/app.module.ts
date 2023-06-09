import { NgModule, LOCALE_ID } from '@angular/core';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  DepositTokenCrsfInterceptor,
} from "../core/generics/interceptors/deposit-crsf.interceptor";
import {ErrorInterceptor} from "../core/generics/interceptors/error.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserGuard} from "../core/generics/guards/user.guard";
import { PrivacyPolicyManagementComponent } from './privacy-policy-management/privacy-policy-management.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AdminGuard} from "../core/generics/guards/admin.guard";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeFr);
const routes: Route[] = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((x) => x.PagesModule)
  },
  {
    path: 'dashboard',
    canActivate: [UserGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((x) => x.DashboardModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then((x) => x.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyManagementComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    SnotifyModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: "top"}),
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    { provide: HTTP_INTERCEPTORS, useClass: DepositTokenCrsfInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    SnotifyService,
    {
      provide: 'env',
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
