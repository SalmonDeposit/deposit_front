import { NgModule } from '@angular/core';
import { DepositModalComponent } from './components/deposit-modal/deposit-modal.component';
import {ClrModalModule} from "@clr/angular";

@NgModule({
  imports: [
    ClrModalModule
  ],
  exports: [
    DepositModalComponent
  ],
  declarations: [
    DepositModalComponent
  ]
})
export class GenericsModule { }
