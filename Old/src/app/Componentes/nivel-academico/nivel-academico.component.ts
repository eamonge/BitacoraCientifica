import { Component, OnInit } from '@angular/core';
import { NivelAcademicoModel } from 'src/app/ServiciosAPI/Modelos/NivelAcademico';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioNivelAcademicoService } from 'src/app/ServiciosAPI/ApiServicioNivelAcademico/api-servicio-nivel-academico.service';

@Component({
  selector: 'app-nivel-academico',
  templateUrl: './nivel-academico.component.html',
  styleUrls: ['./nivel-academico.component.css']
})
export class NivelAcademicoComponent implements OnInit {

  ListaNivelesAcademicos: NivelAcademicoModel[];

  FomularioBusquedaNivelAcademico: FormGroup;
  FormularioAddNivelAcademico: FormGroup;
  BorrarPuesto = 'BorrarUnPuesto';
  InsertarOnePuesto = 'CrearPuesto';
  BuscarpuestoActual ='BuscaPuesto';

  constructor(private ServicioAPINivelAcademico: ApiServicioNivelAcademicoService, 
    private formbuilder: FormBuilder,
    private formBusquedaBuilder: FormBuilder,
  ) {
    this.FomularioBusquedaNivelAcademico = this.formBusquedaBuilder.group({
      bcNivelAcademicoId: ['', Validators.required],
     
    });

    this.FormularioAddNivelAcademico = this.formbuilder.group({
      bcNivelAcademicoId: ['', Validators.required],
      nombre: ['', Validators.required],
      detalle: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.CargarPuestos();
    
  }

  CargarPuestos() {
    this.ServicioAPINivelAcademico.getAllNivelesAcademicos().subscribe(datos => {
      this.ListaNivelesAcademicos = datos;
    });
  }


  InsertarUnNivelAcademico() {

    if (this.InsertarOnePuesto === 'CrearPuesto') {

      const NewNivelAcademico: NivelAcademicoModel = {
        bcNivelAcademicoId: this.FormularioAddNivelAcademico.get('bcNivelAcademicoId').value,
        nombre: this.FormularioAddNivelAcademico.get('nombre').value,
        detalle: this.FormularioAddNivelAcademico.get('detalle').value,
      };

      this.ServicioAPINivelAcademico.InsertaUnNivelAcademico(NewNivelAcademico).subscribe(datos => {
        alert("Nivel Academico Creado!");
        this.CargarPuestos();
      });
      console.log(this.FormularioAddNivelAcademico);

    }

  }
  BorrarUnNivelAcademico() {

    if (this.BorrarPuesto === 'BorrarUnPuesto') {

      const DeleteNivelAcademico: NivelAcademicoModel = {
        bcNivelAcademicoId: this.FormularioAddNivelAcademico.get('bcNivelAcademicoId').value,
        nombre: '',
        detalle: ''
      };

      this.ServicioAPINivelAcademico.EliminaNivelAcademico(DeleteNivelAcademico.bcNivelAcademicoId).subscribe(datos => {
        alert("Puesto: " + DeleteNivelAcademico.nombre + "Ha sido eliminado!!");
        this.CargarPuestos();
      });
      console.log(this.FormularioAddNivelAcademico);

    }

  }
  BuscarUnNivelAcademico() {

    if (this.BuscarpuestoActual === 'BuscaPuesto') {

      const BuscaNivelAcademico: NivelAcademicoModel = {
        bcNivelAcademicoId: this.FomularioBusquedaNivelAcademico.get('bcNivelAcademicoId').value,
        nombre: '',
        detalle: ''
      };

      this.ServicioAPINivelAcademico.SearchOneNivelAcademico(BuscaNivelAcademico.bcNivelAcademicoId).subscribe(datos => {
        alert("Nivel Academico: " + BuscaNivelAcademico.bcNivelAcademicoId + 
        "\n"+"Nombre: "+datos.nombre+
        "\n"+ "Detalle general: "+datos.detalle);
        this.CargarPuestos();
      });
      console.log(this.FomularioBusquedaNivelAcademico);

    }

  }

}
