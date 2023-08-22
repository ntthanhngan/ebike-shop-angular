import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carDetails: any = [];
  productList = new BehaviorSubject<any>([]);


  constructor() { }
  //get product data
  getProductData() {
    return this.productList.asObservable();
  }
  //set product data
  setProduct(product: any) {
    this.carDetails.push(...product);
    this.productList.next(product)
  }
  //add to cart details
  addToCart(product: any) {
    this.carDetails.push(product);
    this.productList.next(this.carDetails);
    this.getTotalAmount();
    console.log(this.carDetails)
  }
  //get total amount
  getTotalAmount() {
    let grandTotal: number = 0;
    this.carDetails.map((a: any) => {
      grandTotal += a.price;
      console.log("grandtotal:", grandTotal)
    })
    return grandTotal
  }

  //remove one by one
  removeCartData(product: any) {
    this.carDetails.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.carDetails.splice(index, 1)
      }
    })
    this.productList.next(this.carDetails)
  }
  //Remove all cart data
  removeAllCart() {
    this.carDetails = [];
    this.productList.next(this.carDetails)
  }
}
