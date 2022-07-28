import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  loginHandler(){
    console.log(this.loginData);
  }
}
