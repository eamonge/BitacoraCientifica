import { Component, OnInit } from '@angular/core';
import { RolesModel } from 'src/app/ServiciosAPI/Modelos/Roles';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioRolService } from 'src/app/ServiciosAPI/ApiServicioRoles/api-servicio-rol.service';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  ListaRoles: RolesModel[];
  FormularioRoles: FormGroup;
  FormularioBuscaRol: FormGroup;

  GuardarRoles = 'CrearRole';
  borraRoles = 'borrarRole';
  BuscaRol = 'buscaRol';

  constructor(private ServicioAPIRoles: ApiServicioRolService,
    private formBuilder: FormBuilder,
    private formbuilderSearch: FormBuilder,
    private router: Router,
  ) {
    this.FormularioRoles = this.formBuilder.group({
      bcRolId: ['', Validators.required],
      nombre: ['', Validators.required],
      detalle: ['', Validators.required]
    });

    this.FormularioBuscaRol = this.formbuilderSearch.group({
      bcRolId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.CargarRoles();
  }

  CargarRoles() {
    this.ServicioAPIRoles.getAllRoles().subscribe(datos => {
      this.ListaRoles = datos;
    });

  }

  InsertarRol() {
    if (this.GuardarRoles === 'CrearRole') {

      const NewRol: RolesModel = {
        bcRolId: this.FormularioRoles.get('bcRolId').value,
        nombre: this.FormularioRoles.get('nombre').value,
        detalle: this.FormularioRoles.get('detalle').value,
      };

      this.ServicioAPIRoles.InsertaUnRol(NewRol).subscribe(datos => {
        alert("Consecutivo creado!");
        this.CargarRoles();
      });
      console.log(this.FormularioRoles);


    }
  }

  BorrarRolActual() {

    if (this.borraRoles === 'borrarRole') {

      const NewRol: RolesModel = {
        bcRolId: this.FormularioRoles.get('bcRolId').value,
        nombre: '',
        detalle: '',
      };

      this.ServicioAPIRoles.BorrarRolSeleccionado(NewRol.bcRolId).subscribe(datos => {
        alert("Consecutivo: " + this.FormularioRoles.get('bcRolId').value + " Ha sido eliminado");
        this.CargarRoles();
      });
      console.log(this.FormularioRoles);


    }

  }

  BuscarRole() {

    

    if (this.BuscaRol === 'buscaRol') {

      const NewSearchRol: RolesModel = {
        bcRolId: this.FormularioBuscaRol.get('bcRolId').value,
        nombre: '',
        detalle: '',
      };

      this.ServicioAPIRoles.getOneRolOnly(NewSearchRol.bcRolId).subscribe(datosBuscados => {
        alert("CODIGO: " + this.FormularioBuscaRol.get('bcRolId').value +
          "\n" + "NOMBRE DEL ROL: " + datosBuscados.nombre +
          "\n" + "DETALLE PONDERADO: " + datosBuscados.detalle);
        this.CargarRoles();
      });
      console.log(this.FormularioBuscaRol);


    }
  }
}
