import { Component, OnInit } from '@angular/core';
import { PuestosModel } from 'src/app/ServiciosAPI/Modelos/Puestos';
import { ProyectosModel } from 'src/app/ServiciosAPI/Modelos/Proyectos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioProyectosService } from 'src/app/ServiciosAPI/ApiServiciosProyectos/api-servicio-proyectos.service';
import { ApiServicioRamasCientificasService } from 'src/app/ServiciosAPI/APIServicioRamasCientificas/api-servicio-ramas-cientificas.service';
import { RamasCientificasModel } from 'src/app/ServiciosAPI/Modelos/RamasCientificas';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  ListaProyectos: ProyectosModel[];
  ListaRamasCientificas: RamasCientificasModel[];
  FormularioProyectos: FormGroup;
  InsertarOneProyecto = 'CrearProyecto'

  constructor(private ServicioAPIProyectos: ApiServicioProyectosService, private ServicioAPIRamas: ApiServicioRamasCientificasService, private formbuilder: FormBuilder) {
    this.FormularioProyectos = this.formbuilder.group({
      bcProyectoId: ['', Validators.required],
      nombre: ['', Validators.required],
      bcRamaCientificaId: ['', Validators.required],
    });
  }

  ngOnInit() {

    this.CargarProyectos();
    this.CargarRamasCientificas();

  }
  CargarRamasCientificas() {
    this.ServicioAPIRamas.getAllRamasCientifica().subscribe(dataRamas => {
      this.ListaRamasCientificas = dataRamas;
    })
  }

  CargarProyectos() {
    this.ServicioAPIProyectos.getAllProyectos().subscribe(data => {
      this.ListaProyectos = data;
    });
  }

  InsertProyecto() {

    if (this.InsertarOneProyecto === 'CrearProyecto') {

      const NewPuesto: ProyectosModel = {
        bcProyectoId: this.FormularioProyectos.get('bcProyectoId').value,
        nombre: this.FormularioProyectos.get('nombre').value,
        bcRamaCientificaId: this.FormularioProyectos.get('bcRamaCientificaId').value,
      };

      this.ServicioAPIProyectos.InsertaUnProyecto(NewPuesto).subscribe(datos => {
        alert("Proyecto creado!");
        this.CargarProyectos();
      });
      console.log(this.FormularioProyectos);
    }
  }

  DeleteProyecto(){
    this.ServicioAPIProyectos.DeleteProyecto(this.FormularioProyectos.get('bcProyectoId').value).subscribe(datoEliminado =>{
      alert("EL PROYECTO: "+ this.FormularioProyectos.get('bcProyectoId').value+" "+"Ha sido Eliminado");
      this.CargarProyectos();
    });
  }
}
