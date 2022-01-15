import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { LoginRequest } from '../models/dto/loginRequest';
import { RegisterRequest } from '../models/dto/registerRequest';
import { AuthService } from 'app/auth/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AccountService {
  
    constructor(private http: HttpClient, private authService: AuthService) {
    }
  
    register(registerRequest: RegisterRequest) {
      return this.http.post(environment.gateway + '/auth/register', 
        registerRequest);
    }
  
    login(loginRequest: LoginRequest) {
      return this.http.post(environment.gateway + '/auth/login', 
        loginRequest);
    }
  }