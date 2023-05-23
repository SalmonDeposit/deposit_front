import { Component } from '@angular/core';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  envelop = faEnvelope as IconProp;
  constructor(private router:Router) {
  }
  isAdminHome(){
    return this.router.url.endsWith('/admin');
  }

}
