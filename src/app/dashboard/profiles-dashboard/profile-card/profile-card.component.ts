import {Component, Input} from '@angular/core';
import {Profile} from "../../classes/models/profile";
import {ProfileService} from "../../services/profile.service";
import {ProfileFormBuilder} from "../../classes/builders/profile-form.builder";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile?: Profile;
  updateModal = false;
  deleteModal = false

  constructor(public service: ProfileService, public formBuilder: ProfileFormBuilder) {
  }
  onUpdateProfile(){
    this.service.updateRequested.next(null);
  }

}
