import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import {HomeComponent} from "./home.component";
import {GenericsModule} from "../../core/generics/generic.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";
import {AuthApiService} from "./services/auth-api.service";
import {SharedModule} from "../../core/shared/shared.module";
import { BaselineComponent } from './sections/baseline/baseline.component';
import { SupportComponent } from './sections/support/support.component';
import { TestimoniesComponent } from './sections/testimonies/testimonies.component';
import {SwiperModule} from "swiper/angular";

const routes: Route[] = [
  { path: '', component: HomeComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GenericsModule,
        ReactiveFormsModule,
        SharedModule,
      SwiperModule
    ],
  declarations: [
    HomeComponent,
    BaselineComponent,
    SupportComponent,
    TestimoniesComponent
  ],
  providers: [
    SignInFormBuilder,
    AuthApiService
  ]
})
export class HomeModule { }
