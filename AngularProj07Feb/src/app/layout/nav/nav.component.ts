import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="white" role="navigation">
  <div class="nav-wrapper container">
    <a id="logo-container" href="#" class="brand-logo"><img src="https://www.finiq.com/images/FinIQ_Logo.png"></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>

    <ul id="nav-mobile" class="sidenav">
      
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
