import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/dto/registerRequest';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private accountService: AccountService, 
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      givenName: [null, Validators.required],
      familyName: [null, Validators.required],
      postalCode: [null, Validators.required],
      houseNumber: [null, Validators.required]
    });
  }

  submit(): void {
    let registerRequest: RegisterRequest = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      confirmPassword: this.signUpForm.value.confirmPassword
    }

    this.accountService.register(registerRequest).pipe()
    .subscribe({
        next: () => {
          this.router.navigateByUrl('/sign-in');
          this.snackbar.open("Registered successfully.", "", {
            duration: 3000
          });
        },
        error: e => {
          console.log(e);
        }
    });
  }

}
