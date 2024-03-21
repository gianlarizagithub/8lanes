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
  currentUserLoggedInRole: string = '';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }
  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) 
  {
    if (isPlatformBrowser(this.platformId)) 
    {
    this.alreadyLoggedIn = localStorage.getItem('displayname') !== null ? true : false 
      this.currentUserLoggedInRole = localStorage.getItem('displayname') !== null ? JSON.stringify(localStorage.getItem('displayname')).replace('"', '').replace('"', '') : ''
  
      console.log("isloggedin", this.alreadyLoggedIn)
      console.log("isloggedinrole", this.currentUserLoggedInRole)
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
