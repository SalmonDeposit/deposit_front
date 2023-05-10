import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import {GenericsModule} from "../../../core/generics/generic.module";
import {DocumentDetailComponent} from "./document-details/document-detail.component";
import {NgxDocViewerModule} from "ngx-doc-viewer";
import { ChestHomeComponent } from './chest-home.component';
import {FolderFormBuilder} from "../classes/builders/folder-form.builder";
import {ClarityModule} from "@clr/angular";
import {CdkDrag, CdkDragHandle, CdkDragPreview, CdkDropList} from "@angular/cdk/drag-drop";
import { FolderDetailsComponent } from './folder-details/folder-details.component';

const routes: Route[] = [
  { path: 'folder/:id', component: FolderDetailsComponent},
  { path: 'document/:id', component: DocumentDetailComponent},
  { path: '', component: ChestHomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    GenericsModule,
    NgxDocViewerModule,
    ClarityModule,
    CdkDropList,
    CdkDragHandle,
    CdkDrag,
    CdkDragPreview,
    DashboardSharedModule,
  ],
  declarations: [
    DocumentDetailComponent,
    ChestHomeComponent,
    FolderDetailsComponent
  ],
  providers: [
    FolderFormBuilder,
  ]
})
export class ChestHomeModule { }
