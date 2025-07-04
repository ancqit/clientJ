import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatError, MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,MatFormField,MatOption,MatLabel,MatError,MatSelectModule,MatInput],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  readonly MAX_USERNAME = 10000000000;
  

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      username: [,[ Validators.required,Validators.max(this.MAX_USERNAME)]],
      role: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(value => {
      if((value.username.toString().length <= 10)|| (value.role!==''))this.onSubmit() });
    }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle successful form submission
      // alert(JSON.stringify(this.loginForm.value));
      this.router.navigate(['/dashboard']);    }
  }
}
