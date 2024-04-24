import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inmueble } from '../_modelo/inmueble';
import { InmuebleService } from '../_servicio/inmueble.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private inmuebleService: InmuebleService){}
  inmuebles: Inmueble[]=this.inmuebleService.obtenerArray();
}
