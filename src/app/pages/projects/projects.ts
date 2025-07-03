import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [

    {
      title: '',
      description: '',
      technologies: [''],
      github: '',
      demo: ''
    },
    {
      title: '',
      description: '',
      technologies: [''],
      github: '',
      demo: ''
    },
    {
      title: '',
      description: '',
      technologies: [''],
      github: '',
      demo: '',
    },
    {
      title: '',
      description: '',
      technologies: [''],
      github: '',
      demo: ''
    }
  ];

}
