import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineComponent } from './baseline.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {PlansComponent} from "../plans/plans.component";
import {
  HeaderResponsiveComponent
} from "../../../../core/shared/deposit-header/header-responsive/header-responsive.component";

describe('BaselineComponent', () => {
  let component: BaselineComponent;
  let fixture: ComponentFixture<BaselineComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(BaselineComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(HeaderResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
