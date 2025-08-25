import { Component, Sanitizer, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects: any[] = [];

  constructor(private sanitizer: Sanitizer) {
    this.projects = [
      {
        title: 'TIENDA DE JOYAS ENCANTO AMATISTA',
        description: this.sanitizer.sanitize(SecurityContext.HTML, 'Este proyecto consiste en el desarrollo de una página web para una tienda en línea de joyas y accesorios, diseñada con WordPress y optimizada para brindar una experiencia de compra sencilla, elegante y segura. Puedes visitar el sitio en <a href="https://encantoamatista.com" target="_blank">encantoamatista.com</a>'),
        technologies: ['WORDPRESS', 'DIVI', 'CSS'],
        demoImages: [
          'assets/img/amatista1.png',
          'assets/img/amatista2.png',
          'assets/img/amatista3.png'
        ]
      },
      {
        title: 'TIENDA DE ROPA ARTESANAL ONLINE-AYAHUASCA',
        description: this.sanitizer.sanitize(SecurityContext.HTML, 'Este proyecto consiste en el desarrollo de una página web para una tienda en línea de ropa artesanal, diseñada con WordPress y optimizada para brindar una experiencia de compra sencilla, elegante y segura. Puedes visitar el sitio en <a href="https://ayahuascamodasostenible.com/" target="_blank">ayahuascamodasostenible.com</a>'),
        technologies: ['WORDPRESS', 'DIVI', 'CSS'],
        demoImages: [
          'assets/img/ayahuasca1.png',
          'assets/img/ayahuasca2.png',
          'assets/img/ayahuasca3.png'
        ]
      },
      {
        title: 'CLUB DE ENSEÑANZA DE BUCEO',
        description: this.sanitizer.sanitize(SecurityContext.HTML, 'Este proyecto consiste en el desarrollo de una página web para un club de enseñanza de buceo, diseñada con WordPress y optimizada para brindar una experiencia de usuario sencilla y atractiva. Puedes visitar el sitio en <a href="https://bluelifedive.com/" target="_blank">bluelifedive.com</a>'),
        technologies: ['WORDPRESS', 'DIVI', 'CSS'],
        demoImages: [
          'assets/img/buceo1.png',
          'assets/img/buceo2.png',
          'assets/img/buceo3.png'
        ]
      },
      {
        title: 'ADMINISTRADOR DE TURNOS CONSULTORIO MEDICO',
        description: 'Software para gestión de turnos de consultorio médico, con integración de API Zoho y Birdeye, para el registro y control de pacientes de la clínica.',
        technologies: ['Laravel', 'MySQL', 'PHP'],
        demoImages: [
          'assets/img/monitor.png',
          'assets/img/token.png'
        ]
      },
      {
        title: 'CARRITO DE COMPRAS-PROYECTO PERSONAL',
        description: 'Carrito de compras para adaptar a diferentes tipos de productos.',
        technologies: ['REACT', 'TYPESCRIPT', 'CSS'],
        demoImages: [
          'assets/img/prueba1.png',
        ]
      },
      {
        title: 'INTEGRACION API ZOHO Y BIRDEYE',
        description: 'Integración de API Zoho y Birdeye para la gestión de datos de clientes.',
        technologies: ['LARAVEL', 'PHP', 'API'],
      },
      {
        title: 'SOFTWARE DE REFORZAMIENTO ESCOLAR-PROYECTO EN DESARROLLO',
        description: 'Software de reforzamiento lecto-escritor para niños con síndrome de Down.',
        technologies: ['LARAVEL', 'PHP', 'ANGULAR'],
      },
      {
        title: 'PORTAFOLIO PERSONAL',
        description: 'Portafolio personal.',
        technologies: ['LARAVEL', 'ANGULAR'],
        demoImages: [
          'assets/img/portafolio1.png',
          'assets/img/portafolio2.png',
          'assets/img/portafolio3.png',
          'assets/img/portafolio4.png'
        ]
      },
    ];
  }
}
