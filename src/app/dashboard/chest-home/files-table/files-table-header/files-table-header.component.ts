import {Component, Input, OnInit} from '@angular/core';
import {faFileCircleCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FolderService} from "../../../services/folder.service";
import {FolderFormBuilder} from "../../../classes/builders/folder-form.builder";
import {DocumentService} from "../../../services/document.service";
import {FileService} from "../../../services/file.service";
import {Folder} from "../../../classes/models/folder";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-files-table-header',
  templateUrl: './files-table-header.component.html',
  styleUrls: ['./files-table-header.component.scss']
})
export class FilesTableHeaderComponent implements OnInit{
  @Input() currentFolder : Folder;
  addDocumentModal = false;
  addFolderModal = false;
  file = faFileCircleCheck as IconProp;
  plus = faPlus as IconProp;

  constructor(public documentService: DocumentService,
              public folderService: FolderService,
              public folderFormBuilder: FolderFormBuilder,
              public fileService: FileService,
              public sno: SnotifyService,
  ) {
  }

  ngOnInit(): void {
    this.documentService.updateRequested.subscribe({
      next: () => this.fileService.updateRequested.next(null)
    })
    this.folderService.updateRequested.subscribe({
      next: () => this.fileService.updateRequested.next(null)
    })
  }
  addNewFolder(data: any){
    const newFolder = {
      ...data,
      folder_id: this.currentFolder.id
    }
    console.log(newFolder);
    this.folderService.create(newFolder).subscribe({
      next: () => {
        this.sno.success("Dossier ajouté")
        this.addFolderModal = false;
        this.fileService.updateRequested.next(null)
      }
    })
  }

}
