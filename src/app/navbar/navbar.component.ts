import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

constructor(private viewPortScroller: ViewportScroller){}

  scrollTo(idName:string){
      this.viewPortScroller.scrollToAnchor(idName);
  }
}
