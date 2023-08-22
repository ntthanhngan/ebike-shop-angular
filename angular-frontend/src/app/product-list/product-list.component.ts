import { Component, OnInit } from '@angular/core';
import {
  faHeart, faSignal, faStar, faStarHalfAlt, faChevronRight, faChevronLeft, faCaretDown,
  faList
} from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { ProductListService } from '../services/product-list.service';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = new Observable<Product[]>;
  //products: Product[] = []
  categories = new Observable<Category[]>;

  pageSize: number = 6;
  totalItems!: number;
  currentPage: number = 1;

  constructor(
    private productListService: ProductListService,
    private cartService: CartService,
    private categoryService: CategoryService
  ) { }

  //Font awesome icon
  faHeart = faHeart;
  faSignal = faSignal;
  faStar = faStar;
  faStarO = faStarHalfAlt;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faCaretDown = faCaretDown;



  ngOnInit(): void {
    //get all product
    this.products = this.productListService.fetchAll()

    this.productListService.fetchAll().subscribe(res => {
      //get length of product array
      //this.totalItems = res.length;
      //add to cart
      this.products.forEach((data: any) => {
        Object.assign(data, { quantity: 1, total: data.price })
      })
    })

    //get all categories
    this.categories = this.categoryService.fetchAll()

    //pagination
    //this.paginate(1, 6)
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }


  /* paginate(page: number, pageSize: number) {
    this.productListService.paginateProduct(page, pageSize).subscribe((result) => {
      console.log(result)
      this.products = result[0];
    });
  } */
}
