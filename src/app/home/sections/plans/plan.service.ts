import {ServiceGeneric} from "../../../../core/generics/services/http/service-generic.service";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../../core/generics/classes/environment";
import {DepositHttpService} from "../../../../core/generics/services/http/deposit-http.service";
@Injectable({
  providedIn: 'root'
})
export class PlanService extends ServiceGeneric{
  override updateNotify = ""
  override addNotify = ""
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'plans');
  }
}
