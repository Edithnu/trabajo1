import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  título: string;
  imagen: string;
  textEvent: string;
t: any;
  cambiarTexto(): void{
    this.textEvent = "Nombre de User"
  }
  constructor() {
    this.título = "INCUYO";
    this.imagen = "https://images.app.goo.gl/LoEgmFBhaArd7gLF9"
    this.textEvent = "User"

  }
  
}
