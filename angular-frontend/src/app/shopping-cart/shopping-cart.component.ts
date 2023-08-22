import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faTrash = faTrash

  products: any = [];
  productList: any = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.productList = this.cartService.getTotalAmount();
    })
  }

  removeProduct(item: any) {
    this.cartService.removeCartData(item)
  }

  removeAllProduct() {
    this.cartService.removeAllCart()
  }
}
