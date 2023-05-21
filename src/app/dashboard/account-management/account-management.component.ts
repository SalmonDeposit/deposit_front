import {Component, OnInit} from '@angular/core';
import {User} from "../classes/models/user";
import {UserService} from "../services/user.service";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";
import {DepositAuthService} from "../../../core/generics/services/http/deposit-auth.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit{
  user:User;
  deleteModal= false;
  trash = faTrash as IconProp;

  constructor(public userService: UserService,
              public router: Router,
              public authService: DepositAuthService,
              ) {
  }
  ngOnInit() {
    this.userService.me().subscribe({
      next: res => this.user = res
    })
    this.userService.updateRequested.subscribe({
      next: () => {
        this.router.navigate(["/"]);
        this.authService.removeToken()
      }
    })
  }
}
