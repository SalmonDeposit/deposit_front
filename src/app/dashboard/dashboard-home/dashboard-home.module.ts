import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-home.component";

const routes: Route[] = [
  { path: '', component: DashboardHomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardHomeComponent
  ],
  providers: []
})
export class DashboardHomeModule { }
