import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('Authorization');
    localStorage.clear();

    this.router.navigate(['']);
  }

}
