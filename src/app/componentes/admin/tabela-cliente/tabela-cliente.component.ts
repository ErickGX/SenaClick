import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';



@Component({
  selector: 'app-tabela-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabela-cliente.component.html',
  styleUrl: './tabela-cliente.component.css',
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento de estilos (necessário apenas se houver problemas com o CSS do Bootstrap)
})
export class TabelaClienteComponent implements OnInit {
  // Lista de clientes carregada da API
  clientes: any[] = [];

  // ID do cliente que será excluído
  idParaExcluir: number | null = null;
  clienteAtual: any = { id: null, nome: '', sobrenome: '' }; // Cliente selecionado para atualização

  // Injeta o serviço AdminService para realizar operações relacionadas aos clientes
  constructor(private admService: AdminService) {}

  /**
   * Método chamado ao abrir a modal de exclusão.
   * Define o ID do cliente a ser excluído e exibe no console.
   * @param id ID do cliente a ser excluído
   */
  abrirModalExcluir(id: number): void {
    this.idParaExcluir = id;
    console.log('Abrindo modal de exclusão para ID:', id);
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
            `Cliente com ID ${this.idParaExcluir} excluído com sucesso.`
          );
          // Atualiza a lista de clientes após a exclusão
          this.carregarClientes();
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
   * Método chamado ao abrir a modal de atualização.
   * Define o cliente selecionado para edição.
   * @param cliente Objeto do cliente a ser atualizado
   */
  abrirModalAtualizar(cliente: any): void {
    this.clienteAtual = { ...cliente }; // Faz uma cópia do cliente selecionado
    console.log(
      'Abrindo modal de atualização para cliente:',
      this.clienteAtual
    );
  }

  /**
   * Método chamado ao salvar as alterações do cliente.
   * Envia os dados atualizados para o serviço.
   */
  atualizarCliente(): void {
    const { id, nome, sobrenome } = this.clienteAtual;

    if (id && nome && sobrenome) {
      console.log('Atualizando cliente:', this.clienteAtual);

      // Chama o serviço para atualizar o cliente
      this.admService.atualizarCliente(id, this.clienteAtual).subscribe({
        next: () => {
          console.log(`Cliente com ID ${id} atualizado com sucesso.`);
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

  /**
   * Método para carregar a lista de clientes da API.
   * Atualiza a variável 'clientes' com os dados recebidos.
   */
  private carregarClientes(): void {
    this.admService.getClientes().subscribe({
      next: (data: any[]) => {
        console.log('Clientes recebidos:', data);
        this.clientes = data;
      },
      error: (error) => {
        console.error('Erro ao buscar clientes:', error);
      },
      complete: () => {
        console.log('Requisição de clientes concluída com sucesso.');
      },
    });
  }
}
