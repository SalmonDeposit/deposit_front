import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesTableHeaderComponent } from './files-table-header.component';

describe('FilesTableHeaderComponent', () => {
  let component: FilesTableHeaderComponent;
  let fixture: ComponentFixture<FilesTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
