import { NgModule } from '@angular/core';
import {AsideMenuComponent} from "./aside-menu/aside-menu.component";
import {AsideProfileInfoComponent} from "./aside-profile-info/aside-profile-info.component";
import {DepositSearchDocumentBarComponent} from "./deposit-search-document-bar/deposit-search-document-bar.component";
import {FormsModule} from "@angular/forms";
import {ClrIconModule, ClrProgressBarModule} from "@clr/angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DocumentCardComponent } from './document-card/document-card.component';
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { DocumentTypeImagePipePipe } from './document-card/document-type-image-pipe.pipe';


@NgModule({
  declarations: [
    AsideMenuComponent,
    AsideProfileInfoComponent,
    DepositSearchDocumentBarComponent,
    DocumentCardComponent,
    DocumentTypeImagePipePipe
  ],
  imports: [
    FormsModule,
    ClrIconModule,
    FontAwesomeModule,
    JsonPipe,
    DatePipe,
    ClrProgressBarModule,
    NgIf,
    NgForOf
  ],
  providers: [],
    exports: [
        AsideMenuComponent,
        AsideProfileInfoComponent,
        DepositSearchDocumentBarComponent,
        DocumentCardComponent
    ],
  bootstrap: []
})
export class DashboardSharedModule { }
