import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-deposit-search-document-bar',
  templateUrl: './deposit-search-document-bar.component.html',
  styleUrls: ['./deposit-search-document-bar.component.scss']
})
export class DepositSearchDocumentBarComponent {
  filter:string = '';
  search = faSearch as IconProp;

}
