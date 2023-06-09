import {Component, OnInit} from '@angular/core';
import {SnotifyService} from "ng-snotify";
import {DepositHttpService} from "../core/generics/services/http/deposit-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'deposit_front';
  constructor(private sno: SnotifyService, private http: DepositHttpService) {


  }
}
