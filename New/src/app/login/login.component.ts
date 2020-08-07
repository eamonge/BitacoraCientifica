import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from "../ServiciosAPI/Modelos/Login";
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
  
  user: string = 'Claudio';
  pass: string = 'admin123';
  GetAuth:string = 'StartAuth'
  FormularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.FormularioLogin = this.formBuilder.group({
      GetUser: ['', Validators.required],
      GetPass: ['', Validators.required]
    });

   }

  AuthUsuario() {
    
    if (this.GetAuth === 'StartAuth') {
      
      const NewLogin: LoginModel = {
        user: this.FormularioLogin.get('GetUser').value,
        pass: this.FormularioLogin.get('GetPass').value,
      };

      if (NewLogin.user === this.user && NewLogin.pass === this.pass) {
        alert("Inicio de sesion correcto!!!");
        this.logInUser();
        
      } else {
        alert("Verifique las credenciales");
      }

    }
  }
  

  ngOnInit():void {

  }

}
