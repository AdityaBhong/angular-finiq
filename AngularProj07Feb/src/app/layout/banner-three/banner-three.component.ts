import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-three',
  template: `
  <div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        <h5 class="header col s12 light">
        Financial Technology for fastest Time to Market and Rapid ROI
        </h5>
      </div>
    </div>
  </div>
  <div class="parallax">
    <img src="https://www.finiq.com/images/tokyo.jpg" alt="Unsplashed background img 3" />
  </div>
</div>
  `,
  styles: []
})
export class BannerThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
