import {Route, RouterModule} from "@angular/router";
import {AccountManagementComponent} from "./account-management.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardSharedModule} from "../../../core/dashboard-shared/dashboard-shared.module";
import {GenericsModule} from "../../../core/generics/generic.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const routes: Route[] = [
  { path: '', component: AccountManagementComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericsModule,
    DashboardSharedModule,
    FontAwesomeModule,
  ],
  declarations: [
    AccountManagementComponent
  ],
  exports: [],
  providers: []
})
export class AccountManagementModule { }
