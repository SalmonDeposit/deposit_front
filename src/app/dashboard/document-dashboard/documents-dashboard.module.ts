import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import {GenericsModule} from "../../../core/generics/generic.module";
import {DocumentDetailComponent} from "./document-details/document-detail.component";
import {NgxDocViewerModule} from "ngx-doc-viewer";
import { DocumentDashboardComponent } from './document-dashboard.component';

const routes: Route[] = [
  { path: 'details/:id', component: DocumentDetailComponent},
  { path: '', component: DocumentDashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    DashboardSharedModule,
    GenericsModule,
    NgxDocViewerModule,
  ],
  declarations: [
    DocumentDetailComponent,
    DocumentDashboardComponent
  ],
  providers: []
})
export class DocumentsDashboardModule { }
