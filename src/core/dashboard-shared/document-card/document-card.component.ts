import {Component, Input} from '@angular/core';
import {DepositDocument} from "../../../app/dashboard/classes/models/document";

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  @Input() document?: DepositDocument;

}
