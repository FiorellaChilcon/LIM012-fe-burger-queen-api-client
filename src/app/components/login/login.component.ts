import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailErrorMessage: string;
  passwordErrorMessage: string;
  url: string = 'http://ec2-13-58-43-131.us-east-2.compute.amazonaws.com';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  onSubmit() {
    this.passwordErrorMessage = '';
    this.emailErrorMessage = '';
    if (!this.loginForm.invalid) {
      this.http.post<any>(`${this.url}/auth`, this.loginForm.value).subscribe(
        data => {
          console.log(data.token);
          this.router.navigate(['/home']);
        },
        err => {
          if (err.status === 403) {
            return this.passwordErrorMessage = 'Sorry, your password was incorrect';
          }
          return this.emailErrorMessage = 'The email you entered doesn\'t belong to an account';
        }
      );
    } else {
      const formControl = this.loginForm.controls;
      if (formControl.password.errors) {
        const error = formControl.password.errors.required ? 'Password is required' : 'Must be a valid password';
        this.passwordErrorMessage = error;
      }
      if (formControl.email.errors) {
        const error = formControl.email.errors.required ? 'Email is required' : 'Must be a valid email address';
        this.emailErrorMessage = error;
      }
    }
  }
}

