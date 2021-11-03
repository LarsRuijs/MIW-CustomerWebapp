import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/dto/loginRequest';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submit() : void {
    let loginRequest: LoginRequest = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }

    this.accountService.login(loginRequest).pipe()
    .subscribe({
        next: res => {
          localStorage.setItem('Authorization', `Bearer ${res.toString()}`);
          this.router.navigateByUrl('/');
          this.snackbar.open("Logged in successfully.", "", {
            duration: 3000
          });
        },
        error: e => {
          console.log(e);
        }
    });
  }

}
