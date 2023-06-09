import { Component, OnInit } from '@angular/core';
import {HomeItems, HomeItemsFactory} from "../../classes/factories/home-items.factory";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  supportItems: HomeItems[]
  constructor() { }

  ngOnInit(): void {
    this.supportItems = HomeItemsFactory.buildSupportsItems();
  }

}
