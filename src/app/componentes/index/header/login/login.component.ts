// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   mostrarFormulario: boolean = false;

//   toggleFormulario(): void {
//     this.mostrarFormulario = !this.mostrarFormulario;
//   }

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importando o FormBuilder
import { AdminService } from '../../../../services/admin/admin.service';
import { ReactiveFormsModule } from '@angular/forms'; //Faltando import do reactive module
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule], //ReactiveFormsModule nao tava importado tava dando erro ao enviar /Corrigido
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mostrarFormulario: boolean = false;
  loginForm: FormGroup;
  

  // Injectando a service de autenticação e FormBuilder
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private snackBar: MatSnackBar // Injetando o MatSnackBar

    
  ) {
    
    
    // Definindo os controles do formulário com validação
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  
  // Método que será chamado quando o formulário for submetido
  onSubmit(): void {
    if (this.loginForm.invalid) {
      // console.log('Formulário ADMIN inválido:', this.loginForm.getRawValue());
      return; // Não faz nada se o formulário for inválido
    }

    const dados = this.loginForm.value;

    //console.log('FILHO DA PUTA:', JSON.stringify(dados, null, 2));

    // Enviar para a API chamando a funcão na Service
    this.adminService.loginAdmin(dados).subscribe({
      next: (response) => {
        // Armazena o token no localStorage
        localStorage.setItem('authToken', response.token);

        // console.log('Dados enviados com sucesso!', response);
       // alert('Login realizado com sucesso!');

        this.snackBar.open('Login realizado com Sucesso.', 'OK', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

        // Redireciona o usuário para outra página após sucesso
        // , usando Router chamado lá no import e no contrutor
        this.router.navigate(['/admin']); // Substitua '/outra-pagina' pelo caminho desejado
      },
      error: (error) => {
        //console.log('Dados recebidos no TS:', JSON.stringify(dados, null, 2));
        console.error('Erro ao logar :', error);

        // Tratamento de erros com base no status code
        switch (error.status) {
          case 400:
            // alert(
            //   error.error.message ||
            //     'Requisição inválida. Verifique os dados e tente novamente.'
            // );

              this.snackBar.open('Requisição inválida. Verifique os dados e tente novamente.', 'Fechar', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            break;
          case 401:
            //alert(error.error.error || 'Senha incorreta. Tente novamente.');
            this.snackBar.open('Senha incorreta. Tente novamente.', 'Fechar', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            
            break;
          case 404:
            // alert(
            //   error.error.error ||
            //     'Email não encontrado. Verifique e tente novamente.'
            // );
             this.snackBar.open('Email não encontrado. Verifique e tente novamente.', 'Fechar', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            break;
          case 500:
            alert(
              error.error.error ||
                'Erro interno do servidor. Tente novamente mais tarde.'
            );
            break;
          default:
            alert('Ocorreu um erro inesperado. Tente novamente.');
            break;
        }
      },
    });
  }
}
