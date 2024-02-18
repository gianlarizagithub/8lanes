import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor() {}

  toggle() {
    // document.querySelector('#toggle-btn')?.classList.toggle('expand');
    document.querySelector('#sidebar')?.classList.toggle('expand');
  }
}
