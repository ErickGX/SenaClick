import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-tabela-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabela-cliente.component.html',
  styleUrl: './tabela-cliente.component.css',
})
export class TabelaClienteComponent implements OnInit {
  constructor(private admService: AdminService) {}



  clientes: any[] = []; // Variável que armazenará os dados da API

  ngOnInit() {
    this.admService.getAssinaturas().subscribe({
      // `next` é chamado quando a requisição retorna com sucesso e recebe os dados da API
      next: (data: any[]) => {
        //console.log('Dados recebidos:', data);

        this.clientes = data;
      },

      // `error` é chamado se houver algum erro na requisição (exemplo: erro 404 ou problema no servidor)
      error: (error) => {
        console.error('Erro ao buscar planos:', error);
      },

      // `complete` é chamado quando o Observable finaliza, útil para executar ações após a requisição ser concluída
      complete: () => {
        console.log('Requisição concluída com sucesso.');
      },
    });
  }
}
