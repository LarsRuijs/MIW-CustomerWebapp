import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';
import { MyAccountComponent } from './components/account/my-account/my-account.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { AuthService } from './auth/auth.service';
import { BasketComponent } from './components/shop/basket/basket.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    MyAccountComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {return localStorage.getItem("Authorization")},
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [JwtHelperService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
