import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './navbar/about/about.component';
import { ContactusComponent } from './navbar/contactus/contactus.component';
// import { HomeComponent } from './navbar/home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { ProductComponent} from './product/product.component';
import {CategoriesComponent} from './categories/categories.component';
import {ClothingComponent} from './categories/clothing/clothing.component';
import {ShoesComponent} from './categories/shoes/shoes.component';
import {AccessoriesComponent} from './categories/accessories/accessories.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthguardService } from './services/authguard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthService } from './services/auth.service';
import { ProfileOrdersComponent } from './profile/profile-orders/profile-orders.component';
import { AccountComponent } from './account/account.component';






const routes: Routes = [
  // {path:'', component: HomeComponent},
  {path: 'products', component: ShowAllProductsComponent},
  {path: '', component: CategoriesComponent},
  {path:'about', component: AboutComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},
  {path:'checkout', component: CheckoutComponent, canActivate:[AuthService]},
  {path:'signup', component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'profile' , component: ProfileComponent, canActivate:[AuthguardService]},
  {path: 'profile/orders' , component: ProfileOrdersComponent, canActivate:[AuthguardService]},
  {path: 'Accessories/product/:id' , component: ProductComponent},
  {path: 'Shoes/product/:id' , component: ProductComponent},
  {path: 'Clothing/product/:id' , component: ProductComponent},
  {path: 'Clothing' , component: ClothingComponent},
  {path: 'Shoes' , component: ShoesComponent},
  {path: 'Accessories' , component: AccessoriesComponent},
  {path: 'account' , component: AccountComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
