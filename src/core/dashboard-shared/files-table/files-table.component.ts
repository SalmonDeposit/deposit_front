import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {faFileCircleCheck, faTrash, faBars} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {FileTableDisplay} from "./classes/file-table-display";
import {FilesTableDisplayBuilder} from "./classes/files-table-display-builder";
import {SnotifyService} from "ng-snotify";
import {DepositDocument} from "../../../app/dashboard/classes/models/document";
import {Folder} from "../../../app/dashboard/classes/models/folder";
import {FileService} from "../../../app/dashboard/services/file.service";
import {FolderService} from "../../../app/dashboard/services/folder.service";
import {DocumentService} from "../../../app/dashboard/services/document.service";
import {DateComparator, NameComparator} from "../../generics/grid-comparators/type-comparator";

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent implements OnInit, OnChanges {
  @Input() documents: DepositDocument[]
  @Input() folders: Folder[]
  @Input() currentFolder:Folder;
  @Input() searchMode:boolean;

  dateComparator = new DateComparator();
  nameComparator = new NameComparator();


  filesDisplay: FileTableDisplay[]
  deleteFolderModal = false;
  deleteDocumentModal = false;
  currentDeleteDocumentId?: string;
  trash = faTrash as IconProp;
  file = faFileCircleCheck as IconProp;
  bars = faBars as IconProp
  constructor(public service: FileService,
              private router: Router,
              public folderService: FolderService,
              public documentService: DocumentService,
              public sno: SnotifyService,
  ) {
  }
  ngOnInit() {
      this.filesDisplay = FilesTableDisplayBuilder.build(this.documents, this.folders);
      console.log(this.filesDisplay)
  }
  ngOnChanges(changes: SimpleChanges) {
    this.filesDisplay = FilesTableDisplayBuilder.build(this.documents, this.folders);
  }


  goToDetails(id: any, type: string){
    switch (type) {
      case 'document':
        this.router.navigate([`/dashboard/files/document/${id}`]);
        return
      case 'folder':
        this.router.navigate([`/dashboard/files/folder/${id}`])
        return
    }

  }
  onDelete(id: string, type:string){
    if(type == 'folder'){
      this.deleteFolderModal = true
    }
    if(type == 'document'){
      this.deleteDocumentModal = true
    }
    this.currentDeleteDocumentId = id;
  }

  onDrop(event: CdkDragDrop<any[]>) {
    const currentItem: FileTableDisplay = event.item.data; // récupère l'objet en cours
    const destinationIndex = event.currentIndex; // récupère l'index de la position de destination
    const destinationItem: FileTableDisplay = this.filesDisplay[destinationIndex-1]; // récupère l'objet de destination
    if(currentItem.elementType == "document" && destinationItem.elementType == "document"){
      this.sno.error("Impossible de transférer un fichier ds un fichier")
    }
    if(currentItem.elementType == "document"){
      this.documentService.update(currentItem.id, {
        folder_id : destinationItem.id
      }).subscribe({
        next: () => this.service.updateRequested.next(null)
      })
    }
    if(currentItem.elementType == "folder"){
      this.folderService.update(currentItem.id, {
        folder_id : destinationItem.id
      }).subscribe({
        next: () => this.service.updateRequested.next(null)
      })
    }
  }
}
