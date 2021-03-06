import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
  

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('Authorization');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getAuthToken() {
    return new HttpHeaders().set("Authorization",localStorage.getItem("token"))
  }
}