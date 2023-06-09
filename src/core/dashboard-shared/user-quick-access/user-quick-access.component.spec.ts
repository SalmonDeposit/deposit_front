import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuickAccessComponent } from './user-quick-access.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
describe('UserQuickAccessComponent', () => {
  let component: UserQuickAccessComponent;
  let fixture: ComponentFixture<UserQuickAccessComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(UserQuickAccessComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(UserQuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
