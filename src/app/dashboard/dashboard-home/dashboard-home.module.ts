import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-home.component";
import { UserButtonsComponent } from '../../../core/dashboard-shared/user-buttons/user-buttons.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import { UserLastDocumentsComponent } from './user-last-documents/user-last-documents.component';
import { UserQuickAccessComponent } from '../../../core/dashboard-shared/user-quick-access/user-quick-access.component';
import {GenericsModule} from "../../../core/generics/generic.module";

const routes: Route[] = [
  { path: '', component: DashboardHomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    GenericsModule,
    DashboardSharedModule,
  ],
  declarations: [
    DashboardHomeComponent,
    UserLastDocumentsComponent,
  ],
    exports: [],
  providers: []
})
export class DashboardHomeModule { }
