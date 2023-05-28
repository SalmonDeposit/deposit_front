import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Location} from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  returnIcon = faArrowRotateLeft as IconProp;
  constructor(public router: Router, private location: Location) {}

  return(){
    this.location.back()
  }

}
