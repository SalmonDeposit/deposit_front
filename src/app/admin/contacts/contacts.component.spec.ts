import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ContactComponent} from "../../pages/contact/contact.component";
import {ContactFormBuilder} from "../../pages/contact/classes/contactFormBuilder";

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ContactsComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
