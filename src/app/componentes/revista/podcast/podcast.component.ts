import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast',
  imports: [CommonModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {
  podcast = [
    {
      video: 'https://www.youtube.com/embed/9o4EXeyxpoM?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '02/05/2024',
      descricao: 'Gastronomia: possibilidades de carreira e tendências no mercado',
      botao: 'Assista na Integra',
    },
    {        
      video: 'https://www.youtube.com/embed/ZfOP0iSQwSM?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '18/04/2024',
      descricao: 'Liderança: habilidades e o desafio de desenvolver pessoas',
      botao: 'Assista na Integra',
    },
    {
      video: 'https://www.youtube.com/embed/oy6L5UrSWds?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '07/03/2024',
      descricao: 'Carreiras em TI: oportunidades, tendências e desafios',
      botao: 'Assista na Integra',
    },
    {
      video: 'https://www.youtube.com/embed/yuhqC6iwjc4?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '15/02/2024',
      descricao: 'E-commerce, novas tecnologias e tendências no varejo',
      botao: 'Assista na Integra',
    },
    {
      video: 'https://www.youtube.com/embed/qvf0Ha2ms_0?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '01/02/2024',
      descricao: 'Uso do LinkedIn para gestão de carreira e networking',
      botao: 'Assista na Integra',
    },
    {        
      video: 'https://www.youtube.com/embed/4zG4h3ROIcw?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '05/10/2023',
      descricao: 'Importância da formação profissional para o futuro do trabalho',
      botao: 'Assista na Integra',
    },
    {
      video: 'https://www.youtube.com/embed/U_dMn0f6WpI?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '03/08/2023',
      descricao: 'Carreiras em Design: transformando ideias em soluções',
      botao: 'Assista na Integra',
    },
    {
      video: 'https://www.youtube.com/embed/tEapgjlAbBU?list=PLrIFTXpnSDd0IvC3IuNwEP4G_dkTv3X81',
      data: '01/06/2023',
      descricao: 'Inteligência artificial, ChatGPT e o futuro das profissões',
      botao: 'Assista na Integra',
    }
  ];
  

  constructor(private sanitizer: DomSanitizer) {}

  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    // Converte link curto para formato "embed"
    const videoId = videoUrl.split('/').pop()?.split('?')[0]; 
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}

