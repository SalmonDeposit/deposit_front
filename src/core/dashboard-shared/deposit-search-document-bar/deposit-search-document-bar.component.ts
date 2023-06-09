import { Component } from '@angular/core';
import {faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FileService} from "../../../app/dashboard/services/file.service";
import {DepositDocument} from "../../../app/dashboard/classes/models/document";
import {Folder} from "../../../app/dashboard/classes/models/folder";
import {debounce} from "lodash";
import {classLegacyDecorator} from "@cds/core/internal/decorators/utils";

@Component({
  selector: 'app-deposit-search-document-bar',
  templateUrl: './deposit-search-document-bar.component.html',
  styleUrls: ['./deposit-search-document-bar.component.scss']
})
export class DepositSearchDocumentBarComponent {
  filter:string = '';
  documents: DepositDocument[] = []
  folders: Folder[] = []
  isLoading = false;
  search = faSearch as IconProp;
  spinner = faSpinner as IconProp

  public debouncedOnSearch = debounce(() => this.onSearch(), 200)

  constructor(public fileService: FileService) {
  }
  onSearch(){
    if(this.filter === ""){
      this.cleanArrays();
      return
    }
    this.isLoading = true
    this.fileService.search(this.filter).subscribe({
      next : res => {
        console.log(res)
        this.documents = res.documents
        this.folders = res.folders
        this.isLoading = false
      }
    })
  }
  cleanArrays(){
    this.documents = []
    this.folders = []
  }






}
