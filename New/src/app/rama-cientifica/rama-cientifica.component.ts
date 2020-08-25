import { Component, OnInit } from '@angular/core';
import { RamasCientificasModel } from '../ServiciosAPI/Modelos/RamasCientificas';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiServicioRamasCientificasService } from '../ServiciosAPI/APIServicioRamasCientificas/api-servicio-ramas-cientificas.service';

@Component({
  selector: 'app-rama-cientifica',
  templateUrl: './rama-cientifica.component.html',
  styleUrls: ['./rama-cientifica.component.css']
})
export class RamaCientificaComponent implements OnInit {

  ListaRamasCientificas: RamasCientificasModel[];
  FormularioRamasCientificas: FormGroup;
  FormularioBuscador: FormGroup;
  FormularioEliminar: FormGroup;

  CrearRama = 'CrearRamaCientifica';
  BuscadorRama = 'BuscarRamaDeseada';
  EliminaRama = 'EliminarRamasCientificasTrue';
  idBusqueda: string;
  idRandomRamaCientifica: number;

  constructor(private ServicioAPIRamasCientifica: ApiServicioRamasCientificasService, private formbuilder: FormBuilder, private formbuilderSearch: FormBuilder) {
    
    this.FormularioBuscador = this.formbuilderSearch.group({
      SearchcodigoRama: ['', Validators.required]
      
    });

    this.FormularioRamasCientificas = this.formbuilder.group({
      nombreRama: ['', Validators.required],
    });

    this.FormularioEliminar = this.formbuilder.group({
      bcRamaCientificaId: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.CargarRamasCientificas();
  }

  CargarRamasCientificas() {
    this.ServicioAPIRamasCientifica.getAllRamasCientifica().subscribe(datos => {
      this.ListaRamasCientificas = datos;
    })
  }

  InsertRamaCientifica() {

    this.idRandomRamaCientifica = Math.floor(Math.random() * 100);

    if (this.CrearRama === 'CrearRamaCientifica') {

      const NewRamaCientifica: RamasCientificasModel = {
        bcRamaCientificaId: 0,
        nombre: this.FormularioRamasCientificas.get('nombreRama').value,
      };

      this.ServicioAPIRamasCientifica.InsertaUnaRamaCientifica(NewRamaCientifica).subscribe(data => {
        alert("Rama Cientifica Añadida!!");
        this.CargarRamasCientificas();
      });

    }
    console.log(this.FormularioRamasCientificas);
  }

  BuscarRamaCientifica() {

      if (this.BuscadorRama === 'BuscarRamaDeseada') {

        const SearchRamaCientifica: RamasCientificasModel = {
          bcRamaCientificaId: this.FormularioBuscador.get('SearchcodigoRama').value,
          nombre: '',
        };
        console.log(this.FormularioBuscador);

        this.ServicioAPIRamasCientifica.BuscarRamaCientifca(SearchRamaCientifica.bcRamaCientificaId).subscribe(dataBuscada => {
          alert("CODIGO: " + dataBuscada.bcRamaCientificaId + "\n" + "Rama: " + dataBuscada.nombre);

        });

      }

  }

  DeleteRamaCientifica(){

    if (this.EliminaRama = 'EliminarRamasCientificasTrue') {

      const SearchRamaCientifica: RamasCientificasModel = {
        bcRamaCientificaId: this.FormularioEliminar.get('bcRamaCientificaId').value,
        nombre:''
      };
      console.log(this.FormularioEliminar);

      this.ServicioAPIRamasCientifica.BorrarRamaCientificaSeleccionado(SearchRamaCientifica.bcRamaCientificaId).subscribe(datoEliminado =>{
        alert("La Rama Cientifica "+ this.FormularioEliminar.get('bcRamaCientificaId').value+" "+"Ha sido Eliminado");
        this.CargarRamasCientificas();
      });
      console.log(this.FormularioEliminar);
    }

   
   
  }
}
