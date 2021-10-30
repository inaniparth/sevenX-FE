import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../service/auth-service/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    
  }
  
  canActivate(): boolean {
    if (this.authService && this.authService.isAdminLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
