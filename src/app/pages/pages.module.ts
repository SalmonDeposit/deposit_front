import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import {SharedModule} from "../../core/shared/shared.module";

const routes: Route[] = [
  { path: 'qui-sommes-nous', component: WhoYouAreComponent},
  { path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    WhoYouAreComponent,
    LegalNoticeComponent
  ]
})

export class PagesModule { }