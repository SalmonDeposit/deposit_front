import { Component, OnInit } from '@angular/core';
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalIsOpen = false;

  constructor(public signInFormBuilder: SignInFormBuilder) { }

  ngOnInit(): void {
  }
  openModal(){
    this.modalIsOpen = true;
  }
  changeOpenModal(e: any){
    console.log(e);
    this.modalIsOpen = e;
  }
  onSubmitForm(object: any){
    console.log(object)
  }

}
