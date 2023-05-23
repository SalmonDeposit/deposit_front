import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {SharedModule} from "../../core/shared/shared.module";
import {ClrIconModule, ClrVerticalNavModule} from "@clr/angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgIf} from "@angular/common";

const routes: Route[] = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then((x) => x.ContactsModule)
      },
    ]
  },

];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ClrIconModule,
    ClrVerticalNavModule,
    FontAwesomeModule,
    NgIf,
  ],
  declarations: [AdminComponent],
  providers: []
})
export class AdminModule { }
