import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {UserFormBuilder} from "./classes/user-form.builder";
import {DepositAuthService} from "../../core/generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public authService: DepositAuthService, public router: Router, public sno: SnotifyService) {
  }
  logout(){
    this.authService.logout();
    this.sno.success("Vous êtes déconnecté");
    this.router.navigate(['/']);
  }

}
