import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator'; // Adicione esta importação

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';




@Component({
  selector: 'app-tabela-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatPaginator,
  ],
  templateUrl: './tabela-cliente.component.html',
  styleUrls: ['./tabela-cliente.component.css'], // Corrigido para 'styleUrls'
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento de estilos
})
export class TabelaClienteComponent implements OnInit {
  // Lista de clientes carregada da API
  clientes: any[] = [];

  // DataSource para a tabela
  dataSource = new MatTableDataSource<any>();

  // Referência ao MatPaginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ID do cliente que será excluído
  idParaExcluir: number | null = null;

  // Cliente selecionado para atualização
  clienteAtual: any = { id: null, nome: '', sobrenome: '' };

  // Nomes das colunas da tabela
  nomesColunas: string[] = [
    'ID Cliente',
    'Nome',
    'Sobrenome',
    'Email',
    'atualizar',
    'excluir',
  ];

  // Injeta o serviço AdminService para realizar operações relacionadas aos clientes
  constructor(private admService: AdminService, private dialog: MatDialog) {}

  /**
   * Método chamado ao abrir a modal de exclusão.
   * Define o ID do cliente a ser excluído e exibe no console.
   * @param id ID do cliente a ser excluído
   */
  abrirModalExcluir(id: number, template: any): void {
    this.idParaExcluir = id;
    this.dialog.open(template);
  }

  /**
   * Método chamado ao abrir a modal de atualização.
   * Define o cliente atual e abre o modal.
   * @param cliente Cliente a ser atualizado
   */
  abrirModalAtualizar(cliente: any, template: any): void {
    this.clienteAtual = { ...cliente };
    this.dialog.open(template);
  }

  /**
   * Método chamado ao confirmar a exclusão do cliente.
   * Realiza a exclusão do cliente chamando o serviço e atualiza a lista de clientes.
   */
  confirmarExclusao(): void {
    if (this.idParaExcluir !== null) {
      console.log('Excluindo cliente com ID:', this.idParaExcluir);

      // Chama o serviço para excluir o cliente
      this.admService.excluirCliente(this.idParaExcluir).subscribe({
        next: () => {
          console.log(
           // `Cliente com ID ${this.idParaExcluir} excluído com sucesso.`
          );
          this.carregarClientes(); // Atualiza a lista de clientes
        },
        error: (error) => {
          console.error('Erro ao excluir cliente:', error);
        },
      });

      // Reseta o ID após a exclusão
      this.idParaExcluir = null;
    }
  }

  /**
   * Método chamado ao salvar as alterações do cliente.
   * Envia os dados atualizados para o serviço.
   */
  atualizarCliente(): void {
    const { id, nome, sobrenome } = this.clienteAtual;
    if (!nome || !sobrenome) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    // Verifica se os campos obrigatórios estão preenchidos

    if (id && nome && sobrenome) {
     // console.log('Atualizando cliente:', this.clienteAtual);

      // Chama o serviço para atualizar o cliente
      this.admService.atualizarCliente(id, this.clienteAtual).subscribe({
        next: () => {
         // console.log(`Cliente com ID ${id} atualizado com sucesso.`);
          this.carregarClientes(); // Atualiza a lista de clientes
        },
        error: (error) => {
          console.error('Erro ao atualizar cliente:', error);
        },
      });
    }
  }

  /**
   * Método chamado ao inicializar o componente.
   * Carrega a lista de clientes da API.
   */
  ngOnInit(): void {
    this.carregarClientes();
  }

  ngAfterViewInit(): void {
    // Conecta o paginator ao dataSource
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Método para carregar a lista de clientes da API.
   * Atualiza a variável 'clientes' com os dados recebidos.
   */
  private carregarClientes(): void {
    this.admService.getClientes().subscribe({
      next: (data: any[]) => {
       // console.log('Clientes recebidos:', data);
        this.dataSource.data = data;
      },
      error: (error) => {
        alert('Erro ao carregar os clientes. Tente novamente mais tarde.');
        console.error('Erro ao buscar clientes:', error);
      },
      complete: () => {
       // console.log('Requisição de clientes concluída com sucesso.');
      },
    });
  }
}
