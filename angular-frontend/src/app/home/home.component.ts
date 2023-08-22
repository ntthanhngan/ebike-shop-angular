import { Component, OnInit } from '@angular/core';
import { faHeart, faSignal, faStar, faStarHalfAlt, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductListService } from '../services/product-list.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  products = new Observable<Product[]>;

  constructor(
    private productListService: ProductListService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productListService.fetchAll().subscribe(res => {
      this.products.forEach((data: any) => {
        Object.assign(data, { quantity: 1, total: data.price })
      })
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  //Owl carousel
  customOptions: OwlOptions = {
    autoWidth: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText:
      [
        '<fa-icon [icon]="faChevronLeft"></fa-icon>',
        '<fa-icon [icon]="faChevronRight"></fa-icon>'
      ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  customOptions_1: OwlOptions = {
    autoWidth: true,
    loop: true,
    dots: false,
    mouseDrag: false,
    pullDrag: false,
    navSpeed: 1000,
    autoplay: true,
    navText:
      [
        '<fa-icon [icon]="faChevronLeft"></fa-icon>',
        '<fa-icon [icon]="faChevronRight"></fa-icon>'
      ],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
    },
    nav: true
  }

  accessoriesSlide = [
    { id: 1, product_name: "Dot Bike Euro Road Helmet", img: "./assets/images/products/acc1.png", old_price: 300.00, current_price: 210.00 },
    { id: 2, product_name: "Dot Bike New Road Shoes", img: "./assets/images/products/acc2.png", current_price: 210.00 },
    { id: 3, product_name: "Dot Bike New Road Dress", img: "./assets/images/products/acc1.png", current_price: 210.00 },
    { id: 4, product_name: "Dot Bike Euro Road Helmet", img: "./assets/images/products/acc1.png", old_price: 300.00, current_price: 210.00 },
    { id: 5, product_name: "Dot Bike New Road Shoes", img: "./assets/images/products/acc2.png", current_price: 210.00 },
    { id: 6, product_name: "Dot Bike New Road Dress", img: "./assets/images/products/acc2.png", current_price: 210.00 },
  ]

  bannerStore = [
    {
      bn_id: 1,
      bn_title: "Ride Bike",
      bn_content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan.",
      bn_product_price: 320,
      bn_img: "../assets/images/banner/banner1.png",
      bn_product_url: ""
    },
    {
      bn_id: 2,
      bn_title: "Mountain Bike",
      bn_content: "Lorem ipsum dolor sit amet, conse tetuer adipiscing elit.",
      bn_product_price: 350,
      bn_img: "../assets/images/banner/banner2.png",
      bn_product_url: ""
    },
    {
      bn_id: 1,
      bn_title: "Ride Bike",
      bn_content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan.",
      bn_product_price: 320,
      bn_img: "../assets/images/banner/banner1.png",
      bn_product_url: ""
    },
    {
      bn_id: 2,
      bn_title: "Mountain Bike",
      bn_content: "Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.",
      bn_product_price: 350,
      bn_img: "../assets/images/banner/banner2.png",
      bn_product_url: ""
    },
  ]

  //Bootstrap carousel
  showNavigationIndicators = false;
  slides = [
    "./assets/images/slider/slider-1.jpg",
    "./assets/images/slider/slider-2.jpg",
    "./assets/images/slider/slider-3.jpg"
  ];

  //Font awesome icon
  faHeart = faHeart;
  faSignal = faSignal;
  faStar = faStar;
  faStarO = faStarHalfAlt;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;




}
