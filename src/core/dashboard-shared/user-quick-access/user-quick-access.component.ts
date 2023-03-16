import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../app/dashboard/classes/models/user";
import {SnotifyService} from "ng-snotify";
import { faCloudArrowUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {DocumentService} from "../../../app/dashboard/services/document.service";
import {UserService} from "../../../app/dashboard/services/user.service";

@Component({
  selector: 'app-user-quick-access',
  templateUrl: './user-quick-access.component.html',
  styleUrls: ['./user-quick-access.component.scss']
})
export class UserQuickAccessComponent implements OnInit{
  currentUser?: User;
  constructor(public sno: SnotifyService,
              public service: DocumentService,
              public userService: UserService
              ) {
  }
  uploadIcon = faCloudArrowUp as IconProp;
  generateIcon = faSpinner as IconProp;
  addDocumentModal = false;

  generateDocument(){
    this.sno.info("Fonctionnalité pas encore implémentée")
  }

  ngOnInit(): void {
    this.userService.me().subscribe({
      next: res => this.currentUser = res
    })
  }

}
