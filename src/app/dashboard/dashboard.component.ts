import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.list().subscribe({
      next : res => console.log(res)
    })
  }

}
