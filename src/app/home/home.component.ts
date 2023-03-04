import { Component, OnInit } from '@angular/core';
import {SignInFormBuilder} from "./classes/forms/sign-in-form.builder";
import {AuthApiService} from "../../core/shared/deposit-header/services/auth-api.service";
import {DepositAuthService} from "../../core/generics/services/http/deposit-auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
}
