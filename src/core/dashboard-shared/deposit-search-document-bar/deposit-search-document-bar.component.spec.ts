import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSearchDocumentBarComponent } from './deposit-search-document-bar.component';

describe('DepositSearchDocumentBarComponent', () => {
  let component: DepositSearchDocumentBarComponent;
  let fixture: ComponentFixture<DepositSearchDocumentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSearchDocumentBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositSearchDocumentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
