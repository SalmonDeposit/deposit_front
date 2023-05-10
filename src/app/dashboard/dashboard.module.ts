import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { environment } from '../../environments/environment';
import {HttpClientXsrfModule} from "@angular/common/http";
import {GenericsModule} from "../../core/generics/generic.module";
import {UserFormBuilder} from "./classes/builders/user-form.builder";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../../core/shared/shared.module";
import {ClrIconModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";
import {DashboardSharedModule} from "../../core/dashboard-shared/dashboard-shared.module";

const routes: Route[] = [
  { path: '', component: DashboardComponent,
  children: [
    { path: 'home',
      loadChildren: () => import('./dashboard-home/dashboard-home.module').then((x) => x.DashboardHomeModule)
    },
    {path: 'files',
      loadChildren: () => import('./chest-home/chest-home.module').then((x) => x.ChestHomeModule )
    },
    {path: 'profiles',
      loadChildren: () => import('./profiles-dashboard/profile-dashboard.module').then((x) => x.ProfilesDashboardModule)
    }
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
    ClrIconModule,
    FormsModule,
    DashboardSharedModule
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    UserFormBuilder
  ]
})
export class DashboardModule { }
