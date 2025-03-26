import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";
import { BeneficioComponent } from "./beneficio/beneficio.component";
import { CursosComponent } from "./cursos/cursos.component";
import { PlanosComponent } from "./planos/planos.component";
import { FooterComponent } from './rodape/footer/footer.component'; 
import { CopyrightComponent } from './rodape/copyright/copyright.component';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, ApresentacaoComponent, BeneficioComponent, CursosComponent, PlanosComponent, FooterComponent, CopyrightComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
