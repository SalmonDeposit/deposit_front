import {Component, OnInit} from '@angular/core';
import {DepositDocument} from "../classes/models/document";
import {faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faFileCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";
import {FileService} from "../services/file.service";
import {FolderService} from "../services/folder.service";
import {FolderFormBuilder} from "../classes/builders/folder-form.builder";

@Component({
  selector: 'app-chest-home',
  templateUrl: './chest-home.component.html',
  styleUrls: ['./chest-home.component.scss']
})
export class ChestHomeComponent implements OnInit{

  documents: DepositDocument[];
  folders: any[]
  isLoading = true;

  constructor(public service: FileService) {
  }

  ngOnInit(): void {
    this.load()
    this.service.updateRequested.subscribe({
      next : () => this.load()
    })

  }
  load(){
    this.service.list().subscribe({
      next : res => {
        this.documents = res.documents;
        this.folders = res.folders
        this.isLoading = false
      }
    })
  }

}
