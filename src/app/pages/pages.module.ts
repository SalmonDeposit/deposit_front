import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import {SharedModule} from "../../core/shared/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import {GenericsModule} from "../../core/generics/generic.module";
import {ContactFormBuilder} from "./contact/classes/contactFormBuilder";

const routes: Route[] = [
  { path: 'qui-sommes-nous', component: WhoYouAreComponent},
  { path: 'legal-notice', component: LegalNoticeComponent},
  {path : 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule,
    GenericsModule,

  ],
  declarations: [
    WhoYouAreComponent,
    LegalNoticeComponent,
    ContactComponent
  ],
  providers: [
    ContactFormBuilder
  ]
})

export class PagesModule { }
