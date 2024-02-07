import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isMenuClicked = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }
  constructor() {}

  toggle() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }
}
