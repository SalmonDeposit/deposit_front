import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDashboardComponent } from './profiles-dashboard.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileFormBuilder} from "../classes/builders/profile-form.builder";

describe('ProfilesDashboardComponent', () => {
  let component: ProfilesDashboardComponent;
  let fixture: ComponentFixture<ProfilesDashboardComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ProfilesDashboardComponent);
    tb.providers.push(ProfileFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();


    fixture = TestBed.createComponent(ProfilesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
