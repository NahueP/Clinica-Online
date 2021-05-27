import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public user$ : Observable<any>= this.authSvc.afAuth.user;
  

  constructor(private authSvc : AuthService) { }

  ngOnInit(): void {
    // this.user = this.authSvc.GetCurrentUser();   
    // console.log(this.user); 
  }

  async onLogout()
  {
    try
    {
      await this.authSvc.desloguear();
      
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
  
  }


}
