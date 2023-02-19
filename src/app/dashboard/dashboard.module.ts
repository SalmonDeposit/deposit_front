import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { environment } from '../../environments/environment';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";

const routes: Route[] = [
  { path: '', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientXsrfModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
  ]
})
export class DashboardModule { }
