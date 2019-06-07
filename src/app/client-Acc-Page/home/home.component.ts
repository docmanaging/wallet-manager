import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    authenticationService: AuthenticationService;

    constructor(private router: Router,) { }

  ngOnInit() {
  }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem('userData');  

        this.router.navigate(["/Login"]);
    }

}
