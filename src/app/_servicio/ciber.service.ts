import { Injectable } from '@angular/core';
import { Ciber } from '../_modelo/ciber';

@Injectable({
  providedIn: 'root'
})
export class CiberService {

  articulos_ciber:Ciber[] = [
    {id:'0', titulo:'Hacking ético', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.',contenido:'El hacking ético es el uso legal y legítimo de habilidades técnicas para identificar vulnerabilidades en sistemas informáticos, redes o aplicaciones. A diferencia de los hackers maliciosos, los hackers éticos operan dentro de los límites legales y con el consentimiento explícito del propietario del sistema que están evaluando. Su objetivo principal es mejorar la seguridad de un sistema identificando y resolviendo vulnerabilidades antes de que sean explotadas por personas malintencionadas.'},
    {id:'1', titulo:'Legislacion de Seguridad en europa', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.',contenido:'La legislación de seguridad en Europa abarca una serie de regulaciones y directivas destinadas a proteger la información personal y garantizar la seguridad cibernética en la región. Algunas de las regulaciones más importantes incluyen:'},
    {id:'2', titulo:'¿Como evitar que te hackeen la cuenta?', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.',contenido:'Evitar que te hackeen la cuenta implica tomar una serie de medidas de seguridad tanto en línea como fuera de línea. Aquí tienes algunas prácticas recomendadas:'},
    {id:'3', titulo:'¿Qué es phising?', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt sed deleniti inventore suscipit reiciendis id vero debitis. Provident repudiandae odio, veniam maxime cum modi nihil qui incidunt harum autem.',contenido:'El phishing es una técnica utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial, como nombres de usuario, contraseñas, números de tarjetas de crédito y otra información personal. Los estafadores suelen hacerse pasar por entidades de confianza, como instituciones financieras, empresas, organizaciones gubernamentales o servicios en línea populares, y envían correos electrónicos, mensajes de texto o mensajes instantáneos falsificados que parecen legítimos.'}
  ]

  constructor() {}

  public obtenerArray(): Ciber[] {
    return this.articulos_ciber;
  }
}
