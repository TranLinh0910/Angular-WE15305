import { Component, VERSION } from '@angular/core';
import { Product } from './product';
import { MockData } from './MockData';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titlt = "web"
  products = MockData;
  onAdd(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }
  // onRemove(id){}
}