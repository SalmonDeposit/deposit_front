import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  // @ts-ignore
  faAngleRight = icon(faAngleRight).html;
  // @ts-ignore
  faAngleLeft = icon(faAngleLeft).html;

  constructor() { }
  slides$ = new BehaviorSubject<string[]>(['']);

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

}
