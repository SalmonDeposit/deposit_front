import {Component, Input} from '@angular/core';
import {Folder} from "../../classes/models/folder";
import {DepositDocument} from "../../classes/models/document";
import {FileService} from "../../services/file.service";
import {Router} from "@angular/router";
import {FolderService} from "../../services/folder.service";
import {FolderFormBuilder} from "../../classes/builders/folder-form.builder";
import {faFileCircleCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FileTypeImagePipe} from "../../../../core/generics/pipes/file-type-image.pipe";

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent {
  @Input() documents?: DepositDocument[]
  @Input() folders?: Folder[]

  deleteModal = false;
  currentDeleteDocumentId?: string;
  trash = faTrash as IconProp;
  file = faFileCircleCheck as IconProp;
  constructor(public service: FileService,
              private router: Router,
              public folderService: FolderService,
              public folderFormBuilder: FolderFormBuilder

  ) {
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
