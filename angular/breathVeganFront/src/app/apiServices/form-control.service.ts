import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor(private fb: FormBuilder) { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),

    email: new FormControl('',[Validators.required, Validators.email]),

    password: new FormControl('', Validators.compose ([Validators.required,
                                                      Validators.minLength(5),
                                                      FormControlService.patternValidator(/\d/, { hasNumber: true }),
                                                     FormControlService.patternValidator(/[A-Z]/, {hasCapitalCase: true })])),

    confirmPassword: new FormControl(['', Validators.required, FormControlService.passwordMatchValidator]),
  });




  // tslint:disable-next-line:typedef
  initializeLoginForm(){
    this.loginForm.setValue({
      userName: '',
      password: ''
    });
  }

  // tslint:disable-next-line:typedef
  initializeSignUpForm(){
    this.signUpForm.setValue({
      userName: '',
      password: '',
      email: '',
      confirmPassword: ''
    });
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }


  addingItemForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });


}



