import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessDialogComponent } from './login-success-dialog.component';

describe('LoginSuccessDialogComponent', () => {
  let component: LoginSuccessDialogComponent;
  let fixture: ComponentFixture<LoginSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(LoginSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
