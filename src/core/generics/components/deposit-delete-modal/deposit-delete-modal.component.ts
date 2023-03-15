import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SnotifyService} from "ng-snotify";
import {ServiceGeneric} from "../../services/http/service-generic.service";

@Component({
  selector: 'app-deposit-delete-modal',
  templateUrl: './deposit-delete-modal.component.html',
  styleUrls: ['./deposit-delete-modal.component.scss']
})
export class DepositDeleteModalComponent {
  @Input() service?: ServiceGeneric;
  @Input() title?: string;
  @Input() objectId?: string;
  @Output() isOpenChange = new EventEmitter();
  openValue = false
  file?: any

  constructor(public sno: SnotifyService) {}

  public get isOpen() {
    return this.openValue;
  }
  @Input() set isOpen(val: any) {
    this.openValue = val;
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
  onDelete(){
    if(!this.objectId){return;}
    this.service?.delete(this.objectId).subscribe({
      next: () => {
        this.sno.success("Element bien supprimé");
        this.isOpenChange.emit(false);
        this.service?.updateRequested.next(null);
      }
    })
  }

}
