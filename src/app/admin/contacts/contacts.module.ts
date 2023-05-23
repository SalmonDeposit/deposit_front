import { NgModule } from '@angular/core';

import {Route, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts.component";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {ClrDatagridModule} from "@clr/angular";
import {DatePipe, NgIf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PipeModule} from "../../../core/generics/pipes/pipe.module";
import {GenericsModule} from "../../../core/generics/generic.module";

const routes: Route[] = [
  { path: '', component: ContactsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CdkDrag,
    CdkDropList,
    ClrDatagridModule,
    DatePipe,
    FontAwesomeModule,
    NgIf,
    PipeModule,
    GenericsModule,

  ],
  declarations: [ContactsComponent],
  providers: []
})
export class ContactsModule { }
