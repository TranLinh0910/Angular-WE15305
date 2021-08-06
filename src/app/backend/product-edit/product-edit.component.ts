import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getInfo(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateProduct(){
this.productService.updateProduct(this.product).subscribe(data=>{
  alert('BẠn đã cập nhật thành công');
})
  }

}
