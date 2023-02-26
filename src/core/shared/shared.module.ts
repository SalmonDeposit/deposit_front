import { NgModule } from '@angular/core';
import { DepositHeaderComponent } from './deposit-header/deposit-header.component';
import { DepositFooterComponent } from './deposit-footer/deposit-footer.component';


@NgModule({
  declarations: [
    DepositHeaderComponent,
    DepositFooterComponent
  ],
  imports: [],
  providers: [],
    exports: [
        DepositHeaderComponent,
        DepositFooterComponent
    ],
  bootstrap: []
})
export class SharedModule { }
