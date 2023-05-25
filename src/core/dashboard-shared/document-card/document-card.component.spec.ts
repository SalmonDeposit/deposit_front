import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCardComponent } from './document-card.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {PipeModule} from "../../generics/pipes/pipe.module";

describe('DocumentCardComponent', () => {
  let component: DocumentCardComponent;
  let fixture: ComponentFixture<DocumentCardComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DocumentCardComponent);
    tb.imports.push(PipeModule.forRoot())
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DocumentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
