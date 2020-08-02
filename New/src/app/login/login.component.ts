import { Component, OnInit } from '@angular/core';
declare const myFun:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInUser() {
    myFun();
  }
  
  constructor() { }

  

  ngOnInit(): void {

  }

}
