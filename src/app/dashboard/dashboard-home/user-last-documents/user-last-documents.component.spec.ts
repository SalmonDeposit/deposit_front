import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastDocumentsComponent } from './user-last-documents.component';

describe('UserLastDocumentsComponent', () => {
  let component: UserLastDocumentsComponent;
  let fixture: ComponentFixture<UserLastDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLastDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLastDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
