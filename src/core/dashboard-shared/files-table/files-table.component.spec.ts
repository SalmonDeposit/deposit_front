import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesTableComponent } from './files-table.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";

describe('FilesTableComponent', () => {
  let component: FilesTableComponent;
  let fixture: ComponentFixture<FilesTableComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(FilesTableComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(FilesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
