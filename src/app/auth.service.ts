import { UserS } from './user.service';
import { UserService } from './services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import 'rxjs/add/operator/switchMap'
@Injectable()
export class AuthService {
  user$: Observable <firebase.User>;
  constructor(private anAuth:AngularFireAuth,
              private route:ActivatedRoute,
              private userService:UserS
  ) {
    this.user$= anAuth.authState;}


login()
{
 let url = this.route.snapshot.queryParamMap.get('url') || '/';
 localStorage.setItem('url',url);
  this.anAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}
logout()
{

  this.anAuth.auth.signOut()

}

get appUser$():Observable<AppUser>{
  return this.user$
  .switchMap(user => this.userService.get(user.uid))

}

}