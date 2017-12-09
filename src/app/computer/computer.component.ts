import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
 products$;
 //products: Product [] 
  constructor(product:ProductService) {
    this.products$=product.getall();
   }

  ngOnInit() {
  }

}
