import { Component, OnInit } from '@angular/core';
import {HomeItems, HomeItemsFactory} from "../../classes/factories/home-items.factory";

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  valuesItem: HomeItems[];
  constructor() { }

  ngOnInit(): void {
    this.valuesItem = HomeItemsFactory.buildValuesItems();
  }

}
