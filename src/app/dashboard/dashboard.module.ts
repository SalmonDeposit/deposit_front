import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { environment } from '../../environments/environment';
import {HttpClientXsrfModule} from "@angular/common/http";
import {GenericsModule} from "../../core/generics/generic.module";
import {UserFormBuilder} from "./classes/builders/user-form.builder";
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { AsideProfileInfoComponent } from './aside-profile-info/aside-profile-info.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../../core/shared/shared.module";

const routes: Route[] = [
  { path: '', component: DashboardComponent,
  children: [
    { path: 'home',
      loadChildren: () => import('./dashboard-home/dashboard-home.module').then((x) => x.DashboardHomeModule)
    },
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientXsrfModule,
    GenericsModule,
    FontAwesomeModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    AsideMenuComponent,
    AsideProfileInfoComponent,
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    UserFormBuilder
  ]
})
export class DashboardModule { }
