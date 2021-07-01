import { Component, OnInit } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'product 1',
    price: 200,
    status: true,
    desc: 'Mo ta san pham',
    img:
      'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
