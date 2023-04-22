import {Component, OnInit} from '@angular/core';
import {faFileCircleCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FolderService} from "../../../services/folder.service";
import {FolderFormBuilder} from "../../../classes/builders/folder-form.builder";
import {DocumentService} from "../../../services/document.service";
import {FileService} from "../../../services/file.service";

@Component({
  selector: 'app-files-table-header',
  templateUrl: './files-table-header.component.html',
  styleUrls: ['./files-table-header.component.scss']
})
export class FilesTableHeaderComponent implements OnInit{
  addDocumentModal = false;
  addFolderModal = false;
  file = faFileCircleCheck as IconProp;
  plus = faPlus as IconProp;

  constructor(public documentService: DocumentService,
              public folderService: FolderService,
              public folderFormBuilder: FolderFormBuilder,
              public fileService: FileService,

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

}
