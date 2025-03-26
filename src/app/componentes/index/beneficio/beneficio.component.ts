import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficio.component.html',
  styleUrl: './beneficio.component.css'
})
export class BeneficioComponent {
  beneficios = [
  {
    icone: 'fa-book-open',
    tituloCard: 'Artigos e Entrevistas',
    descricao: 'Artigos científicos e entrevistas com profissionais de referência no mercado'
  },
  {
    icone: 'fa-calendar-days',
    tituloCard: 'Eventos e Atividades',
    descricao: 'Fique por dentro dos próximos eventos e aulas on-line do Senac'
  },
  {
    icone: 'fa-pen',
    tituloCard: 'Dicas e Tutoriais',
    descricao: 'Aprenda com nossas dicas de estudo, tutoriais de carreira e mais...'
  }
  ];
}
