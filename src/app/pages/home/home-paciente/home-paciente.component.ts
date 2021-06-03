import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.scss']
})
export class HomePacienteComponent implements OnInit {

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
