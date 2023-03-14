import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import {GenericsModule} from "../../../core/generics/generic.module";
import {DocumentDetailComponent} from "./document-details/document-detail.component";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {NgxDocViewerModule} from "ngx-doc-viewer";

const routes: Route[] = [
  { path: 'details/:id', component: DocumentDetailComponent},
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
    DocumentDetailComponent
  ],
  providers: []
})
export class DocumentDashboardModule { }
