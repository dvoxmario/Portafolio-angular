import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  name = '';
  email = '';
  message = '';

  constructor(private http: HttpClient) {} // esto se usa para hacer peticiones

  onSubmit() {
    if (this.name && this.email && this.message) {

     const data = { 
        
        name: this.name,
        email: this.email,
        message: this.message
        
      };

      this.http.post('https://api.maripchaverra.com/api/send-email', data).subscribe({
        next: (res) => {
          console.log('Respuesta de Laravel:', res);
          alert('Mensaje enviado correctamente');
          this.name = '';
          this.email = '';
          this.message = '';
        },
        error: (err) => {
          console.error('Error al enviar:', err);
          alert('Hubo un error al enviar el mensaje');
        }
      });

      
    }else {
      alert('Porfavor completa todos los campos');
    }
  }
}


