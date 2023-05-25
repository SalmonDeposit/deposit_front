import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestHomeComponent } from './chest-home.component';
import {
  AsideProfileInfoComponent
} from "../../../core/dashboard-shared/aside-profile-info/aside-profile-info.component";
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../classes/builders/profile-form.builder";

describe('ChestHomeComponent', () => {
  let component: ChestHomeComponent;
  let fixture: ComponentFixture<ChestHomeComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ChestHomeComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(ChestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
