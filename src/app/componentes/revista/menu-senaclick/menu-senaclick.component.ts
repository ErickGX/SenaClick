import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-senaclick',
  imports: [],
  templateUrl: './menu-senaclick.component.html',
  styleUrl: './menu-senaclick.component.css'
})
export class MenuSenaclickComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
