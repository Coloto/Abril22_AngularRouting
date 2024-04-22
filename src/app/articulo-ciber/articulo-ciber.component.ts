import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-articulo-ciber',
  standalone: true,
  imports: [],
  templateUrl: './articulo-ciber.component.html',
  styleUrl: './articulo-ciber.component.css'
})
export class ArticuloCiberComponent {
  articulos_blog = [
    {titulo:'Hacking ético', contenido:'El hacking ético es el uso legal y legítimo de habilidades técnicas para identificar vulnerabilidades en sistemas informáticos, redes o aplicaciones. A diferencia de los hackers maliciosos, los hackers éticos operan dentro de los límites legales y con el consentimiento explícito del propietario del sistema que están evaluando. Su objetivo principal es mejorar la seguridad de un sistema identificando y resolviendo vulnerabilidades antes de que sean explotadas por personas malintencionadas.'},
    {titulo:'Legislacion de Seguridad en europa', contenido:'La legislación de seguridad en Europa abarca una serie de regulaciones y directivas destinadas a proteger la información personal y garantizar la seguridad cibernética en la región. Algunas de las regulaciones más importantes incluyen:'},
    {titulo:'¿Como evitar que te hackeen la cuenta?', contenido:'Evitar que te hackeen la cuenta implica tomar una serie de medidas de seguridad tanto en línea como fuera de línea. Aquí tienes algunas prácticas recomendadas:'},
    {titulo:'¿Qué es phising?', contenido:'El phishing es una técnica utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial, como nombres de usuario, contraseñas, números de tarjetas de crédito y otra información personal. Los estafadores suelen hacerse pasar por entidades de confianza, como instituciones financieras, empresas, organizaciones gubernamentales o servicios en línea populares, y envían correos electrónicos, mensajes de texto o mensajes instantáneos falsificados que parecen legítimos.'}
  ]

  @Input()
  id:number = 0;
  
  titulo:string = '';
  contenido:string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    this.titulo = this.articulos_blog[changes['id'].currentValue].titulo;
    this.contenido = this.articulos_blog[changes['id'].currentValue].contenido;
  }
}
