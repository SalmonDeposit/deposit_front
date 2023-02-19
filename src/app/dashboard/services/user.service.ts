import {Inject, Injectable} from "@angular/core";
import {ServiceGeneric} from "../../../core/generics/services/http/service-generic.service";
import {SnotifyService} from "ng-snotify";
import {DepositHttpService} from "../../../core/generics/services/http/deposit-http.service";
import {Environment} from "../../../core/generics/classes/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceGeneric {
  constructor(@Inject('env') protected override environment: Environment, notifyService : SnotifyService, http : DepositHttpService) {
    super(environment, notifyService, http, 'users');
  }

}
