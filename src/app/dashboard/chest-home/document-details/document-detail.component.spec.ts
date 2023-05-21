import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDetailComponent } from './document-detail.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";

describe('DocumentDetailComponent', () => {
  let component: DocumentDetailComponent;
  let fixture: ComponentFixture<DocumentDetailComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DocumentDetailComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
