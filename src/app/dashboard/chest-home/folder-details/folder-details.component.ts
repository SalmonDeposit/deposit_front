import {Component, OnInit} from '@angular/core';
import {FolderService} from "../../services/folder.service";
import {ActivatedRoute} from "@angular/router";
import {Folder} from "../../classes/models/folder";

@Component({
  selector: 'app-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.scss']
})
export class FolderDetailsComponent implements OnInit{
  folder: Folder;
  isLoading = true;
  constructor(public service: FolderService, private route: ActivatedRoute,) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id'])
      this.service.updateRequested.subscribe({
        next: () => this.load(params['id'])
      })
    })
  }
  load(id:string){
    this.service.read(id).subscribe({
      next: res => {
        this.folder = res.object;
        this.isLoading = false
      }
    })
  }

}
