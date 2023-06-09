import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {ProfilesDashboardComponent} from "./profiles-dashboard.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProfileFormBuilder} from "../classes/builders/profile-form.builder";
import {GenericsModule} from "../../../core/generics/generic.module";
import { ProfileCardComponent } from './profile-card/profile-card.component';

const routes: Route[] = [
  // { path: 'details/:id', component: DocumentDetailComponent},
  { path: '', component: ProfilesDashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    GenericsModule,
  ],
  declarations: [
    ProfilesDashboardComponent,
    ProfileCardComponent
  ],
  providers: [
    ProfileFormBuilder
  ]
})
export class ProfilesDashboardModule { }
