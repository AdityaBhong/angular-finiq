import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="page-footer teal">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">Company</h5>
        <p class="grey-text text-lighten-4">
          We are at FinIQ Consulting working on this project.
        </p>
      </div>
      <div class="col l3 s12">
        <h5 class="white-text">Products</h5>
        <ul>
          <li><a class="white-text" href="#!">Weath and Treasury</a></li>
          <li><a class="white-text" href="#!">UCP</a></li>
          <li><a class="white-text" href="#!">Pricing Libraries</a></li>
          <li><a class="white-text" href="#!">API Services</a></li>
        </ul>
      </div>
      
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      Made by FiniQ Consulting
     
    </div>
  </div>
</footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
