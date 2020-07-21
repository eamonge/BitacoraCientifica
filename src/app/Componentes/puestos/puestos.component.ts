import { Component, OnInit } from '@angular/core';
import { PuestosModel } from 'src/app/ServiciosAPI/Modelos/Puestos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioPuestos } from 'src/app/ServiciosAPI/ApiServicioPuestos/api-servicio-puesto.service';
import { RolesModel } from 'src/app/ServiciosAPI/Modelos/Roles';
import { ApiServicioRolService } from 'src/app/ServiciosAPI/ApiServicioRoles/api-servicio-rol.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {


  ListaPuestos: PuestosModel[];
  ListaRolesCodigo: RolesModel[];

  FormularioPuestos: FormGroup;
  FomularioBusquedaPuesto: FormGroup;
  BorrarPuesto = 'BorrarUnPuesto';
  InsertarOnePuesto = 'CrearPuesto';
  BuscarpuestoActual ='BuscaPuesto';

  constructor(private ServicioAPIPuestos: ApiServicioPuestos, private ServicioRoles: ApiServicioRolService,
    private formbuilder: FormBuilder,
    private formBusquedaBuilder: FormBuilder,
  ) {
    this.FomularioBusquedaPuesto = this.formBusquedaBuilder.group({
      bcPuestoId: ['', Validators.required],
     
    });

    this.FormularioPuestos = this.formbuilder.group({
      bcPuestoId: ['', Validators.required],
      detalle: ['', Validators.required],
      bcRolId: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.CargarPuestos();
    this.CargarRolesActuales();
  }

  CargarPuestos() {
    this.ServicioAPIPuestos.getAllPuestos().subscribe(datos => {
      this.ListaPuestos = datos;
    });
  }
  CargarRolesActuales() {
    this.ServicioRoles.getAllRoles().subscribe(datos => {
      this.ListaRolesCodigo = datos;
    });
  }

  InsertarUnPuesto() {

    if (this.InsertarOnePuesto === 'CrearPuesto') {

      const NewPuesto: PuestosModel = {
        bcPuestoId: this.FormularioPuestos.get('bcPuestoId').value,
        detalle: this.FormularioPuestos.get('detalle').value,
        bcRolId: this.FormularioPuestos.get('bcRolId').value,
      };

      this.ServicioAPIPuestos.InsertaUnPuesto(NewPuesto).subscribe(datos => {
        alert("Puesto creado!");
        this.CargarPuestos();
      });
      console.log(this.FormularioPuestos);

    }

  }
  BorrarUnPuesto() {

    if (this.BorrarPuesto === 'BorrarUnPuesto') {

      const DeletePuesto: PuestosModel = {
        bcPuestoId: this.FomularioBusquedaPuesto.get('bcPuestoId').value,
        detalle: '',
        bcRolId: ''
      };

      this.ServicioAPIPuestos.BorrarPuesto(DeletePuesto.bcPuestoId).subscribe(datos => {
        alert("Puesto: " + DeletePuesto.bcPuestoId + "Ha sido eliminado!!");
        this.CargarPuestos();
      });
      console.log(this.FomularioBusquedaPuesto);

    }

  }
  BuscarUnPuesto() {

    if (this.BuscarpuestoActual === 'BuscaPuesto') {

      const BuscaPuesto: PuestosModel = {
        bcPuestoId: this.FomularioBusquedaPuesto.get('bcPuestoId').value,
        detalle: '',
        bcRolId: ''
      };

      this.ServicioAPIPuestos.getOnePuesto(BuscaPuesto.bcPuestoId).subscribe(datos => {
        alert("Puesto: " + BuscaPuesto.bcPuestoId + 
        "\n"+"Detalle general: "+datos.detalle+
        "\n"+ "Rol Actual: "+datos.bcRolId);
        this.CargarPuestos();
      });
      console.log(this.FomularioBusquedaPuesto);

    }

  }
}
