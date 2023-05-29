import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementComponent } from './account-management.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {UpdatePasswordFormBuilder} from "../classes/builders/update-password-form-builder";

describe('AccountManagementComponent', () => {
  let component: AccountManagementComponent;
  let fixture: ComponentFixture<AccountManagementComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(AccountManagementComponent);
    tb.providers.push(UpdatePasswordFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(AccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
