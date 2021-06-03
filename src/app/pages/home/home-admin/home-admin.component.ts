import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

 

  constructor(private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.mostrarSpinner(1000);  
  }

  mostrarSpinner(seg : number)
  {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },seg);
  }

}
