import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {UserFormBuilder} from "./classes/user-form.builder";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user?: any
  editModal = false;
  addModal = false
  constructor(public service: UserService, public userFormBuilder: UserFormBuilder) { }

  ngOnInit(): void {
    this.service.list().subscribe({
      next : res => {
        this.user = res.object[0]
        console.log(this.user)
      }
    })
  }

}
