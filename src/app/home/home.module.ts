import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {HomeComponent} from "./home.component";
import {GenericsModule} from "../../core/generics/generic.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";
import {AuthApiService} from "./services/auth-api.service";
import {SharedModule} from "../../core/shared/shared.module";

const routes: Route[] = [
  { path: '', component: HomeComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GenericsModule,
        ReactiveFormsModule,
        SharedModule
    ],
  declarations: [
    HomeComponent
  ],
  providers: [
    SignInFormBuilder,
    AuthApiService
  ]
})
export class HomeModule { }
