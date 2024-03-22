import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  toggle() {
    // document.querySelector('#toggle-btn')?.classList.toggle('expand');
    document.querySelector('#sidebar')?.classList.toggle('expand');
  }

  signOut() 
  {
    this.authService.SignOut();
  }
}
