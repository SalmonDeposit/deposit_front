import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardComponent } from './profile-card.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ProfileFormBuilder} from "../../classes/builders/profile-form.builder";

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ProfileCardComponent);
    tb.providers.push(ProfileFormBuilder)
    await TestBed.configureTestingModule(tb)
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
