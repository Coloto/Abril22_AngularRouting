import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnChanges{
  descripciones = [
    {nombre: 'Modelo Picasso', desc:'El modelo Picasso, inspirado en el famoso pintor, es una casa prefabricada de hormigón muy llamativa que se encuentra disponible en tres versiones a partir de 138.300 euros. Esta vivienda de Modular Home tiene una superficie total de 218 m2 distribuidos en dos plantas. Cuenta con cuatro dormitorios y tres baños, lo que la hace ideal para familias o personas que desean un gran espacio habitable.'},
    {nombre: 'Modelo Segovia', desc:'Esta casa prefabricada construida por inHAUS cuenta con una superficie de 260 m2, dos plantas, cinco habitaciones y tres baños. Destaca su diseño minimalista de influencia oriental y sus grandes ventanales. Precio a consultar.'},
    {nombre: 'Modelo Zamora', desc:'Para aquellos que busquen una casa prefabricada de hormigón de una sola planta, pero amplia y espaciosa, el modelo Zamora de inHAUS es una opción a considerar. Cuenta con nada más y nada menos que una superficie de 377 m2, cuatro habitaciones y cinco baños. El precio depende del proyecto.'}
  ]

  @Input()
  id:number = 0;
  
  descipcion:string = '';
  titulo:string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    this.descipcion = this.descripciones[changes['id'].currentValue].desc;
    this.titulo = this.descripciones[changes['id'].currentValue].nombre;
  }  
}
