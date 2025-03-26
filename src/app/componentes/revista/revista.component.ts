import { Component } from '@angular/core';
import { HeaderSenaclickComponent } from './header-senaclick/header-senaclick.component';
import { BuscadorComponent } from "../index/header/buscador/buscador.component";

@Component({
  selector: 'app-revista',
  imports: [BuscadorComponent, HeaderSenaclickComponent],
  templateUrl: './revista.component.html',
  styleUrl: './revista.component.css'
})
export class RevistaComponent {
  ngOnInit():void{
    setTimeout(() => {
      document.body.scrollTop = 0; // navegador antigo
      document.documentElement.scrollTop = 0; // navegador moderno
    }, 100);
  }
}
