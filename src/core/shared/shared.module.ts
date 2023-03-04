import { NgModule } from '@angular/core';
import { DepositHeaderComponent } from './deposit-header/deposit-header.component';
import { DepositFooterComponent } from './deposit-footer/deposit-footer.component';
import {GenericsModule} from "../generics/generic.module";
import {UserFormBuilder} from "../../app/dashboard/classes/user-form.builder";
import {ConnectionFormBuilder} from "./deposit-header/builders/connection-form.builder";
import {RegisterFormBuilder} from "./deposit-header/builders/register-form.builder";


@NgModule({
  declarations: [
    DepositHeaderComponent,
    DepositFooterComponent
  ],
    imports: [
        GenericsModule
    ],
  providers: [
    ConnectionFormBuilder,
    RegisterFormBuilder
  ],
    exports: [
        DepositHeaderComponent,
        DepositFooterComponent
    ],
  bootstrap: []
})
export class SharedModule { }
