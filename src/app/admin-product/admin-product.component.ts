import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
products$
  constructor(private product:ProductService) {
  this.products$=this.product.getall();
   
  }

     

   
   
  
  

   

  ngOnInit() {
  }

}
