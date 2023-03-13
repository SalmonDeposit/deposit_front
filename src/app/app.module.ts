import { NgModule } from '@angular/core';
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
    path: '',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    SnotifyModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration:"top"}),
    HttpClientModule

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    { provide: HTTP_INTERCEPTORS, useClass: DepositTokenCrsfInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SnotifyService,
    {
      provide: 'env',
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
