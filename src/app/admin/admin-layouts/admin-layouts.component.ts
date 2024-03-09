import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.scss'
})
export class AdminLayoutsComponent implements OnInit {
constructor(private authService: AuthService, private router: Router) {}


ngOnInit(): void {
  
  this.validateRoleAccess();  
}



validateRoleAccess() 
{
  const currentUserLoggedInRole = this.authService.currentUserLoggedInRole.replace('"', '').replace('"', '')
  if (currentUserLoggedInRole != null || currentUserLoggedInRole == "" || currentUserLoggedInRole == undefined)
  if (currentUserLoggedInRole == 'customer') 
  {
    this.router.navigate(['/form'])
  }
}
}
