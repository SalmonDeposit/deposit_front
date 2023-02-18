import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Route[] = [
  { path: '', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
