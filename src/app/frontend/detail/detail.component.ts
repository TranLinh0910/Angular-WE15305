import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
product:Product;
data:Product;
  constructor( 
    private   activatedRoute:ActivatedRoute,
    private productService:ProductService) { 
  }
  ngOnInit() {
    this.getInfor();
  }
  getInfor(){
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getInfo(params.id).subscribe(data=>{
        this.product=data;
        console.log(data);
      })
    })
  }
}
