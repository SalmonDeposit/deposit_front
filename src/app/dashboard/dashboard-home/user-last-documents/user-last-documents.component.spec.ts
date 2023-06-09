import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastDocumentsComponent } from './user-last-documents.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ProfileCardComponent} from "../../profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../classes/builders/profile-form.builder";

describe('UserLastDocumentsComponent', () => {
  let component: UserLastDocumentsComponent;
  let fixture: ComponentFixture<UserLastDocumentsComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(UserLastDocumentsComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(UserLastDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
