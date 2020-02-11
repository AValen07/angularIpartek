import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario : FormGroup;

  constructor(private _builder : FormBuilder) { 
    console.trace('LoginComponent constructor');

    this.formulario=this._builder.group({
      //definir los FormControl == inputs
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]) ],
      password:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });

  }//constructor

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');

  }//ngOnInit


  enviar(values:any){
    console.trace('Submit formulario %o', values);

  }// enviar
}//LoginComponent
