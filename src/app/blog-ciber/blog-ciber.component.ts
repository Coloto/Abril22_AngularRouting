import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-ciber',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog-ciber.component.html',
  styleUrl: './blog-ciber.component.css'
})
export class BlogCiberComponent {
  articulos=[
    {id:'0', titulo:'Hacking ético', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.'},
    {id:'1', titulo:'Legislacion de Seguridad en europa', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.'},
    {id:'2', titulo:'¿Como evitar que te hackeen la cuenta?', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.'},
    {id:'3', titulo:'¿Qué es phising?', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.'}
  ]

  
}
