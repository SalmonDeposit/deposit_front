import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';

const routes: Route[] = [
  { path: 'qui-sommes-nous', component: WhoYouAreComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WhoYouAreComponent
  ]
})
export class PagesModule { }
