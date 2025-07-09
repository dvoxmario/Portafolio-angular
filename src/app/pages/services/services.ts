import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class Services {

 services = [
  {
    title: 'Desarrollo Web',
    icon: 'fa-code',
    items: ['Administrables', 'Sitios web personalizados', 'Hosting']
  },
  {
    title: 'Estructuramiento Base de Datos',
    icon: 'fa-database',
    items: ['Entidad Relación', 'Diagrama de caso de uso', 'Análisis Rápido']
  },
  {
    title: 'Servidores',
    icon: 'fa-network-wired',
    items: ['Microservicios', '', '']
  },
  {
    title: 'Diseño Gráfico',
    icon: 'fa-pen-nib',
    items: ['Diseño del paquete', 'Firma de email', 'Banner redes sociales']
  },
  {
    title: 'Cyber Security',
    icon: 'fa-shield-alt',
    items: ['Hacking Ético', 'Análisis de seguridad', 'Eliminación de malwares']
  },
  {
    title: 'Web Back-End',
    icon: 'fa-server',
    items: ['Blades', 'API', 'Laravel']
  }
];
scrollToContact() {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

}