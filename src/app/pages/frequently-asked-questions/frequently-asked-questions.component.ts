import { Component, OnInit } from '@angular/core';
import {FaqFactory, FaqQuestions} from "./faq.factory";

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.scss']
})
export class FrequentlyAskedQuestionsComponent{
  faq: FaqQuestions[]

  constructor() {
    this.faq = FaqFactory.build();
  }
}
