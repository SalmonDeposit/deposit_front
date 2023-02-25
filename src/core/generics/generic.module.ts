import { NgModule } from '@angular/core';
import { DepositModalComponent } from './components/deposit-modal/deposit-modal.component';
import {ClrModalModule} from "@clr/angular";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ClrModalModule,
    CommonModule
  ],
  exports: [
    DepositModalComponent
  ],
  declarations: [
    DepositModalComponent
  ]
})
export class GenericsModule { }
