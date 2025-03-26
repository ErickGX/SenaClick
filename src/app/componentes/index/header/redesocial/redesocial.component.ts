import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-redesocial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redesocial.component.html',
  styleUrl: './redesocial.component.css'
})
export class RedesocialComponent {
  abrirForm = false;

  exibirForm() {
    this.abrirForm = true;
  }

  fecharForm() {
    this.abrirForm = false;
  }
}
