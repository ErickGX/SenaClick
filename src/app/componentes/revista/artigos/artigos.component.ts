import { Component, OnInit } from '@angular/core';
//import { PlanoService } from '../../../planoService';
import { CommonModule } from '@angular/common';
//import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-artigos',
  imports: [CommonModule],
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {
  artigos = [
    { imagem: 'assets/revista/empreenda.png', txtAlternativo: '', data: '', categoria: 'Empreenda', descricao: 'Acesse os projetos em destaque de 2024.' },
    { imagem: 'assets/revista/kapiva.png',  txtAlternativo: '', data: '', categoria: 'Kapiva Atlética', descricao: 'Inscrições abertas para volei feminino' },
    { imagem: 'assets/revista/visitaTecnica.jpg',  txtAlternativo: '', data: '', categoria: 'Visita Técnica', descricao: 'TOTVS recebe alunos do SENAC' },
    { imagem: 'assets/revista/azure.jpeg',  txtAlternativo: '', data: '', categoria: 'Parceiros', descricao: 'Azure: cursos e certificações gratuitos' }
  ];

//  planoSelecionadoRevista: string | null = null; // Inicializa com null para evitar erro de invocação

//  constructor(public planoService: PlanoService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  //  this.planoSelecionadoRevista = this.planoService.getPlano();
  //  console.log('Plano Selecionado:', this.planoSelecionadoRevista);
  //  this.cdRef.detectChanges();
  }
}
