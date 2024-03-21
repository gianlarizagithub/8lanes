import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isMenuClicked = false;
  alreadyLoggedIn: boolean = false;
  currentUserObjectLoggedIn: any;
  currentUserLoggedInRole: string = '';
  currentUserLoggedInEmail: string = '';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }
  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) 
  {
    this.alreadyLoggedIn = this.authService.isLoggedIn;
      
      this.currentUserObjectLoggedIn = this.authService.getCurrentUserLoggedInObject()
      if (this.currentUserObjectLoggedIn != null || this.currentUserObjectLoggedIn != undefined) 
      {
        this.currentUserLoggedInRole = this.currentUserObjectLoggedIn.displayName;
        this.currentUserLoggedInEmail = this.currentUserObjectLoggedIn.email;
  
      }
    
  }

  toggle() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }

  signout() 
  {
    this.authService.SignOut();
  }
}
