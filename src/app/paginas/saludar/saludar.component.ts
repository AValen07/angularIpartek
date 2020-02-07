import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {


  nombre:string;
  constructor(private route:ActivatedRoute) { 
    console.trace("SaludarComponent constructor");
    this.nombre='';
    this.route.params.subscribe(params=>{ 
      console.trace(params);
      return this.nombre=params['pNombre'];
    });
  }//constructor

  ngOnInit() {
    console.trace("SaludarComponent ngOnInit");

  }//ngOnInit

}//SaludarComponent
