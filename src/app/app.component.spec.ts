import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DEPOSIT_TEST_BED} from "../deposit.testbed";

describe('AppComponent', () => {
  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(AppComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
