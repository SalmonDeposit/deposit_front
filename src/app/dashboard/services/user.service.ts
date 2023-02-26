import {Inject, Injectable} from "@angular/core";
import {ServiceGeneric} from "../../../core/generics/services/http/service-generic.service";
import {SnotifyService} from "ng-snotify";
import {DepositHttpService} from "../../../core/generics/services/http/deposit-http.service";
import {Environment} from "../../../core/generics/classes/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceGeneric {
  override updateNotify = "L'utilisateur a bien été mis à jour"
  override addNotify = "L'utilisateur a été ajouté"
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'users');
  }

}