import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-privacy-policy-management',
  templateUrl: './privacy-policy-management.component.html',
  styleUrls: ['./privacy-policy-management.component.scss']
})
export class PrivacyPolicyManagementComponent {
  faArrowRight = faArrowRight as IconProp;
}
