import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProfileInfoComponent } from './aside-profile-info.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../../../app/dashboard/profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../../app/dashboard/classes/builders/profile-form.builder";

describe('AsideProfileInfoComponent', () => {
  let component: AsideProfileInfoComponent;
  let fixture: ComponentFixture<AsideProfileInfoComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(AsideProfileInfoComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(AsideProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
