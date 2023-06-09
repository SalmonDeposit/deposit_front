import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../pages/contact/classes/contact.service";
import {DateComparator, NameComparator} from "../../../core/generics/grid-comparators/type-comparator";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  messages: any[]
  isLoading = true;
  nameComparator = new NameComparator();
  trash = faTrash as IconProp;
  currentMessageId:string;
  deleteMessageModal = false;
  constructor(public service: ContactService) {
  }
  ngOnInit() {
    this.load()
    this.service.updateRequested.subscribe({
      next: () => this.load()
    })
  }
  load(){
    this.isLoading = true
    this.service.list().subscribe({
      next: res => {
        this.messages = res.object
        this.isLoading = false
      }
    })
  }
  onDelete(id:string){
    this.currentMessageId = id;
    this.deleteMessageModal = true
  }

}
