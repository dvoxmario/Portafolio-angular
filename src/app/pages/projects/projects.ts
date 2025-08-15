import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';


@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {

  projects = [
  {
    title: 'ADMINISTRADOR DE TURNOS CONSULTORIO MEDICO',
    description: 'Software para gestión de turnos de consultorio médico, con integración de API Zoho y Birdeye,para el registro y control de pacientes de la clinica.',
    technologies: ['Laravel', 'MySQL', 'PHP'],
    demoImages: [
      'assets/img/monitor.png',
      'assets/img/token.png'
    ]
  },
  {
    title: 'PAGINA DE COTIZACIONES DE TRABAJOS DE OBRA CIVIL',
    description: 'pagina web en WordPress para la gestión de cotizaciones de trabajos de obra civil.',
    technologies: ['WORDPRESS', 'ELEMENTOR', 'CSS'],
    demoImages: [
      'assets/img/pagina1.png',
      'assets/img/pagina2.png',
      'assets/img/pagina3.png'
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
    description: 'software de reforzamiento lecto-escritor para niños con sindrome de down.',
    technologies: ['LARAVEL', 'PHP', 'ANGULAR'],

  },
  {
    title: 'PORTAFOLIO PERSONAL',
    description: 'portafolio personal.',
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