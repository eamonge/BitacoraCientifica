import { Component, OnInit } from '@angular/core';
import { RolesModel } from '../ServiciosAPI/Modelos/Roles';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicioRolService } from "../ServiciosAPI/ApiServicioRoles/api-servicio-rol.service";
import { ApiServicioConsecutivoService } from '../ServiciosAPI/ApiServicioConsecutivo/api-servicio-consecutivo.service';
import { ConsecutivosModel } from '../ServiciosAPI/Modelos/Consecutivos';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  ListaRoles: RolesModel[];
  ListaSoloConsecutivosRoles: ConsecutivosModel[];
  ListaSoloRolesEnConsecutivo: ConsecutivosModel;
  FormularioRoles: FormGroup;
  FormularioBuscaRol: FormGroup;

  GuardarRoles = 'CrearRole';
  borraRoles = 'borrarRole';
  BuscaRol = 'buscaRol';
  IndicadorRoles:string;

  constructor(private ServicioAPIRoles: ApiServicioRolService,private ServiciosApiConsecutivos:ApiServicioConsecutivoService,
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
    this.BuscaRolPorConsecutivo();
  }
  
  async CargarRoles() {
    await this.ServicioAPIRoles.getAllRoles().subscribe(datos => {
      
      this.ListaRoles = datos;
    });
   
    await this.ServiciosApiConsecutivos.getUnSoloConsecutivo('ROL').subscribe(datosUnicos => {
      console.log(datosUnicos[0]);
      this.IndicadorRoles = datosUnicos[0].prefijo + '-' + datosUnicos[0].valor;
      console.log(this.IndicadorRoles);
    
    });
  }

  InsertarRol() {
    if (this.GuardarRoles === 'CrearRole') {

      const NewRol: RolesModel = {
        bcRolId: this.IndicadorRoles,
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

  BuscaRolPorConsecutivo() {
    
    if (this.BuscaRol === 'buscaRol') {

      const NewSearchRol: RolesModel = {
        bcRolId: this.FormularioBuscaRol.get('bcRolId').value,
        nombre: '',
        detalle: '',
      };

      this.ServiciosApiConsecutivos.getUnSoloConsecutivo(NewSearchRol.bcRolId).subscribe(datosBuscados => {
        datosBuscados = this.ListaSoloConsecutivosRoles;
        
      });


      console.log(this.FormularioBuscaRol);


    }

  }

}
