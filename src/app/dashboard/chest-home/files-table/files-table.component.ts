import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Folder} from "../../classes/models/folder";
import {DepositDocument} from "../../classes/models/document";
import {FileService} from "../../services/file.service";
import {Router} from "@angular/router";
import {FolderService} from "../../services/folder.service";
import {FolderFormBuilder} from "../../classes/builders/folder-form.builder";
import {faFileCircleCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {FileTableDisplay} from "./classes/file-table-display";
import {FilesTableDisplayBuilder} from "./classes/files-table-display-builder";
import {SnotifyService} from "ng-snotify";
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent implements OnInit, OnChanges {
  @Input() documents: DepositDocument[]
  @Input() folders: Folder[]

  filesDisplay: FileTableDisplay[]
  deleteModal = false;
  currentDeleteDocumentId?: string;
  trash = faTrash as IconProp;
  file = faFileCircleCheck as IconProp;
  constructor(public service: FileService,
              private router: Router,
              public folderService: FolderService,
              public documentService: DocumentService,
              public sno: SnotifyService,
  ) {
  }
  ngOnInit() {
      this.filesDisplay = FilesTableDisplayBuilder.build(this.documents, this.folders);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("je suis appelée")
    this.filesDisplay = FilesTableDisplayBuilder.build(this.documents, this.folders);
  }


  goToDetails(id: any, type: string){
    console.log(type)
    switch (type) {
      case 'document':
        this.router.navigate([`/dashboard/files/document/${id}`]);
        return
      case 'folder':
        this.router.navigate([`/dashboard/files/folder/${id}`])
        return
    }

  }
  onDelete(id: any){
    this.deleteModal = true;
    this.currentDeleteDocumentId = id;
  }

  onDrop(event: CdkDragDrop<any[]>) {
    const currentItem: FileTableDisplay = event.item.data; // récupère l'objet en cours
    const destinationIndex = event.currentIndex; // récupère l'index de la position de destination
    const destinationItem: FileTableDisplay = this.filesDisplay[destinationIndex-1]; // récupère l'objet de destination
    console.log("currentItem",currentItem);
    console.log("destinationIndex", destinationIndex)
    console.log("destinationItem", destinationItem)
    if(currentItem.elementType == "document" && destinationItem.elementType == "document"){
      this.sno.error("Impossible de transférer un fichier ds un fichier")
    }
    if(currentItem.elementType == "document"){
      this.documentService.update(currentItem.id, {
        folder_id : destinationItem.id
      }).subscribe({
        next: () => this.documentService.updateRequested.next(null)
      })
    }
    if(currentItem.elementType == "folder"){
      this.folderService.update(currentItem.id, {
        folder_id : destinationItem.id
      }).subscribe({
        next: () => this.folderService.updateRequested.next(null)
      })
    }
  }

}
