import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DepositFormBuilder} from "../../interfaces/form/deposit-form-builder.interface";
import {IServiceGeneric} from "../../interfaces/service.generic.interface";

@Component({
  selector: 'app-deposit-editor-modal',
  templateUrl: './deposit-editor-modal.component.html',
  styleUrls: ['./deposit-editor-modal.component.scss']
})
export class DepositEditorModalComponent implements OnInit {
  @Input() formBuilder?: DepositFormBuilder;
  @Input() service?: IServiceGeneric;
  @Input() editMode = false
  @Input() title?:string;
  @Output() isOpenChange = new EventEmitter();
  @Output() onSubmitForm = new EventEmitter();
  object: any;
  openValue = false
  public get isOpen() {
    return this.openValue;
  }
  @Input() set isOpen(val: any) {
    this.openValue = val;
    console.log("openValue in modal", this.openValue)
    if (val) {
      setTimeout(() => {
        const element = document.getElementById('input_0');
        if (element) {
          element.focus();
        }
      }, 1);
    }
    this.isOpenChange.emit(this.openValue);
  }

  constructor() { }

  ngOnInit(): void {
    if(this.editMode){
      this.service?.read('').subscribe({
        next : res => this.object = res.object
      })
    }
  }
  onSubmit(formValue: any){
    console.log("formulaire soumis", formValue)
    this.onSubmitForm.emit(formValue);
  }

}
