import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  products!: Product[];
  data!: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
  }
}
