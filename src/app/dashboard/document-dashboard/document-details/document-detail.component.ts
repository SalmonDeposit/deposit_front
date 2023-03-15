import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {DepositDocument} from "../../classes/models/document";
import {faTrash, faDownload} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {DownloadService} from "../../../../core/generics/services/download.service";
import { saveAs } from 'file-saver';
import {SnotifyService} from "ng-snotify";
import {viewerType} from "ngx-doc-viewer";

@Component({
  selector: 'app-document-dashboard',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  document?: DepositDocument
  isLoading = true
  deleteModal = false;
  trash = faTrash as IconProp;
  dl = faDownload as IconProp;

  constructor(private route: ActivatedRoute,
              public service: DocumentService,
              private router: Router,
              private dlService: DownloadService,
              private sno: SnotifyService
  ) {
  }
  ngOnInit(): void {
    this.service.updateRequested.subscribe({
      next: () => this.onDelete()
    })
    this.route.params.subscribe(params => {
      this.service.read(params['id']).subscribe({
        next: res => {
          console.log(res.object)
          this.document = res.object
          this.isLoading = false
        }
      })
    })
  }
  onDelete(){
    this.deleteModal = false;
    this.router.navigate(['/dashboard/home'])
  }
  dlFile(){
    this.sno.info("Fonctionnalité pas implémentée");
  }
  //   if(!this.document?.storageLink){return;}
  //   this.dlService.download(this.document?.storageLink).subscribe({
  //     next: blob => {
  //       saveAs(blob, this.document?.name)
  //     }
  //   })
  // }

  getViewer(): viewerType{
    // @ts-ignore
    if(this.document.type.includes('image')){
      return 'url'
    }
    return 'google';
  }
}
