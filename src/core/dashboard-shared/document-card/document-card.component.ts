import {Component, Input} from '@angular/core';
import {DepositDocument} from "../../../app/dashboard/classes/models/document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  @Input() document?: DepositDocument;
  constructor(public router: Router) {
  }

  navigateToDocument(){
      this.router.navigate([`dashboard/files/document/${this.document?.id}`])
  }

}
