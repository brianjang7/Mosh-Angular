import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup ({
    account: new FormGroup({
      username: new FormControl(''), 
      password: new FormControl('')
    })
  });

  get username() {
    return this.form.get('account.username'); 
  }
}


/*
 
    ,[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
 
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

    username: new FormControl('', 
      Validators.required, 
      UsernameValidators.shouldBeUnique), 
    password: new FormControl('', Validators.required)

 */