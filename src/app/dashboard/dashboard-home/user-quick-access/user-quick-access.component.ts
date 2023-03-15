import {Component, Input} from '@angular/core';
import {User} from "../../classes/models/user";
import {SnotifyService} from "ng-snotify";
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-user-quick-access',
  templateUrl: './user-quick-access.component.html',
  styleUrls: ['./user-quick-access.component.scss']
})
export class UserQuickAccessComponent {
  @Input() currentUser?: User;
  constructor(public sno: SnotifyService,
              public service: DocumentService) {
  }
  uploadIcon = faCloudArrowUp as IconProp;
  addDocumentModal = false;

  generateDocument(){
    this.sno.info("Fonctionnalité pas encore implémentée")
  }
  onDocumentAdd(){
    console.log("document add")
  }

}
