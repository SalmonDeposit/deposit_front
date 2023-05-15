import { Component, OnInit } from '@angular/core';
import {DepositAuthService} from "../../../../core/generics/services/http/deposit-auth.service";

@Component({
  selector: 'app-baseline',
  templateUrl: './baseline.component.html',
  styleUrls: ['./baseline.component.scss']
})
export class BaselineComponent{
  isConnected = false;
  constructor(public authService: DepositAuthService) {
    this.isConnected = this.authService.isConnected();
  }

}
