import {ServiceGeneric} from "../../../core/generics/services/http/service-generic.service";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../core/generics/classes/environment";
import {DepositHttpService} from "../../../core/generics/services/http/deposit-http.service";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ServiceGeneric{
  override updateNotify = "Le document a bien été mis à jour"
  override addNotify = "Le document a été ajouté"
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'documents');
  }
}
