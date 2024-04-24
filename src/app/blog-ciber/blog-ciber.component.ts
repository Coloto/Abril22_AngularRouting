import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CiberService } from '../_servicio/ciber.service';
import { Ciber } from '../_modelo/ciber';

@Component({
  selector: 'app-blog-ciber',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog-ciber.component.html',
  styleUrl: './blog-ciber.component.css'
})
export class BlogCiberComponent {
  constructor(private ciberService: CiberService){}
  articulos_ciber: Ciber[]=this.ciberService.obtenerArray();
  
}
