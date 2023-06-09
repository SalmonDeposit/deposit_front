import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDetailsComponent } from './folder-details.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ProfileCardComponent} from "../../profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../classes/builders/profile-form.builder";

describe('FolderDetailsComponent', () => {
  let component: FolderDetailsComponent;
  let fixture: ComponentFixture<FolderDetailsComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(FolderDetailsComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(FolderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
