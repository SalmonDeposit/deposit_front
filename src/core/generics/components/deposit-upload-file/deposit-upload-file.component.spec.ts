import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositUploadFileComponent } from './deposit-upload-file.component';

describe('DepositUploadFileComponent', () => {
  let component: DepositUploadFileComponent;
  let fixture: ComponentFixture<DepositUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositUploadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
