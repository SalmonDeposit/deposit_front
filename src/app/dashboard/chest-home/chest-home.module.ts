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
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesTableHeaderComponent } from './files-table/files-table-header/files-table-header.component';
import {ClarityModule} from "@clr/angular";
import {CdkDrag, CdkDragHandle, CdkDropList} from "@angular/cdk/drag-drop";
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
    DashboardSharedModule,
    GenericsModule,
    NgxDocViewerModule,
    ClarityModule,
    CdkDropList,
    CdkDragHandle,
    CdkDrag,
  ],
  declarations: [
    DocumentDetailComponent,
    ChestHomeComponent,
    FilesTableComponent,
    FilesTableHeaderComponent,
    FolderDetailsComponent
  ],
  providers: [
    FolderFormBuilder,
  ]
})
export class ChestHomeModule { }
