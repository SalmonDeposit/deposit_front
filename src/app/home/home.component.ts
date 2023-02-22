import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalIsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  openModal(){
    this.modalIsOpen = true;
  }

}
