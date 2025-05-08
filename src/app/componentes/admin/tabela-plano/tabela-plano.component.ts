import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin/admin.service';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabela-plano-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatTableModule],
  templateUrl: './tabela-plano.component.html',
  styleUrl: './tabela-plano.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TabelaPlanoComponent implements OnInit {
dataSource: any;
  constructor(private adminService: AdminService) {}

  planoscrud: any[] = []; // Certifique-se de que a propriedade está declarada
  nomesColunas: string[] = ['id', 'titulo', 'preco', 'artigo', 'noticia'];

  ngOnInit(): void {
    this.adminService.getPlanosCrud().subscribe({
      next: (data: any[]) => {
        //console.log('Dados recebidos:', data);

        this.planoscrud = data;
      },

      // `error` é chamado se houver algum erro na requisição (exemplo: erro 404 ou problema no servidor)
      error: (error) => {
        alert("Erro ao carregar os planos. Tente novamente mais tarde.");
        console.error('Erro ao buscar planos:', error);
      },

      // `complete` é chamado quando o Observable finaliza, útil para executar ações após a requisição ser concluída
      complete: () => {
       // console.log('Requisição concluída com sucesso.');
      },
    });
  }
}
