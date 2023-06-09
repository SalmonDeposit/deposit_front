import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ContactComponent} from "../../../pages/contact/contact.component";
import {ContactFormBuilder} from "../../../pages/contact/classes/contactFormBuilder";

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(PlansComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
