import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { LoginRequest } from '../models/dto/loginRequest';
import { RegisterRequest } from '../models/dto/registerRequest';

@Injectable({
    providedIn: 'root'
  })
  export class AccountService {
  
    constructor(private http: HttpClient) {
    }
  
    register(registerRequest: RegisterRequest) {
      return this.http.post(environment.gateway + '/register', registerRequest);
    }
  
    login(loginRequest: LoginRequest) {
      return this.http.post(environment.gateway + '/login', loginRequest);
    }
  }