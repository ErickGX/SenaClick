import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cursos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cursos = [
    {
      imagem: 'assets/ads.png',
      tipo: 'Presencial',
      graduacao: 'Bacharelado',
      nome: 'Engenharia de Software',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Live | Presencial',
      graduacao: 'Tecnólogo',
      nome: 'Gestão da Tecnologia da Informação',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Presencial',
      graduacao: 'Bacharelado',
      nome: 'Engenharia de Software',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Live | Presencial',
      graduacao: 'Tecnólogo',
      nome: 'Gestão da Tecnologia da Informação',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Presencial',
      graduacao: 'Bacharelado',
      nome: 'Engenharia de Software',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Presencial',
      graduacao: 'Bacharelado',
      nome: 'Engenharia de Software',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Live | Presencial',
      graduacao: 'Tecnólogo',
      nome: 'Gestão da Tecnologia da Informação',
      matricula: 'Matrícula Fechada',
      bolsa: 'Bolsa de Estudo'
    },
    {
      imagem: 'assets/ads.png',
      tipo: 'Live | Presencial',
      graduacao: 'Tecnólogo',
      nome: 'Gestão da Tecnologia da Informação',
      matricula: 'Matrícula Aberta',
      bolsa: 'Bolsa de Estudo'
    }

  ];

  constructor() { }

  ngOnInit(): void {}
}
