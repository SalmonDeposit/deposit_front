import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../classes/models/user";
import {DepositAuthService} from "../../../core/generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit{
  currentUser?: User;
  constructor(public userService: UserService, public authService: DepositAuthService,
              public router: Router,
              public sno: SnotifyService) {
  }
  ngOnInit(): void {
    this.userService.me().subscribe({
      next: res => this.currentUser = res
    })
  }



}
