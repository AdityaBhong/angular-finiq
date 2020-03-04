import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styles: []
})
export class ReactComponent {

  formGroupName= new FormGroup({
    uName: new FormControl("",Validators.required)
  });

  // onChange()
  // {
  //   console.log(this.formGroupName.get('uName').value);
  // }

  onSubmit()
  {
    console.log(this.formGroupName.get('uName').value);
  }
}
