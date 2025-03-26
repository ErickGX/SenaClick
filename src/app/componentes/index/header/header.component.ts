import { Component } from '@angular/core';
import { BuscadorComponent } from "./buscador/buscador.component";
import { RedesocialComponent } from "./redesocial/redesocial.component";
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-header',
  imports: [BuscadorComponent, MenuComponent, LoginComponent, RedesocialComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
