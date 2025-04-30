import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';
import { TabelaClienteComponent } from '../tabela-cliente/tabela-cliente.component';
import { RouterModule, Router } from '@angular/router';
import { TabelaPlanoComponent } from "../tabela-plano/tabela-plano.component";

@Component({
  selector: 'app-form-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TabelaClienteComponent,
    TabelaPlanoComponent,
  ],
  templateUrl: './form-admin.component.html',
  styleUrl: './form-admin.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento de estilos (necessário apenas se houver problemas com o CSS do Bootstrap)
})
export class FormAdminComponent implements OnInit {
  filtro: string = '';

  constructor(private admService: AdminService) {}

  assinaturas: any[] = []; // Variável que armazenará os dados da API

  exibirTabela: 'assinaturas' | 'clientes' | 'planos' = 'assinaturas'; // padrão

  mostrarTabela(tabela: 'assinaturas' | 'clientes' | 'planos') {
    this.exibirTabela = tabela;
  }
  // usuarios = [
  //   {
  //     nome: 'Vagner',
  //     sobrenome: 'Beraldo',
  //     email: 'vagner@gmail.com',
  //     plano: 'Premium',
  //   },
  //   {
  //     nome: 'Guilherme',
  //     sobrenome: 'Kishida',
  //     email: 'guilherme@gmail.com',
  //     plano: 'Básico',
  //   },
  //   {
  //     nome: 'Daiane',
  //     sobrenome: 'Raso',
  //     email: 'raso@gmail.com',
  //     plano: 'Estudante',
  //   },
  //   { nome: 'Erik', sobrenome: 'GX', email: 'gx@gmail.com', plano: 'Premium' },
  //   {
  //     nome: 'Davi',
  //     sobrenome: 'Roque',
  //     email: 'roqueiro@gmail.com',
  //     plano: 'Básico',
  //   },
  // ];

  ngOnInit() {
    this.admService.getAssinaturas().subscribe({
      // `next` é chamado quando a requisição retorna com sucesso e recebe os dados da API
      next: (data: any[]) => {
        //console.log('Dados recebidos:', data);

        this.assinaturas = data;
      },

      // `error` é chamado se houver algum erro na requisição (exemplo: erro 404 ou problema no servidor)
      error: (error) => {
        alert("Erro ao carregar os planos. Tente novamente mais tarde.");
        console.error('Erro ao buscar planos:', error);
      },

      // `complete` é chamado quando o Observable finaliza, útil para executar ações após a requisição ser concluída
      complete: () => {
        console.log('Requisição concluída com sucesso.');
      },
    });
  }
}
