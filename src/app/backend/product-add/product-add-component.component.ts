import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import firebase from 'firebase';
import {Router } from '@angular/router'


@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})
export class ProductAddComponentComponent implements OnInit {

  // @Output() data = new EventEmitter<Product>();
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    desc: '',
    status: false,
    img: ''
  };
  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit() {}
  onAddImage(e: any){
    const file = e.target.files[0];
    let storeRef= firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then(e => {
      storeRef.getDownloadURL().then(async(url) => {
        this.product.img = url
      })
    })
  }
  onAddProduct() {
    // this.productService.addProduct(this.product);
    // this.data.emit(this.product);
    this.productService.addProduct(this.product).subscribe(data=>{
      console.log(data);
      alert("them thanh cong");
      this.router.navigateByUrl('/admin/product');
    });
  }

}
