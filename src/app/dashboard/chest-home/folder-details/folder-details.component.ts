import {Component, OnInit} from '@angular/core';
import {FolderService} from "../../services/folder.service";
import {ActivatedRoute} from "@angular/router";
import {Folder} from "../../classes/models/folder";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.scss']
})
export class FolderDetailsComponent implements OnInit{
  folder: Folder;
  isLoading = true;
  constructor(public service: FolderService, private route: ActivatedRoute, public fileService: FileService) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id'])
      this.fileService.updateRequested.subscribe({
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
