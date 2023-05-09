import { NgModule } from '@angular/core';
import {AsideMenuComponent} from "./aside-menu/aside-menu.component";
import {AsideProfileInfoComponent} from "./aside-profile-info/aside-profile-info.component";
import {DepositSearchDocumentBarComponent} from "./deposit-search-document-bar/deposit-search-document-bar.component";
import {FormsModule} from "@angular/forms";
import {ClrIconModule, ClrProgressBarModule} from "@clr/angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DocumentCardComponent } from './document-card/document-card.component';
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { FileTypeImagePipe } from '../generics/pipes/file-type-image.pipe';
import {RouterLink} from "@angular/router";
import {DashboardHomeModule} from "../../app/dashboard/dashboard-home/dashboard-home.module";
import {UserQuickAccessComponent} from "./user-quick-access/user-quick-access.component";
import {GenericsModule} from "../generics/generic.module";
import {UserButtonsComponent} from "./user-buttons/user-buttons.component";


@NgModule({
  declarations: [
    AsideMenuComponent,
    AsideProfileInfoComponent,
    DepositSearchDocumentBarComponent,
    DocumentCardComponent,
    UserQuickAccessComponent,
    UserButtonsComponent
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
  ],
  providers: [],
    exports: [
        AsideMenuComponent,
        AsideProfileInfoComponent,
        DepositSearchDocumentBarComponent,
        DocumentCardComponent,
      UserQuickAccessComponent,
      UserButtonsComponent
    ],
  bootstrap: []
})
export class DashboardSharedModule { }
