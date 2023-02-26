import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { environment } from '../../environments/environment';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {GenericsModule} from "../../core/generics/generic.module";
import {UserFormBuilder} from "./classes/user-form.builder";

const routes: Route[] = [
  { path: '', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientXsrfModule,
    GenericsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    UserFormBuilder
  ]
})
export class DashboardModule { }
