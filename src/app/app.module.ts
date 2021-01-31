import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactusComponent } from './navbar/contactus/contactus.component';
import {ClothingComponent} from './categories/clothing/clothing.component';
import {ShoesComponent} from './categories/shoes/shoes.component';
import {AccessoriesComponent} from './categories/accessories/accessories.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';



import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ProductComponent } from './product/product.component';
import { CarouselModule, WavesModule,InputsModule, IconsModule } from 'angular-bootstrap-md'
// MDB Angular Pro
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md'
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthguardService } from './services/authguard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileOrdersComponent } from './profile/profile-orders/profile-orders.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShowAllProductsComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    SearchPipe,
    ProductComponent,
    CategoriesComponent,
    ClothingComponent,
    ShoesComponent,
    AccessoriesComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    CheckoutComponent,
    ProfileOrdersComponent,
    AccountComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CarouselModule,
    IconsModule,
    WavesModule,
    ButtonsModule,
    CardsModule,
    InputsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
    
  ],
  providers: [ProductService,UserService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
