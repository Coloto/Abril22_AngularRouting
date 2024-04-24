import { Injectable } from '@angular/core';
import { Inmueble } from '../_modelo/inmueble';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  inmuebles:Inmueble[] = [
    {id:'0',ruta:'../../assets/picasso_1.jpg', nombre: 'Modelo Picasso', desc:'El modelo Picasso, inspirado en el famoso pintor, es una casa prefabricada de hormigón muy llamativa que se encuentra disponible en tres versiones a partir de 138.300 euros. Esta vivienda de Modular Home tiene una superficie total de 218 m2 distribuidos en dos plantas. Cuenta con cuatro dormitorios y tres baños, lo que la hace ideal para familias o personas que desean un gran espacio habitable.'},
    {id:'1',ruta:'../../assets/segovia_2.jpg', nombre: 'Modelo Segovia', desc:'Esta casa prefabricada construida por inHAUS cuenta con una superficie de 260 m2, dos plantas, cinco habitaciones y tres baños. Destaca su diseño minimalista de influencia oriental y sus grandes ventanales. Precio a consultar.'},
    {id:'2',ruta:'../../assets/zamora_3.jpg', nombre: 'Modelo Zamora', desc:'Para aquellos que busquen una casa prefabricada de hormigón de una sola planta, pero amplia y espaciosa, el modelo Zamora de inHAUS es una opción a considerar. Cuenta con nada más y nada menos que una superficie de 377 m2, cuatro habitaciones y cinco baños. El precio depende del proyecto.'}
  ]

  constructor() {}

  public obtenerArray(): Inmueble[] {
    return this.inmuebles;
  }
}
