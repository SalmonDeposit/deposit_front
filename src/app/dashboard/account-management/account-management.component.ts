import {Component, OnInit} from '@angular/core';
import {User} from "../classes/models/user";
import {UserService} from "../services/user.service";
import {faDownload, faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";
import {DepositAuthService} from "../../../core/generics/services/http/deposit-auth.service";
import {saveAs} from "file-saver";
import {UpdatePasswordFormBuilder} from "../classes/builders/update-password-form-builder";
import {AccountService} from "../../../core/shared/deposit-header/services/account.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit{
  user:User;
  resetForm = false;
  deleteModal= false;
  trash = faTrash as IconProp;
  dl = faDownload as IconProp;

  constructor(public userService: UserService,
              public router: Router,
              public authService: DepositAuthService,
              public updatePasswordFormBuilder: UpdatePasswordFormBuilder,
              public accountService:AccountService,
              public sno: SnotifyService
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
  dlRgpdData(){
    this.userService.rgpd().subscribe({
      next: res => {
        let file = new Blob([JSON.stringify(res)])
        saveAs(file, `${this.user.email}_data.json`);
      }
    })
  }
  updatePassword(values:any){
    this.accountService.updatePassword(values).subscribe({
      next: () => {
        this.sno.success("Mot de passe mis à jour")
        this.resetForm = true;
      }
    })
  }
  onReset(){
    setTimeout(() => this.resetForm = false)
  }

}
