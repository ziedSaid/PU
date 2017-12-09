import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public ngAuth:AuthService) {
    
  
  

   }
    

  logOut(){
   this.ngAuth.logout()
  }
  ngOnInit() {
  }

}
