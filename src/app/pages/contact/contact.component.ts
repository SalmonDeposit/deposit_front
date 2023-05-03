import { Component } from '@angular/core';
import {ContactFormBuilder} from "./classes/contactFormBuilder";
import {ContactService} from "./classes/contact.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public contactFormBuilder: ContactFormBuilder,
              public service:ContactService,
              public sno: SnotifyService) {
  }

  onSubmit(data: any){
    console.log(data)

    this.service.create(data).subscribe({
      next : () => this.sno.success("Votre demande a bien été prise en compte")
    })
  }
}
