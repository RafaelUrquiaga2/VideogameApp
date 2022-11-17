import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavIsOpen: boolean = true;

  constructor() { }

  changeSidenav(){
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }
}
