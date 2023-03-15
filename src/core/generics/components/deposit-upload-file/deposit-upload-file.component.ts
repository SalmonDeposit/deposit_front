import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ServiceGeneric} from "../../services/http/service-generic.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-deposit-upload-file',
  templateUrl: './deposit-upload-file.component.html',
  styleUrls: ['./deposit-upload-file.component.scss']
})
export class DepositUploadFileComponent {
  @Input() service?: ServiceGeneric;
  @Input() title?: string;
  @Input() filename?: string;
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

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file && this.filename!= null) {
      const formData = new FormData();
      formData.append(this.filename, file, file.name);
      this.service?.create(formData).subscribe({
        next: () => {
          this.isOpenChange.emit(false);
          this.sno.success("Fichier ajouté")
          this.service?.updateRequested.next(null);
        }
      });
    }
  }


}
