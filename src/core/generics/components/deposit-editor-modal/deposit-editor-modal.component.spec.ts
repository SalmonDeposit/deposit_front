import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositEditorModalComponent } from './deposit-editor-modal.component';

describe('DepositEditorModalComponent', () => {
  let component: DepositEditorModalComponent;
  let fixture: ComponentFixture<DepositEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositEditorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
