import { Component } from '@angular/core';
import {faBars, faTimes, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-aside-menu-responsive',
  templateUrl: './aside-menu-responsive.component.html',
  styleUrls: ['./aside-menu-responsive.component.scss']
})
export class AsideMenuResponsiveComponent {
  isMenuOpen = false;

  bars = faBars as IconProp;
  times = faTimes as IconProp
  caretRight = faCaretRight as IconProp

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
