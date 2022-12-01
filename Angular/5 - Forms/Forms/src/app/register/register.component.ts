import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

function createMyValidator(config: number): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value.length > 10 ? {myValidator: true} : null;
  }
}
// const myValidator: ValidatorFn = (control: AbstractControl) => {
//   return control.value.length > 10 ? {myValidator: true} : null;
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, createMyValidator(10)]],
    password: ['', [Validators.required, Validators.maxLength(8)]]
  })

  ngOnInit(): void {
  }

  handleFormSubmit() {

  }

}
