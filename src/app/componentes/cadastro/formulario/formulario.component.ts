import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//importações para implementacao Backend
import { ClienteService } from '../../../services/cliente/cliente.service'; //Importação da Service Cliente
import { Router } from '@angular/router'; // Importando o Router para redirecionamentos

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  planoSelecionado: string = '';
  selecionarId: number = 0;
  tentouEnviar = false;

  pagamento = [
    {
      input: { type: 'radio', name: 'pagamento', value: 'cartao' },
      imagem: '../../../../assets/card.png',
      modalidade: 'Cartão de Crédito',
    },
    {
      input: { type: 'radio', name: 'pagamento', value: 'boleto' },
      imagem: '../../../../assets/codBarra.png',
      modalidade: 'Boleto Bancário',
    },
    {
      input: { type: 'radio', name: 'pagamento', value: 'pix' },
      imagem: '../../../../assets/pix.png',
      modalidade: 'Pix',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    //injeção dos serviços necessarios
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      idPlano: [{ value: '', disabled: true }],
      tipoPlano: [{ value: '', disabled: true }, Validators.required],
      primeiroNome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [Validators.required, Validators.minLength(8), this.validarSenha],
      ],
      termoCondicoes: [false, Validators.requiredTrue],
      usoImagem: [false],
      pagamento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      document.body.scrollTop = 0; // navegador antigo
      document.documentElement.scrollTop = 0; //navegador moderno
    }, 100);

    this.route.queryParams.subscribe((params) => {
      this.planoSelecionado = params['plano'] || '';
      this.configurarValidacaoPagamento();

      this.formulario.get('tipoPlano')?.setValue(this.planoSelecionado);
    });

    this.route.queryParams.subscribe((params) => {
      this.selecionarId = params['id'] ? parseInt(params['id'], 10) : 0;
      this.configurarValidacaoPagamento();
      this.formulario.get('idPlano')?.setValue(this.selecionarId);
      console.log('Query Params:', params);
    });

    this.formulario.get('pagamento')?.valueChanges.subscribe(() => {
      if (this.tentouEnviar) {
        this.formulario.updateValueAndValidity();
      }
    });
  }

  configurarValidacaoPagamento() {
    const pagamentoControl = this.formulario.get('pagamento');

    if (!pagamentoControl) return; // Garantindo que não seja null

    if (this.planoSelecionado === 'Básico') {
      pagamentoControl.disable({ emitEvent: false });
    } else {
      pagamentoControl.enable({ emitEvent: false });
      pagamentoControl.setValidators(Validators.required);
    }
    pagamentoControl.updateValueAndValidity();
  }

  validarSenha(control: AbstractControl) {
    const senha = control.value;
    if (!senha) return null; // Evita erro de validação ao campo estar vazio

    const senhaValida =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        senha
      );
    return senhaValida ? null : { senhaInvalida: true };
  }

  onPagamentoChange(valor: string) {
    this.formulario.get('pagamento')?.setValue(valor);

    if (this.tentouEnviar) {
      this.formulario.get('pagamento')?.updateValueAndValidity();
    }
  }

  // onSubmit() {
  //   this.tentouEnviar = true; // Indica que o usuário tentou enviar o formulário
  //   this.formulario.markAllAsTouched(); // Marca todos os campos como "tocados"
  //   this.formulario.get('pagamento')?.updateValueAndValidity(); // Atualiza a validade do campo "pagamento"

  //   if (this.formulario.invalid) {
  //     console.log('Formulário inválido:', this.formulario.value);
  //     return;
  //   }else{
  //   console.log('Formulário enviado com sucesso!', this.formulario.value);
  //   }

  //   if (this.formulario.valid) {
  //     this.clienteService.cadastrarClientes(this.formulario.value).subscribe({
  //       next: (response) => {
  //         console.log('Dados enviados !!', response);
  //         alert('Cadastro realizado com Sucesso!');
  //       },
  //       error: (error) => {
  //         console.error('Erro ao cadastrar usuário:', error);
  //         alert('Erro ao cadastrar usuário.');
  //       },
  //     });
  //   } else {
  //     alert('Preencha todos os dados corretamente!!!');
  //   }
  // }


  //modificado para processar corretamente as respostas de erro/sucesso da API baseado em Codigos HTTPS
  onSubmit() {
    this.tentouEnviar = true; // Indica que o usuário tentou enviar o formulário
    this.formulario.markAllAsTouched(); // Marca todos os campos como "tocados"
    this.formulario.get('pagamento')?.updateValueAndValidity(); // Atualiza a validade do campo "pagamento"

    if (this.formulario.invalid) {
      console.log('Formulário inválido:', this.formulario.value);
      return;
    }

    // Capturar todos os dados, incluindo campos desabilitados
    const dados = this.formulario.getRawValue();
    console.log('Enviando dados para API:', dados);

    // Enviar para a API chamando a funcão na Service
    this.clienteService.cadastrarClientes(dados).subscribe({
      next: (response) => {
        console.log('Dados enviados com sucesso!', response);
        alert('Cadastro realizado com sucesso!');

        // Redireciona o usuário para outra página após sucesso , usando Router chamado lá no import e no contrutor
        this.router.navigate(['/revista']); // Substitua '/outra-pagina' pelo caminho desejado
      },
      error: (error) => {
        console.error('Erro ao cadastrar usuário:', error);

        // Aqui, tratei os erros vindos do backend
        if (error.status === 400) {
          // Erro de e-mail já cadastrado
          alert(error.error.error || 'E-mail já cadastrado. Tente outro.');
        } else if (error.status === 500) {
          // Erro do servidor
          alert(
            error.error.error ||
              'Erro interno do servidor. Tente novamente mais tarde.'
          );
        } else {
          // Outros erros
          alert('Erro ao cadastrar usuário. Tente novamente.');
        }
      },
    });
  }
}
