import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) {

   }
   create(product)
   {
     this.db.list("/products").push(product);
   }
   get(id)
   {
    return  this.db.object('/products/'+id);
   }
   delete(id)
   {
     return this.db.object('/products/' + id).remove();
   }
   getall()
   {
     return this.db.list('/products');
   }
   update(id,product)
   {
     return this.db.object('/products/' + id).update(product);
   }

}
