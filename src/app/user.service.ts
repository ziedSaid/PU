import { Observable } from 'rxjs/Observable';


import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
 //import {FirebaseObjectObservable} from 'angularfire2/database-deprecated/';
import { AngularFireDatabase, FirebaseObjectObservable} from  'angularfire2/database';

import * as firebase from 'firebase';

@Injectable()
export class UserS {
 
  constructor(private db :AngularFireDatabase) { }
  get(uid:string):FirebaseObjectObservable<AppUser>
    
  {
 return this.db.object('/users/' + uid);
 }
  save(user:firebase.User)
  {
this.db.object('/users/'+user.uid).update(
  {
    name:user.displayName,
    email:user.email
  }
)

  }
 
  
  }