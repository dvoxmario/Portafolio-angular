import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']  // Corrige aquí a styleUrls
})
export class Footer {
  year = new Date().getFullYear();  // Año actual
}
