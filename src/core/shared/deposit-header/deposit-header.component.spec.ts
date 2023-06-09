import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositHeaderComponent } from './deposit-header.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
describe('DepositHeaderComponent', () => {
  let component: DepositHeaderComponent;
  let fixture: ComponentFixture<DepositHeaderComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DepositHeaderComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
