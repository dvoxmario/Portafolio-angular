import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  name = '';
  email = '';
  message = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      console.log('Formulario enviado:', {
        
        name: this.name,
        email: this.email,
        message: this.message
      });
      alert('Mensaje enviado correctamente');
      this.name = '';
      this.email = '';
      this.message = '';
    }else {
      alert('Porfavor completa todos los campos');
    }
  }
}


