import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
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

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
