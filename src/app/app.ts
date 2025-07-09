import { Component, OnInit } from '@angular/core';
import {Header} from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { AOSinitService } from './core/services/aos-init.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  constructor(private aos: AOSinitService) {}

  ngOnInit(): void {
      this.aos.init()

      document.body.setAttribute('data-theme', 'light');
      
  }
  
  protected title = 'portafolio-angular';
}
