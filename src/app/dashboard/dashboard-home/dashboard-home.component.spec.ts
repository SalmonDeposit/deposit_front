import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeComponent } from './dashboard-home.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../classes/builders/profile-form.builder";

describe('DashboardHomeComponent', () => {
  let component: DashboardHomeComponent;
  let fixture: ComponentFixture<DashboardHomeComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DashboardHomeComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
