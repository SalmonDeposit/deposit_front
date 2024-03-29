import { NgModule } from '@angular/core';
import {AsideMenuComponent} from "./aside-menu/aside-menu.component";
import {AsideProfileInfoComponent} from "./aside-profile-info/aside-profile-info.component";
import {DepositSearchDocumentBarComponent} from "./deposit-search-document-bar/deposit-search-document-bar.component";
import {FormsModule} from "@angular/forms";
import {ClrDatagridModule, ClrIconModule, ClrProgressBarModule} from "@clr/angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DocumentCardComponent } from './document-card/document-card.component';
import {DatePipe, JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserQuickAccessComponent} from "./user-quick-access/user-quick-access.component";
import {GenericsModule} from "../generics/generic.module";
import {UserButtonsComponent} from "./user-buttons/user-buttons.component";
import {FilesTableComponent} from "./files-table/files-table.component";
import {FilesTableHeaderComponent} from "./files-table/files-table-header/files-table-header.component";
import {CdkDrag, CdkDragPreview, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {FolderFormBuilder} from "../../app/dashboard/classes/builders/folder-form.builder";
import { AsideMenuResponsiveComponent } from './aside-menu-responsive/aside-menu-responsive.component';
import {PipeModule} from "../generics/pipes/pipe.module";


@NgModule({
  declarations: [
    AsideMenuComponent,
    AsideProfileInfoComponent,
    DepositSearchDocumentBarComponent,
    DocumentCardComponent,
    UserQuickAccessComponent,
    UserButtonsComponent,
    FilesTableComponent,
    FilesTableHeaderComponent,
    AsideMenuResponsiveComponent
  ],
    imports: [
        FormsModule,
        ClrIconModule,
        FontAwesomeModule,
        JsonPipe,
        DatePipe,
        ClrProgressBarModule,
        NgIf,
        NgForOf,
        RouterLink,
        GenericsModule,
        ClrDatagridModule,
        CdkDropList,
        CdkDrag,
        PipeModule.forRoot(),
        NgClass,
        CdkDragPreview,
        CdkDropListGroup,
    ],
  providers: [
    FolderFormBuilder
  ],
  exports: [
    AsideMenuComponent,
    AsideProfileInfoComponent,
    DepositSearchDocumentBarComponent,
    DocumentCardComponent,
    UserQuickAccessComponent,
    UserButtonsComponent,
    FilesTableComponent,
    AsideMenuResponsiveComponent
  ],
  bootstrap: []
})
export class DashboardSharedModule { }
