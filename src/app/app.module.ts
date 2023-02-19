import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  DepositTokenCrsfInterceptor,
} from "../core/generics/services/http/deposit-crsf.interceptor";

const routes: Route[] = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((x) => x.PagesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((x) => x.DashboardModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SnotifyModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    { provide: HTTP_INTERCEPTORS, useClass: DepositTokenCrsfInterceptor, multi: true },
    SnotifyService,
    {
      provide: 'env',
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
