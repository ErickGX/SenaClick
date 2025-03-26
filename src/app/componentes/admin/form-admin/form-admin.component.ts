import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-admin.component.html',
  styleUrl: './form-admin.component.css'
})
export class FormAdminComponent {

  filtro: string = '';

  usuarios = [
    { nome: '1', sobrenome: 'Beraldo', email: 'vagner@gmail.com', plano: 'Premium' , },
    { nome: 'Guilherme', sobrenome: 'Kishida', email: 'guilherme@gmail.com', plano: 'Básico' },
    { nome: 'Daiane', sobrenome: 'Raso', email: 'raso@gmail.com', plano: 'Estudante' },
    { nome: 'Erik', sobrenome: 'GX', email: 'gx@gmail.com', plano: 'Premium' },
    { nome: 'Davi', sobrenome: 'Roque', email: 'roqueiro@gmail.com', plano: 'Básico' },
  ];

  get usuariosFiltrados() {
    return this.usuarios.filter(usuario =>
      Object.values(usuario).some(valor =>
        valor.toLowerCase().includes(this.filtro.toLowerCase())
      )
    );
  }

  alterarUsuario(usuario: any) {
    alert(`Alterar: ${usuario.nome}`);
  }

  excluirUsuario(usuario: any) {
    if (confirm(`Tem certeza que deseja excluir ${usuario.nome}?`)) {
      
    }
  }

}
