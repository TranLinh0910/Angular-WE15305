import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';

import { Product } from '../../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input() products: Product[];
  products: Product[];
  data: Product;

  myClass = 'table-bordered';
  constructor(private productService: ProductService) {}
  

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    // this.products = this.productService.getProducts(); // []
  }
  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    });
  }
  detailItem(product: Product) {
    this.data = product;
  }
}
