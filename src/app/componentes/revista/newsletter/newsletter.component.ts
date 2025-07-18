import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  inscrito: boolean = false;
  textoBotao: string = 'INSCREVER-SE';

  toggleInscricao() {
    this.inscrito = !this.inscrito;
    this.textoBotao = this.inscrito ? 'INSCRITO' : 'INSCREVER-SE';
  }
}
