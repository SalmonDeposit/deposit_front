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
  addDocumentModal = false;
  addFolderModal = false;
  documents?: DepositDocument[];
  folders?: any[]
  isLoading = true;
  trash = faTrash as IconProp;
  file = faFileCircleCheck as IconProp;
  plus = faPlus as IconProp;
  deleteModal = false;
  currentDeleteDocumentId?: string;
  constructor(public service: FileService,
              private router: Router,
              public folderService: FolderService,
              public folderFormBuilder: FolderFormBuilder

  ) {
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
  goToDetails(id: any, type: string){
    switch (type) {
      case 'file':
        this.router.navigate([`/dashboard/documents/details/${id}`]);
        return
      case 'folder':
        this.router.navigate([`/dashboard/folders/details/${id}`])
        return
    }

  }
  onDelete(id: any){
    this.deleteModal = true;
    this.currentDeleteDocumentId = id;
  }

}
