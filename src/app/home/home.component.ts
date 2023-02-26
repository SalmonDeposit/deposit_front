import { Component, OnInit } from '@angular/core';
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";
import {AuthApiService} from "./services/auth-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalIsOpen = false;

  constructor(public signInFormBuilder: SignInFormBuilder, public authApiService: AuthApiService) { }

  ngOnInit(): void {
  }
  openModal(){
    this.modalIsOpen = true;
  }
  onSubmitForm(object: any){
    this.authApiService.signIn(object).subscribe({
      next : res => {
        localStorage.setItem('token', res.token)
        this.modalIsOpen = false;
      }
    })
  }

}
