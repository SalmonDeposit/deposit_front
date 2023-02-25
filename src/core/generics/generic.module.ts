import { NgModule } from '@angular/core';
import { DepositModalComponent } from './components/deposit-modal/deposit-modal.component';
import {ClrInputModule, ClrModalModule} from "@clr/angular";
import {CommonModule} from "@angular/common";
import { DepositFormComponent } from './components/deposit-form/deposit-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DepositEditorModalComponent } from './components/deposit-editor-modal/deposit-editor-modal.component';

@NgModule({
  imports: [
    ClrModalModule,
    CommonModule,
    ClrInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
    exports: [
        DepositModalComponent,
        DepositFormComponent,
        DepositEditorModalComponent
    ],
  declarations: [
    DepositModalComponent,
    DepositFormComponent,
    DepositEditorModalComponent
  ]
})
export class GenericsModule { }
