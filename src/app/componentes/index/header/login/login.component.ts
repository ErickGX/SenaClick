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
    private router: Router
  ) {
    // Definindo os controles do formulário com validação
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Método que será chamado quando o formulário for submetido
  onSubmit(): void {


    if (this.loginForm.invalid) {
      console.log('Formulário ADMIN inválido:', this.loginForm.getRawValue());
      return; // Não faz nada se o formulário for inválido
    }

    const dados = this.loginForm.value;

    console.log('FILHO DA PUTA:', JSON.stringify(dados, null, 2));

      // Enviar para a API chamando a funcão na Service
      this.adminService.loginAdmin(dados).subscribe({
        next: (response) => {
          console.log('Dados enviados com sucesso!', response);
          alert('Login realizado com sucesso!');

          // Redireciona o usuário para outra página após sucesso , usando Router chamado lá no import e no contrutor
          this.router.navigate(['/admin']); // Substitua '/outra-pagina' pelo caminho desejado
        },
        error: (error) => {

         console.log('Dados recebidos no TS:', JSON.stringify(dados, null, 2));


          console.error('Erro ao logar :', error);

          // Aqui, tratei os erros vindos do backend
          if (error.status === 404) {
            // Erro de e-mail já cadastrado
            alert(error.error.error || 'Admin Inexistente, Tente novamente');
          } else if (error.status === 401) {
            // Erro do servidor
            alert(
              error.error.error || 'Senha incorreta'
            );
          } else {
            // Outros erros
            alert('Erro ao logar admin');
          }
        },
      });


  }
}
