import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {UserFormBuilder} from "./classes/builders/user-form.builder";
import {DepositAuthService} from "../../core/generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {SnotifyService} from "ng-snotify";
import {User} from "./classes/models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  currentUser?: User;

  constructor(public authService: DepositAuthService,
              public router: Router,
              public sno: SnotifyService,
              public userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.me().subscribe({
      next: res => {
        this.currentUser = res;
      }
    })
  }

  logout(){
    this.authService.logout();
    this.sno.success("Vous êtes déconnecté");
    this.router.navigate(['/']);
  }

}
