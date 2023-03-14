import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../../app/dashboard/services/document.service";
import {DepositDocument} from "../../../app/dashboard/classes/models/document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aside-profile-info',
  templateUrl: './aside-profile-info.component.html',
  styleUrls: ['./aside-profile-info.component.scss']
})
export class AsideProfileInfoComponent implements OnInit {
  documents?: DepositDocument[]
  isLoading = true;
  constructor(private documentService:DocumentService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadDocuments()
    this.documentService.addSubject.subscribe({
      next: () => this.loadDocuments()
    })
  }
  loadDocuments(){
    this.documentService.list().subscribe({
      next: res => {
        this.documents = res.object.slice(0,3);
        this.isLoading = false
      }
    })
  }
  goToDetails(id: any){
    this.router.navigate([`dashboard/documents/details/${id}`])
  }


}
