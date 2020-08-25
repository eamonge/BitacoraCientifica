import { Component, OnInit } from '@angular/core';
import { ApiServicioProyectosService } from "../ServiciosAPI/ApiServiciosProyectos/api-servicio-proyectos.service";
import { ApiServicioRamasCientificasService } from "../ServiciosAPI/APIServicioRamasCientificas/api-servicio-ramas-cientificas.service";
import { ProyectosModel } from '../ServiciosAPI/Modelos/Proyectos';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RamasCientificasModel } from '../ServiciosAPI/Modelos/RamasCientificas';
import { AuthService } from '../ServiciosAPI/Services/auth.service';

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
  idRandomProyecto: number;

  constructor(private ServicioAPIProyectos: ApiServicioProyectosService, private ServicioAPIRamas: ApiServicioRamasCientificasService, private formbuilder: FormBuilder,public auth:AuthService) {
    this.FormularioProyectos = this.formbuilder.group({
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

    this.idRandomProyecto = Math.floor(Math.random() * 100);

    if (this.InsertarOneProyecto === 'CrearProyecto') {

      const NewPuesto: ProyectosModel = {
        bcProyectoId: this.idRandomProyecto.toString(),
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
