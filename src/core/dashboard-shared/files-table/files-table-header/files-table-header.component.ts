import {Component, Input, OnInit} from '@angular/core';
import {faFileCircleCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {SnotifyService} from "ng-snotify";
import {Folder} from "../../../../app/dashboard/classes/models/folder";
import {DocumentService} from "../../../../app/dashboard/services/document.service";
import {FolderService} from "../../../../app/dashboard/services/folder.service";
import {FolderFormBuilder} from "../../../../app/dashboard/classes/builders/folder-form.builder";
import {FileService} from "../../../../app/dashboard/services/file.service";

@Component({
  selector: 'app-files-table-header',
  templateUrl: './files-table-header.component.html',
  styleUrls: ['./files-table-header.component.scss']
})
export class FilesTableHeaderComponent implements OnInit{
  @Input() currentFolder : Folder;
  @Input() searchMode = true;

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
      next: (res : any) => {
        this.fileService.updateRequested.next(null)
        this.addNewFile(res)
      }
    })
    this.folderService.updateRequested.subscribe({
      next: () => this.fileService.updateRequested.next(null)
    })
  }
  addNewFolder(data: any){
    const newFolder = {
      ...data,
    }
    if(this.currentFolder){
      newFolder.folder_id = this.currentFolder.id
    }
    this.folderService.create(newFolder).subscribe({
      next: () => {
        this.sno.success("Dossier ajouté")
        this.addFolderModal = false;
        this.folderService.updateRequested.next(null)
      }
    })
  }
  addNewFile(id: any){
    if(id == null){
      return;
    }
    this.documentService.update(id, {folder_id: this.currentFolder.id}).subscribe({
      next: () => {
        this.folderService.updateRequested.next(null)
      }
    });
  }

}
