import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'; //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { PanierComponent } from './panier/panier.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'; // Adjust the path as needed
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BoutiqueComponent,
    ProductComponent,
    PanierComponent,
    PagesLayoutComponent,
    AuthLayoutComponent,
    CheckoutComponent,
    ThankYouComponent,
    AdminLayoutComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    AuthRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    //the way u should add interceptor without any bug
    //u need to do it manually , what i mean is u need 
    //to import paste this line import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; manually
    // import { AuthInterceptor } from './interceptors/auth.interceptor'; this line too
    //and then type or paste what's bellow manually
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
