import { Router } from '@angular/router';
import { AuthserviceService } from './../services/authservice.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [AuthserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private authServie:AuthserviceService, private routes: Router) { }

  msg;

  ngOnInit() {
  }

  checkUserNameAndPwd(uname: string, pwd: string)
  {
     let output=this.authServie.checkUserNameAndPassword(uname,pwd);
     if(output==true)
     {
       this.routes.navigate(["/dashboard"]);
     }
     else
     {
       this.msg="Invalid username or password";
     }
  }
}
