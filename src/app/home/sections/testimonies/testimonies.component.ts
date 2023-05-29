import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {DepositTestimony} from "./deposit-testimony.interface";
import {TestimoniesFactory} from "./testimonies.factory";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  public testimonies: DepositTestimony[];

  constructor() {
    this.testimonies = TestimoniesFactory.get();
  }
  ngOnInit(): void {

  }

}
