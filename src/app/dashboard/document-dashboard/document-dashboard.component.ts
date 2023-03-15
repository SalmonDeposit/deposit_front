import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../services/document.service";
import {DepositDocument} from "../classes/models/document";
import {faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faFileCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-dashboard',
  templateUrl: './document-dashboard.component.html',
  styleUrls: ['./document-dashboard.component.scss']
})
export class DocumentDashboardComponent implements OnInit{
  addModal = false;
  documents?: DepositDocument[];
  isLoading = true;
  trash = faTrash as IconProp;
  file = faFileCircleCheck as IconProp;
  plus = faPlus as IconProp;
  deleteModal = false;
  currentDeleteDocumentId?: string;
  constructor(public service: DocumentService, private router: Router) {
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
        this.documents = res.object;
        this.isLoading = false
      }
    })
  }
  goToDetails(id: any){
    this.router.navigate([`/dashboard/documents/details/${id}`]);
  }
  onDelete(id: any){
    this.deleteModal = true;
    this.currentDeleteDocumentId = id;
  }

}
