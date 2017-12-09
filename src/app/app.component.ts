import { UserS } from './user.service';
import { UserService } from './services/user.service';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private auth:AuthService, private router:Router,
  private userService:UserS
  ){
    auth.user$.subscribe(user =>
      {
       if (user)
       {
         userService.save(user);
         let url = localStorage.getItem('url');
         router.navigateByUrl(url);
       }

      }
    )

  }
}
