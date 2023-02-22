import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {HomeComponent} from "./home.component";
import {GenericsModule} from "../../core/generics/generic.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
