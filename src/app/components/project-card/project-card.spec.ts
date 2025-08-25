import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],  // Asegúrate de incluir CommonModule
      declarations: [ProjectCard]  // Declarar el componente a probar
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;

    // Asignar un valor simulado al Input "project"
    component.project = {
      title: 'Test Project',
      description: 'Este proyecto tiene un <a href="https://example.com" target="_blank">enlace</a> en la descripción.',
      technologies: ['Angular', 'TypeScript'],
      github: 'https://github.com/test',
      demo: 'https://demo.com',
      demoImages: ['image1.png', 'image2.png']
    };

    fixture.detectChanges();  // Detectar cambios para que se apliquen los valores
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verificar que el componente se haya creado correctamente
  });

  it('should render project title', () => {
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Test Project');  // Verificar que el título del proyecto se renderice correctamente
  });

  it('should render the link in description', () => {
    const description = fixture.nativeElement.querySelector('p');
    expect(description.innerHTML).toContain('<a href="https://example.com" target="_blank">enlace</a>');  // Verificar que el enlace en la descripción sea correcto
  });
});
