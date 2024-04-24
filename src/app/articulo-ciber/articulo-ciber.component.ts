import { Component, Input, SimpleChanges } from '@angular/core';
import { Ciber } from '../_modelo/ciber';
import { CiberService } from '../_servicio/ciber.service';

@Component({
  selector: 'app-articulo-ciber',
  standalone: true,
  imports: [],
  templateUrl: './articulo-ciber.component.html',
  styleUrl: './articulo-ciber.component.css'
})
export class ArticuloCiberComponent {

  articulos_ciber: Ciber[]=[];

  constructor(private ciberService: CiberService){}

  @Input()
  id:number = 0;
  
  titulo:string = '';
  contenido:string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    this.articulos_ciber = this.ciberService.obtenerArray();
    this.titulo = this.articulos_ciber[changes['id'].currentValue].titulo;
    this.contenido = this.articulos_ciber[changes['id'].currentValue].contenido;
  }
}
