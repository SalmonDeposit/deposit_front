import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesTableHeaderComponent } from './files-table-header.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {FolderFormBuilder} from "../../../../app/dashboard/classes/builders/folder-form.builder";

describe('FilesTableHeaderComponent', () => {
  let component: FilesTableHeaderComponent;
  let fixture: ComponentFixture<FilesTableHeaderComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(FilesTableHeaderComponent);
    tb.providers.push(FolderFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(FilesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
