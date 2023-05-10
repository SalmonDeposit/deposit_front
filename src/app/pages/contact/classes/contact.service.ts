import {ServiceGeneric} from "../../../../core/generics/services/http/service-generic.service";
import {Inject, Injectable} from "@angular/core";
import {DepositHttpService} from "../../../../core/generics/services/http/deposit-http.service";
import {Environment} from "../../../../core/generics/classes/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ServiceGeneric{
  override updateNotify = ""
  override addNotify = ""
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'contacts');
  }
}
