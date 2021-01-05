import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlService } from '../../../apiServices/form-control.service';
import { AuthService } from '../../../apiServices/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public formControlService: FormControlService
  ) { }

  ngOnInit() {
  }

  submit(){
    return;
  }


  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      _success => this.router.navigate(['shop-list']),
      error => this.error = error
    );
  }

}
