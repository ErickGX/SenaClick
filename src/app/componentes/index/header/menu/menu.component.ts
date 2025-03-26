import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports:[RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  irParaCursos() {
    const cursosSection = document.querySelector('#curso');
    if (cursosSection) {
      cursosSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  irParaPlanos() {
    const planos = document.querySelector('#plano');
    if (planos) {
      planos.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
