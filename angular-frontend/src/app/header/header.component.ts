import { Component, OnInit } from '@angular/core';
import { faHouse, faEnvelope, faPhone, faCaretDown, faUser, faShoppingBag, faSearch, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { ProductListService } from '../services/product-list.service';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products = new Observable<Product[]>;
  results: Product[] | undefined;
  query: string | undefined

  //font awesome icon
  faHouse = faHouse;
  faCaretDown = faCaretDown;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  faShoppingBag = faShoppingBag;
  faSearch = faSearch;
  faChevronRight = faChevronRight;
  faHeart = faHeart

  totalItemNumber: number = 0

  constructor(
    private productListService: ProductListService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.products = this.productListService.fetchAll()


    //go to cart
    this.cartService.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }

  onSubmit() {
    if (!this.query) {
      // do nothing if the search query is empty
      return;
    }

    this.productListService.search(this.query).subscribe(data => {
      this.results = data
      console.log(this.results)
    })
  }
}
