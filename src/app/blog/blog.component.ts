import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articulos= [
    {id:'0',ruta:'../../assets/picasso_1.jpg'},
    {id:'1',ruta:'../../assets/segovia_2.jpg'},
    {id:'2',ruta:'../../assets/zamora_3.jpg'}
  ];
}
