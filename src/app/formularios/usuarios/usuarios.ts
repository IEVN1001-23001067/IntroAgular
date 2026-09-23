import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-usuarios',
  standalone: false,
  styleUrl: './usuarios.css',
  templateUrl: './usuarios.html',
})
export class Usuarios {

  bienUsu: string = "admin";
  bienContra: string = "12345";


  usuario: string = "";
  contra: string = "";

  mensaje: string = "";

  Acceso(): void {
    if (this.usuario !== this.bienUsu) {
      this.mensaje = "Usuario no encontrado.";
    } else if (this.contra !== this.bienContra) {
      this.mensaje = "La contraseña no es correcta.";
    } else {
      this.mensaje = `Hola, muy bien :), ${this.bienUsu}.`;
    }
  }
}

