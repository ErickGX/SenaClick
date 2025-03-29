import { Routes } from '@angular/router';
import { RevistaComponent } from './componentes/revista/revista.component';
import { IndexComponent } from './componentes/index/index.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { TabelaClienteComponent } from './componentes/admin/tabela-cliente/tabela-cliente.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'revista', component: RevistaComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'admin/tabela-cliente', component: TabelaClienteComponent },
];
