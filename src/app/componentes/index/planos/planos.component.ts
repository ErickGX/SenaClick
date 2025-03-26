  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule, Router } from '@angular/router';
  import { PlanoService } from '../../../services/plano/plano.service';

  @Component({
    selector: 'app-planos',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './planos.component.html',
    styleUrls: ['./planos.component.css'],
  })
  export class PlanosComponent implements OnInit {
    formatarPreco(valor: number): string {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valor);
    }

    planos: any[] = []; // Variável que armazenará os dados da API

    constructor(private planoService: PlanoService, private router: Router) {}

    ngOnInit(): void {
      this.planoService.getPlanos().subscribe({
        // `next` é chamado quando a requisição retorna com sucesso e recebe os dados da API
        next: (data: any[]) => {
          //console.log('Dados recebidos:', data);

          this.planos = data;
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

    //antigo array que gerava os componentes , agora os dados irao vir da api
    // planos = [
    // {
    //   titulo: 'Básico',
    //   preco: 0,
    //   artigo: 'Acesso a artigos selecionados',
    //   noticia: 'Notícias e novidade sobre o Senac',
    //   edicao: 'Edições limitada da revista',
    //   textoBotao: 'Selecionar',
    //   classe: 'planoBasico',
    // },
    // {
    //   titulo: 'Estudante',
    //   preco: 9.9,
    //   artigo: 'somente últimos 6 meses',
    //   noticia: 'Conteúdo exclusivo para alunos',
    //   edicao: 'Desconto em eventos',
    //   textoBotao: 'Selecionar',
    //   classe: 'planoEstudante',
    // },
    // {
    //   titulo: 'Premium',
    //   preco: 19.9,
    //   artigo: 'Acesso a artigos ilimitados',
    //   noticia: 'Conteúdo exclusivo para alunos',
    //   edicao: 'Desconto em eventos e workshops',
    //   textoBotao: 'Selecionar',
    //   classe: 'planoPremium',
    // },
    // ];

    planoSelecionado: string = '';
    planoId: number = 0;

    selecionarPlano(plano: string): void {
      this.planoSelecionado = plano;
    }

    selecionarId(id: number): void {
      this.planoId = id;

      // Navega para a página de cadastro com o plano e o id na URL
      this.router.navigate(['/cadastro'], {
        queryParams: { plano: this.planoSelecionado, id: this.planoId },
      });
    }
  }
