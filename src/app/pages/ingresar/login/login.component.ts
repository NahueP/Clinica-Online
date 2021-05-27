import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Usuario } from '../../../clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  flag : boolean = false;
  

  constructor(private afAuth : AngularFireAuth,private authSvc : AuthService, private router : Router,private spinner: NgxSpinnerService) { }


  async login()
  {
  
    

    try{
       
        this.authSvc.SignIn(this.email,this.password).then((res)=>{
       
  

      });
    }
    catch(error)
    {
      console.log(error);
    }
  }

  accesoAdmin()
  {
    this.email = "admin@test.com"
    this.password = "111111";
    
  }

  accesoPaciente()
  {
    this.email = "paciente@test.com"
    this.password = "222222";
  }

  accesoEspecialista()
  {
    this.email = "especialista@test.com"
    this.password = "333333";
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },1000);
  }

}
