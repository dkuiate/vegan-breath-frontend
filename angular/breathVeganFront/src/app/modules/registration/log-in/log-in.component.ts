import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlService } from 'app/apiServices/form-control.service';
import { AuthService } from '../../../apiServices/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 error: any;
  
constructor(
  private authService: AuthService,
  private router: Router,
  public formControlService: FormControlService
) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    console.log('la console marche');
    this.authService.login(username,password).subscribe(
      _success => this.router.navigate(['shop-list']),
      error => this.error = error
      
    );
    console.log("logged", localStorage.getItem('token'));
  }
}
