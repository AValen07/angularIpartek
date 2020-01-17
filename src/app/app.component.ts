import { Component } from '@angular/core';
// Componente principal que se carga al arrancar la app

/**
 * selector: Nombre de la etiqueta para inyectar componente en HTML
 * templateUrl: Vista del HTML
 * styleUrls: Estilos para la vista en formato scss
 */
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variable
   title = 'angular App';
   subtitle = 'wellcome to hell';
   productos = [{
		"id": 34,
		"nombre": "cafe",
		"gluten": false,
    "precio": 1.46,
    "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
		"categoria": {
			"id": 1,
			"nombre": "bebidas"
		},
		"historico": [{
			"fecha": "17/01/2020",
			"precio": 1.45
		}, {
			"fecha": "01/12/2019",
			"precio": 1.40
		}, {
			"fecha": "25/11/2019",
			"precio": 1.20
		}]

	},
	{
		"id": 25,
		"nombre": "leche",
		"gluten": false,
    	"precio": 2.50,
    	"imagen": "https://elcanterodeletur.com/nueva/wp-content/uploads/2018/06/leche-1L-vaca-entera.jpg",
		"categoria": {
			"id": 1,
			"nombre": "bebidas"
		},
		"historico": [{
			"fecha": "17/01/2020",
			"precio": 1.45
		}, {
			"fecha": "01/12/2019",
			"precio": 1.40
		}, {
			"fecha": "25/11/2019",
			"precio": 1.20
		}]
	},
	{
		"id": 13,
		"nombre": "galletas",
		"gluten": true,
    	"precio": 1.00,
    	"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpGTE3M-yv2QQk8dIj3Dc2qh_AKe5t2r0tMDbhvG3oiiqJ3NXIw&s",
		"categoria": {
			"id": 2,
			"nombre": "dulces"
		},
		"historico": [{
			"fecha": "17/01/2020",
			"precio": 1.00
		}, {
			"fecha": "01/12/2019",
			"precio": 1.50
		}, {
			"fecha": "25/11/2019",
			"precio": 1.60
		}]
	}
];
pSeleccionado=this.productos[0];


seleccionarProducto =  function(producto){
  console.debug('hemos hecho click %o', producto);
  this.pSeleccionado=producto;
}
}
