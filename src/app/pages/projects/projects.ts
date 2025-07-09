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
      title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },
    {
       title: 'Gestor de Tareas',
      description: 'CRUD con autenticación y Firebase.',
      technologies: ['Angular', 'Firebase', 'Tailwind'],
      github: 'https://github.com/usuario/gestor-tareas',
      demo: 'https://gestor-tareas.netlify.app'
    },

  ];

}
