import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss']
})
export class DepositModalComponent implements OnInit {
  public openValue: boolean = false;
  @Input() content?: TemplateRef<any>;
  @Input() title?: string;
  @Input() canBack = true;
  @Input() canClose = true;

  get isOpen() {
    return this.openValue;
  }
  set isOpen(val: boolean) {
    this.openValue = val;
    if (val) {
      setTimeout(() => {
        const element = document.getElementById('input_0');
        if (element) {
          element.focus();
        }
      }, 1);
    }
    //this.openChange.emit(this.openValue);
  }
  close(){
    this.isOpen = false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
