import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/apiServices/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 error: any;
  
constructor(
  private authService: AuthService,
  private router: Router
) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    this.authService.login(username,password).subscribe(
      _success => this.router.navigate(['shop-list']),
      error => this.error = error
      
    );
    console.log("logged", localStorage.getItem('token'));
  }
}
