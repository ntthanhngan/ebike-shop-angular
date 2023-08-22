import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductListService } from '../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] | undefined;
  prods: string = '';

  constructor(
    private route: ActivatedRoute,
    private productListService: ProductListService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.prods = params.get("id") || '';
    })
    this.productListService.getById(this.prods).subscribe((data: any[]) => {
      this.products = data
    })
  }
  faStar = faStar;
  faStarO = faStarHalfAlt;
}
