import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/ServiciosAPI/Modelos/Login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
    CorreoPrueba ='correotest@gmail.com';
    Contraseña = 'admin12345';
    FormularioLogin:FormGroup;

    inicio = 'IniciaSesion';

  constructor(private formbuilder:FormBuilder) {

    this.formbuilder.group({

      user:['',Validators.required],
      pass:['',Validators.required]

    })

  }

  MakeLogin(){

    if (this.inicio === 'IniciaSesion') {
      
      const NewLogin : LoginModel = {
        user:this.FormularioLogin.get('user').value,
        pass:this.FormularioLogin.get('pass').value,

        
      };

     

    }
    
  }
}
