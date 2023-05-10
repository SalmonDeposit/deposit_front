import {Inject, Injectable} from "@angular/core";
import {ServiceGeneric} from "../../../core/generics/services/http/service-generic.service";
import {SnotifyService} from "ng-snotify";
import {DepositHttpService} from "../../../core/generics/services/http/deposit-http.service";
import {Environment} from "../../../core/generics/classes/environment";
import {ValidationModel} from "../../../core/generics/classes/validation-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService extends ServiceGeneric {
  override updateNotify = ""
  override addNotify = ""
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'files');
  }

  search(searchTerm: string): Observable<any>{
    return this.http.get(`${this.baseUrl}?search=${searchTerm}`);
  }

}
