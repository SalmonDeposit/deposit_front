import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {DepositDocument} from "../../classes/models/document";

@Component({
  selector: 'app-document-dashboard',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  document?: DepositDocument
  isLoading = true

  constructor(private route: ActivatedRoute, private service: DocumentService) {
  }
  ngOnInit(): void {
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

}
