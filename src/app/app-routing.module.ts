import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/account/my-account/my-account.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'sign-in'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }