import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../classes/models/user";
import {DocumentService} from "../../services/document.service";
import {DepositDocument} from "../../classes/models/document";

@Component({
  selector: 'app-user-last-documents',
  templateUrl: './user-last-documents.component.html',
  styleUrls: ['./user-last-documents.component.scss']
})
export class UserLastDocumentsComponent implements OnInit{
  @Input() currentUser?:User
  documents: DepositDocument[] = [];

  constructor(public service: DocumentService) {
  }

  ngOnInit(): void {
    this.service.list().subscribe({
      next : res => this.documents = res
    })
  }

}
