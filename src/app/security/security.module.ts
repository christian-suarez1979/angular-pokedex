import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, VerifyUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register-user', component: SignUpComponent },
      { path: 'verify-user', component: VerifyUserComponent },
    ]),
  ],
})
export class SecurityModule {}
