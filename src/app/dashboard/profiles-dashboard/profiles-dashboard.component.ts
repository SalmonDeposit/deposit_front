import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {Profile} from "../classes/models/profile";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ProfileFormBuilder} from "../classes/builders/profile-form.builder";

@Component({
  selector: 'app-profiles-dashboard',
  templateUrl: './profiles-dashboard.component.html',
  styleUrls: ['./profiles-dashboard.component.scss']
})
export class ProfilesDashboardComponent implements OnInit{
  profiles?: Profile[]
  isLoading = true
  plus = faPlus as IconProp;
  addModal = false
  constructor(public service: ProfileService, public formBuilder: ProfileFormBuilder) {
  }
  ngOnInit(): void {
    this.load();
    this.service.updateRequested.subscribe({
      next: () => {
        this.isLoading = true;
        this.load();

      }
    })
  }
  load(){
    this.service.list().subscribe({
      next: res => {
        this.profiles = res.object;
        this.isLoading = false;
      }
    })
  }

}
