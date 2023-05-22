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
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ClarityModule } from '@clr/angular';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';

const routes: Route[] = [
  { path: 'qui-sommes-nous', component: WhoYouAreComponent},
  { path: 'mentions-legales', component: LegalNoticeComponent},
  {path : 'contact', component: ContactComponent },
  {path: 'politique-de-confidentialite', component: PrivacyPolicyComponent},
  {path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule,
    GenericsModule,
    ClarityModule

  ],
  declarations: [
    WhoYouAreComponent,
    LegalNoticeComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    FrequentlyAskedQuestionsComponent
  ],
  providers: [
    ContactFormBuilder
  ]
})

export class PagesModule { }
