import { Component } from '@angular/core';
import { BuscadorComponent } from "../index/header/buscador/buscador.component";
import { HeaderSenaclickComponent } from "../revista/header-senaclick/header-senaclick.component";
import { MenuComponent } from "../index/header/menu/menu.component";
import { FooterComponent } from "../index/rodape/footer/footer.component";
import { CopyrightComponent } from "../index/rodape/copyright/copyright.component";
import { FormAdminComponent } from "./form-admin/form-admin.component";
import { TabelaClienteComponent } from './tabela-cliente/tabela-cliente.component';

@Component({
  selector: 'app-admin',
  imports: [BuscadorComponent, HeaderSenaclickComponent, MenuComponent, FooterComponent, CopyrightComponent, FormAdminComponent, ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
