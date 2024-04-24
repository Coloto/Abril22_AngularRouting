import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnChanges{

  inmuebles: Inmueble[]=[];

  constructor(private inmuebleService: InmuebleService){}

  @Input()
  id:number = 0;
  
  descipcion:string = '';
  titulo:string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    this.inmuebles = this.inmuebleService.obtenerArray();
    this.descipcion = this.inmuebles[changes['id'].currentValue].desc;
    this.titulo = this.inmuebles[changes['id'].currentValue].nombre;
  }  
}
