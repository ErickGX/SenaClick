import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importe ActivatedRoute para capturar parâmetros da URL
import { MenuComponent } from "../index/header/menu/menu.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { FooterComponent } from "../index/rodape/footer/footer.component";
import { CopyrightComponent } from "../index/rodape/copyright/copyright.component";
import { RouterModule } from '@angular/router';
import { HeaderSenaclickComponent } from '../revista/header-senaclick/header-senaclick.component';
import { BuscadorComponent } from "../index/header/buscador/buscador.component";

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule, MenuComponent, FormularioComponent, FooterComponent, CopyrightComponent, HeaderSenaclickComponent, BuscadorComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] 
})
export class CadastroComponent implements OnInit {
  planoSelecionado: string = '';  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o parâmetro 'plano' da URL
    this.route.queryParams.subscribe(params => {
      this.planoSelecionado = params['plano'] || '';  // Atribui o valor de 'plano', ou uma string vazia
    });
  }
}
