import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin/admin.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  const adminService = inject(AdminService); // Injeta o AdminService
  const token = localStorage.getItem('authToken');

  if (token) {
    try {
      // Valida o token no backend
    const response: any = await firstValueFrom(
      adminService.validarToken(token)
    );

      if (response && response.valid) {
        // Token válido, permitir acesso
        return true;
      } else {
        // Token inválido, redirecionar para login
        snackBar.open('Token inválido. Por favor, faça login novamente.', 'Fechar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        router.navigate(['/']);
        return false;
      }
    } catch (error) {
      // Erro na validação do token
      snackBar.open('Erro ao validar o token. Por favor, faça login novamente.', 'Fechar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      router.navigate(['/']);
      return false;
    }
  } else {
    // Sem token, redirecionar para login
    snackBar.open('Você precisa estar logado para acessar esta página.', 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    router.navigate(['/']);
    return false;
  }
};
