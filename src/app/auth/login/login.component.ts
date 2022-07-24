import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // #region declare variables
  form!: FormGroup;
  // #end region

  constructor(
    private formBuilder : FormBuilder,

  ) {
    this.initForm();
   }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
    })
  }

  getErrorMessage() {
    if (this.form.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
