import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
@Component({
  selector: 'app-who-you-are',
  templateUrl: './who-you-are.component.html',
  styleUrls: ['./who-you-are.component.scss']
})

export class WhoYouAreComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  caretRight = faCaretRight as IconProp;

}
