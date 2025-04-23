import { Component } from '@angular/core';
import { HeaderSenaclickComponent } from './header-senaclick/header-senaclick.component';
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { PodcastComponent } from "./podcast/podcast.component";
import { ArtigosComponent } from "./artigos/artigos.component";
import { MenuSenaclickComponent } from "./menu-senaclick/menu-senaclick.component";
import { BuscadorComponent } from "../index/header/buscador/buscador.component";
import { CopyrightComponent } from "../index/rodape/copyright/copyright.component";
import { FooterRevistaComponent } from "./rodape/footer-revista/footer-revista.component";

@Component({
  selector: 'app-revista',
  imports: [BuscadorComponent, HeaderSenaclickComponent, NewsletterComponent, PodcastComponent, ArtigosComponent, MenuSenaclickComponent, CopyrightComponent, FooterRevistaComponent],
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
