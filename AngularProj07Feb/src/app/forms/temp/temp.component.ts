import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: []
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendData(user: Object): void
  {
    console.log(user);
  }

  onSubmit(myForm) : void
  {
    console.log(myForm.value.uName);
  }
}
