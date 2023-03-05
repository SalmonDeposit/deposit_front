import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
    });
  }
}
