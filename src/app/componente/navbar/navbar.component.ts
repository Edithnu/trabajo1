import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  título: string;
  imagen: string;
  constructor(){
    this.título = "INCUYO";
    this.imagen = "https://images.app.goo.gl/LoEgmFBhaArd7gLF9"

  }

}
