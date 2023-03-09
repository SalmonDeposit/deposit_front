import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-home.component";
import { UserButtonsComponent } from './user-buttons/user-buttons.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import { UserLastDocumentsComponent } from './user-last-documents/user-last-documents.component';
import {DocumentService} from "../services/document.service";

const routes: Route[] = [
  { path: '', component: DashboardHomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    DashboardSharedModule,
  ],
  declarations: [
    DashboardHomeComponent,
    UserButtonsComponent,
    UserLastDocumentsComponent
  ],
  providers: []
})
export class DashboardHomeModule { }
