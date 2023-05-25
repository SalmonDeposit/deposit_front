import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSearchDocumentBarComponent } from './deposit-search-document-bar.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../../../app/dashboard/profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../../app/dashboard/classes/builders/profile-form.builder";

describe('DepositSearchDocumentBarComponent', () => {
  let component: DepositSearchDocumentBarComponent;
  let fixture: ComponentFixture<DepositSearchDocumentBarComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DepositSearchDocumentBarComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DepositSearchDocumentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
