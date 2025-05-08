import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';
import { TabelaClienteComponent } from '../tabela-cliente/tabela-cliente.component';
import { RouterModule, Router } from '@angular/router';
import { TabelaPlanoComponent } from "../tabela-plano/tabela-plano.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Importação necessária
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TabelaClienteComponent,
    TabelaPlanoComponent,
    MatTableModule,
    MatPaginatorModule, // Adicione o módulo aqui
  ],
  templateUrl: './form-admin.component.html',
  styleUrl: './form-admin.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento de estilos (necessário apenas se houver problemas com o CSS do Bootstrap)
})
export class FormAdminComponent implements OnInit, AfterViewInit {
  filtro: string = '';

  constructor(private admService: AdminService) {}

  // DataSource para a tabela de assinaturas
  dataSourceAssinaturas = new MatTableDataSource<any>();

  // Referência ao MatPaginator
  @ViewChild(MatPaginator) paginatorAssinaturas!: MatPaginator;

  // Nomes das colunas da tabela de assinaturas
  nomesColunasAssinaturas: string[] = [
    'ID Assinatura',
    'Nome',
    'Titulo',
    'Pagamento',
    'Preço',
    'Data da Assinatura',
  ];

  // Variável para controlar qual tabela exibir
  exibirTabela: 'assinaturas' | 'clientes' | 'planos' = 'assinaturas'; // padrão

  ngOnInit(): void {
    this.carregarAssinaturas();
  }

  ngAfterViewInit(): void {
    // Apenas verifica se o paginator foi inicializado
    if (this.paginatorAssinaturas) {
      this.dataSourceAssinaturas.paginator = this.paginatorAssinaturas;
    }
  }

  carregarAssinaturas(): void {
    this.admService.getAssinaturas().subscribe({
      next: (data: any[]) => {
        console.log('Assinaturas recebidas:', data);
        this.dataSourceAssinaturas.data = data; // Atualiza o dataSource com os dados recebidos

        // Reconecta o paginator ao dataSource
        if (this.paginatorAssinaturas) {
          this.dataSourceAssinaturas.paginator = this.paginatorAssinaturas;
        }
      },
      error: (error) => {
        alert('Erro ao carregar as assinaturas. Tente novamente mais tarde.');
        console.error('Erro ao buscar assinaturas:', error);
      },
    });
  }

  mostrarTabela(tabela: 'assinaturas' | 'clientes' | 'planos'): void {
    this.exibirTabela = tabela;

   // Quando a tabela de assinaturas for exibida, recarregue os dados e conecte o paginator
  if (tabela === 'assinaturas') {
    setTimeout(() => {
      this.carregarAssinaturas();
    });
  }
}
}
