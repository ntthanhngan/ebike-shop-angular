import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Product", component: ProductListComponent },
  { path: "productDetails/:id", component: ProductDetailComponent },
  { path: "register", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "cart", component: ShoppingCartComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "contact", component: ContactComponent },
  { path: "about-us", component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
