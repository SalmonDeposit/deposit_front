import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../../dashboard/profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../dashboard/classes/builders/profile-form.builder";
import {ContactFormBuilder} from "./classes/contactFormBuilder";

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ContactComponent);
    tb.providers.push(ContactFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
