import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailureDialogComponent } from './login-failure-dialog.component';

describe('LoginFailureDialogComponent', () => {
  let component: LoginFailureDialogComponent;
  let fixture: ComponentFixture<LoginFailureDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFailureDialogComponent]
    });
    fixture = TestBed.createComponent(LoginFailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
