import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product$
  id;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private category:CategoryService, private product:ProductService) { 
    this.categories$=this.category.getCategory()
  
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.product.get(this.id).take(1).subscribe(
      p => {
        this.product$=p;
      }
    )
      

     
  }
delete(){
   if (confirm("are  u  sure to delete this element")) 
   {
     this.product.delete(this.id);
     this.router.navigate(['/admin/products']);
   }

}
  
  save(product)
  {
    if (this.id)  this.product.update(this.id,product);
    else
         this.product.create(product);
   this.router.navigate(['/admin/products']);
  }
  ngOnInit() {
  }

}
