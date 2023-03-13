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
import { DocumentDetailComponent } from './document-dashboard/document-details/document-detail.component';

const routes: Route[] = [
  { path: '', component: DashboardComponent,
  children: [
    { path: 'home',
      loadChildren: () => import('./dashboard-home/dashboard-home.module').then((x) => x.DashboardHomeModule)
    },
    {path: 'documents',
      loadChildren: () => import('./document-dashboard/document-dashboard.module').then((x) => x.DocumentDashboardModule )

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
